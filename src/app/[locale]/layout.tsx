import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import LanguageButton from '../../components/common/buttons/language';
import Navbar from '../../components/navbar';
import Footer from '@/src/components/footer';

interface ILocalLayout {
    children: React.ReactNode,
    params: { locale: string }
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: Readonly<ILocalLayout>) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        // <html lang={locale}>
        //     <body>
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
        //     </body>
        // </html>
    );
}