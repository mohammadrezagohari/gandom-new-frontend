import { createPageMetadata } from "./seo"
const copy = {
  home: { en: ["Software Development, Product Design and SEO", "Gandom is your technology partner for custom software, web and mobile development, product design, technical SEO and digital growth."], fa: ["توسعه نرم‌افزار، طراحی محصول و سئو", "گندم شریک فنی شما برای توسعه نرم‌افزار اختصاصی، طراحی وب و اپلیکیشن، طراحی محصول، سئوی فنی و رشد دیجیتال است."] },
  "about-us": { en: ["About Gandom Software Agency", "Meet Gandom's multidisciplinary team and learn how we design, build and grow reliable digital products."], fa: ["درباره آژانس نرم‌افزاری گندم", "با تیم چندتخصصی گندم و رویکرد ما برای طراحی، توسعه و رشد محصولات دیجیتال قابل اتکا آشنا شوید."] },
  service: { en: ["Software Development and Digital Product Services", "Explore Gandom's custom software, web and mobile development, product design, SEO, content and technical support services."], fa: ["خدمات توسعه نرم‌افزار و محصول دیجیتال", "خدمات گندم در توسعه نرم‌افزار اختصاصی، وب و موبایل، طراحی محصول، سئو، محتوا و پشتیبانی فنی را ببینید."] },
  portfolio: { en: ["Digital Product Portfolio", "See selected software, web, mobile and product design projects delivered by the Gandom team."], fa: ["نمونه‌کارهای محصولات دیجیتال", "منتخبی از پروژه‌های نرم‌افزار، وب، موبایل و طراحی محصول اجراشده توسط تیم گندم را ببینید."] },
  weblog: { en: ["Technology, Product and SEO Weblog", "Practical articles and videos about software development, product design, technical SEO and digital growth."], fa: ["وبلاگ فناوری، محصول و سئو", "مقاله‌ها و ویدئوهای کاربردی درباره توسعه نرم‌افزار، طراحی محصول، سئوی فنی و رشد دیجیتال."] },
  article: { en: ["Software, Product and SEO Articles", "Read Gandom's latest articles about software engineering, product design, SEO and building sustainable digital products."], fa: ["مقالات نرم‌افزار، محصول و سئو", "جدیدترین مقاله‌های گندم درباره مهندسی نرم‌افزار، طراحی محصول، سئو و ساخت محصولات دیجیتال پایدار را بخوانید."] },
  team: { en: ["Gandom Team", "Meet the product designers, software engineers and growth specialists behind Gandom's digital products."], fa: ["تیم گندم", "با طراحان محصول، مهندسان نرم‌افزار و متخصصان رشد تیم گندم آشنا شوید."] },
  contact: { en: ["Contact Gandom", "Tell Gandom about your software, website, application, product design or SEO project and start a focused conversation."], fa: ["تماس با گندم", "درباره پروژه نرم‌افزار، وب‌سایت، اپلیکیشن، طراحی محصول یا سئوی خود با تیم گندم گفتگو کنید."] },
  videos: { en: ["Technology Videos", "Watch Gandom videos about software, digital products and technology."], fa: ["ویدئوهای فناوری", "ویدئوهای گندم درباره نرم‌افزار، محصول دیجیتال و فناوری را ببینید."] },
}
export function staticMetadata(locale, key) {
  const currentLocale = locale === "fa" ? "fa" : "en"
  const [title, description] = (copy[key] || copy.home)[currentLocale]
  return createPageMetadata({ locale: currentLocale, pathname: key === "home" ? "" : key, title, description })
}
