import { useLocale, useTranslations } from "next-intl";
import Landing from "../../components/page/landing/landing";
import { setRequestLocale, getTranslations } from "next-intl/server";
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // const locale = useLocale(); // Get the active locale
  setRequestLocale(locale);

  // Fetch translations on the server
  const t = await getTranslations("landing");
  return (
    <main className={`${locale == "fa" ? "rtl" : "ltr"} ${locale}`}>
      <Landing />
    </main>
  );
}
