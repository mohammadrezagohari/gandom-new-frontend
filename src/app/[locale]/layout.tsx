import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import React from 'react';
// import LanguageButton from '../../components/common/buttons/language';
import Navbar from '../../components/navbar';
import Footer from '@/src/components/footer';
import LocaleDocument from '@/src/components/common/locale-document';

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
