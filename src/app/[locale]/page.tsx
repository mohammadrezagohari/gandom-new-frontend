import { useLocale, useTranslations } from "next-intl";
import Landing from "../../components/page/landing/landing";

export default function HomePage() {
    const locale = useLocale(); // Get the active locale

    const t = useTranslations("landing");
    return (
        <main className={`${locale == "fa" ? "rtl" : "ltr"} ${locale}`}>
            <Landing />
        </main>
    );
}
