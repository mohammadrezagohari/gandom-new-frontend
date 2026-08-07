import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from 'react';
// import LanguageButton from '../../components/common/buttons/language';
import Navbar from '../../components/navbar';
import Footer from '@/src/components/footer';
import LocaleDocument from '@/src/components/common/locale-document';
import JsonLd from '@/src/components/seo/json-ld';
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/src/lib/seo';
import { staticMetadata } from '@/src/lib/staticPageMetadata';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
    const {locale} = await params;
    return staticMetadata(locale, "home");
}

interface ILocalLayout {
    children: React.ReactNode,
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
    children,
    params
}: Readonly<ILocalLayout>) {
    const {locale} = await params;
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        // <html lang={locale}>
        //     <body>
        <NextIntlClientProvider messages={messages}>
            <div lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} className={`site-locale min-h-screen ${locale === "fa" ? "fa" : "en"}`}>
                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {"@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL, logo: absoluteUrl("/img/logo.png"), email: "info@gandom.link", sameAs: ["https://instagram.com/gandom.link", "https://linkedin.com/company/gandom-eg/"]},
                        {"@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, publisher: {"@id": `${SITE_URL}/#organization`}, inLanguage: ["fa-IR", "en-US"]},
                    ],
                }} />
                <LocaleDocument locale={locale} />
                <Navbar />
                {children}
                <Footer />
            </div>
        </NextIntlClientProvider>
        //     </body>
        // </html>
    );
}
