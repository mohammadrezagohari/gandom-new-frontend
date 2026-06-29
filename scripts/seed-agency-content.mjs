import { inArray } from "drizzle-orm"
import { db, sqlite } from "../src/db/index.mjs"
import { articles, siteContents } from "../src/db/schema.mjs"
import { siteContentDefinitions } from "../src/content/siteDefaults.js"

const retiredSeedSlugs=["bilingual-content-strategy","seo-content-localization-checklist","design-system-content-governance","scaling-admin-content-workflows"]
const articleSeeds=[
{
slug:"from-idea-to-scalable-digital-product",
titleTranslations:{fa:"از ایده تا محصول دیجیتال مقیاس‌پذیر؛ مسیر درست توسعه چیست؟",en:"From idea to a scalable digital product: a practical development path"},
excerptTranslations:{fa:"چطور کشف محصول، طراحی تجربه و مهندسی نرم‌افزار را در یک مسیر کم‌ریسک کنار هم قرار دهیم.",en:"How product discovery, experience design and software engineering reduce risk when they move together."},
contentTranslations:{
fa:"ساخت محصول موفق با انتخاب فریم‌ورک شروع نمی‌شود؛ با روشن شدن مسئله، کاربر و نتیجه‌ای که کسب‌وکار انتظار دارد آغاز می‌شود. در مرحله کشف محصول، فرضیه‌ها، جریان‌های اصلی و معیارهای موفقیت را مشخص می‌کنیم تا تیم روی چیزی سرمایه‌گذاری کند که واقعاً ارزش ساختن دارد.\n\nپس از اعتبارسنجی، طراحی تجربه و معماری فنی باید هم‌زمان جلو بروند. پروتوتایپ به ما اجازه می‌دهد قبل از توسعه پرهزینه، مسیر کاربر را آزمایش کنیم و معماری مناسب کمک می‌کند نسخه اول بدون ایجاد بدهی فنی خطرناک منتشر شود.\n\nانتشار پایان پروژه نیست. داده‌های استفاده، بازخورد کاربران و اهداف تجاری باید وارد چرخه بهبود شوند. محصولی مقیاس‌پذیر محصولی است که تیم بتواند با اطمینان آن را تغییر دهد، اندازه‌گیری کند و همراه بازار توسعه دهد.",
en:"Successful products do not start with a framework choice. They start with a clear problem, a defined user and an agreed business outcome. During discovery, we map assumptions, critical journeys and success metrics so the team invests in something worth building.\n\nOnce the direction is validated, experience design and technical architecture should move together. Prototypes test user journeys before expensive implementation, while sound architecture lets the first release ship without creating dangerous technical debt.\n\nLaunch is not the end. Usage data, customer feedback and business goals belong in a continuous improvement loop. A scalable product is one the team can change, measure and grow with confidence."
},
authorTranslations:{fa:"تیم محصول گندم",en:"Gandom Product Team"},coverImage:"/wimg.png",publishedAt:"2026-06-10",readingMinutes:7,sortOrder:1,isActive:true
},
{
slug:"when-custom-software-is-right-for-your-business",
titleTranslations:{fa:"چه زمانی نرم‌افزار اختصاصی برای کسب‌وکار شما انتخاب درستی است؟",en:"When is custom software the right choice for your business?"},
excerptTranslations:{fa:"مقایسه‌ای عملی میان ابزار آماده و توسعه اختصاصی بر اساس فرآیند، یکپارچگی و رشد آینده.",en:"A practical comparison of off-the-shelf tools and custom development based on workflows, integrations and growth."},
contentTranslations:{
fa:"ابزارهای آماده برای شروع سریع عالی‌اند، اما وقتی فرآیند اصلی کسب‌وکار شما با محدودیت‌های آن‌ها شکل می‌گیرد، هزینه پنهان ایجاد می‌شود. ورود تکراری اطلاعات، گزارش‌های ناکافی و اتصال‌های شکننده نشانه‌هایی هستند که باید گزینه اختصاصی را جدی‌تر بررسی کنید.\n\nنرم‌افزار اختصاصی زمانی ارزشمند است که یک مزیت رقابتی را تقویت کند، چند سیستم را یکپارچه سازد یا عملیات پرتکرار را به شکل قابل اندازه‌گیری بهبود دهد. هدف ساختن همه چیز از صفر نیست؛ هدف طراحی دقیق همان بخشی است که ابزار عمومی نمی‌تواند حل کند.\n\nتصمیم خوب با محاسبه هزینه کل مالکیت گرفته می‌شود: زمان تیم، خطاهای عملیاتی، هزینه مجوز، ریسک مهاجرت و فرصت رشد. یک فاز کشف کوتاه می‌تواند پیش از شروع توسعه، تصویر مالی و فنی شفافی بسازد.",
en:"Off-the-shelf tools are excellent for moving quickly, but hidden costs appear when your core operation bends around their limitations. Duplicate data entry, weak reporting and fragile integrations are signals that a custom option deserves consideration.\n\nCustom software creates value when it strengthens a competitive advantage, connects multiple systems or measurably improves a high-frequency workflow. The goal is not to rebuild everything. It is to engineer the part generic software cannot solve well.\n\nA sound decision considers total cost of ownership: team time, operational errors, licensing, migration risk and growth opportunities. A focused discovery phase can clarify the financial and technical case before development begins."
},
authorTranslations:{fa:"تیم مهندسی گندم",en:"Gandom Engineering Team"},coverImage:"/wimg.png",publishedAt:"2026-06-14",readingMinutes:6,sortOrder:2,isActive:true
},
{
slug:"mobile-app-mvp-without-technical-debt",
titleTranslations:{fa:"چطور MVP اپلیکیشن موبایل را سریع و بدون بدهی فنی خطرناک بسازیم؟",en:"How to build a mobile MVP quickly without dangerous technical debt"},
excerptTranslations:{fa:"نسخه اولیه کوچک‌تر، تصمیم‌های معماری هوشمند و برنامه‌ای روشن برای یادگیری از کاربران.",en:"A smaller first release, deliberate architecture and a clear plan to learn from real users."},
contentTranslations:{
fa:"سرعت در MVP به معنی حذف کیفیت نیست؛ یعنی حذف قابلیت‌هایی که هنوز ارزش آن‌ها ثابت نشده است. ابتدا یک جریان اصلی را انتخاب کنید که کاربر بتواند با آن نتیجه واقعی بگیرد و معیار مشخصی برای سنجش موفقیت همان جریان تعریف کنید.\n\nدر معماری نیز لازم نیست از روز اول برای میلیون‌ها کاربر هزینه کنید، اما مرزهای داده، امنیت، مانیتورینگ و انتشار باید جدی گرفته شوند. تصمیم‌های برگشت‌ناپذیر را با دقت بگیرید و بخش‌هایی را که احتمال تغییر دارند ساده و قابل جایگزینی نگه دارید.\n\nپس از انتشار، مصاحبه، تحلیل رفتار و خطاهای واقعی باید اولویت نسخه بعدی را تعیین کنند. تیمی که سریع یاد می‌گیرد، معمولاً از تیمی که فقط سریع کد می‌زند جلوتر می‌ماند.",
en:"Speed in an MVP does not mean removing quality. It means removing features whose value is still unproven. Choose one core journey that delivers a real outcome and define a measurable signal of success for that journey.\n\nThe architecture does not need to serve millions on day one, but data boundaries, security, monitoring and release discipline still matter. Treat irreversible decisions carefully and keep likely-to-change areas simple and replaceable.\n\nAfter release, interviews, behavior analytics and production errors should shape the next iteration. A team that learns quickly usually outpaces one that only codes quickly."
},
authorTranslations:{fa:"تیم موبایل گندم",en:"Gandom Mobile Team"},coverImage:"/wimg.png",publishedAt:"2026-06-18",readingMinutes:5,sortOrder:3,isActive:true
},
{
slug:"website-redesign-business-checklist",
titleTranslations:{fa:"بازطراحی سایت؛ چک‌لیستی برای بهبود تجربه، سرعت و فروش",en:"Website redesign checklist for better experience, speed and conversion"},
excerptTranslations:{fa:"بازطراحی موفق فقط تغییر ظاهر نیست؛ باید مسئله محتوا، فناوری، سئو و تبدیل را هم‌زمان حل کند.",en:"A successful redesign goes beyond visuals to address content, technology, SEO and conversion together."},
contentTranslations:{
fa:"اگر کاربران مسیر خدمات را پیدا نمی‌کنند، سایت کند است یا تیم برای هر تغییر کوچک به توسعه‌دهنده وابسته می‌شود، بازطراحی می‌تواند یک سرمایه‌گذاری واقعی باشد. پیش از طراحی بصری، داده‌های آنالیتیکس، جست‌وجوی کاربران و بازخورد تیم فروش را بررسی کنید.\n\nساختار محتوا و معماری اطلاعات باید پیام اصلی برند را سریع منتقل کند. سپس طراحی رابط، دسترس‌پذیری، عملکرد فنی و سئوی تکنیکال روی همان ساختار پیاده می‌شوند. انتقال آدرس‌ها و محتوای قدیمی نیز باید برنامه مشخص داشته باشد تا اعتبار جست‌وجو از دست نرود.\n\nبرای سنجش نتیجه، شاخص‌هایی مثل نرخ تبدیل، زمان بارگذاری، کیفیت سرنخ و توان تیم محتوا برای انتشار مستقل را قبل و بعد از بازطراحی مقایسه کنید.",
en:"When users cannot find services, pages are slow or every small update needs a developer, a redesign can become a meaningful investment. Before visual design, review analytics, search behavior and feedback from sales and support teams.\n\nContent structure and information architecture should communicate the brand's core message quickly. Interface design, accessibility, performance and technical SEO then build on that foundation. Existing URLs and content also need a migration plan to preserve search equity.\n\nMeasure the result through conversion rate, loading performance, lead quality and the content team's ability to publish independently before and after the redesign."
},
authorTranslations:{fa:"تیم طراحی گندم",en:"Gandom Design Team"},coverImage:"/wimg.png",publishedAt:"2026-06-22",readingMinutes:6,sortOrder:4,isActive:true
},
{
slug:"choosing-software-agency-partner",
titleTranslations:{fa:"برای انتخاب آژانس نرم‌افزاری به چه چیزهایی توجه کنیم؟",en:"How to choose the right software agency partner"},
excerptTranslations:{fa:"سؤال‌هایی که کیفیت فنی، شفافیت همکاری و توانایی تحویل واقعی یک تیم را آشکار می‌کنند.",en:"Questions that reveal technical quality, collaboration transparency and a team's ability to deliver."},
contentTranslations:{
fa:"نمونه‌کار مهم است، اما نحوه تصمیم‌گیری تیم مهم‌تر است. از آژانس بخواهید توضیح دهد چگونه مسئله را کشف می‌کند، ریسک‌ها را گزارش می‌دهد و بین سرعت، کیفیت و بودجه تعادل برقرار می‌کند. پاسخ روشن معمولاً نشانه یک فرآیند بالغ است.\n\nمالکیت کد، مستندات، تست، امنیت، استقرار و پشتیبانی پس از انتشار باید پیش از قرارداد مشخص باشند. همچنین بدانید چه کسانی واقعاً روی پروژه کار می‌کنند و ارتباط روزانه یا هفتگی با چه سازوکاری انجام می‌شود.\n\nهمکاری خوب فقط رابطه سفارش‌دهنده و مجری نیست. شریک فنی مناسب فرضیات را به چالش می‌کشد، گزینه‌ها را با پیامدهایشان توضیح می‌دهد و موفقیت محصول را بخشی از مسئولیت خودش می‌داند.",
en:"Portfolio work matters, but the team's decision process matters more. Ask how the agency discovers the problem, reports risks and balances speed, quality and budget. Clear answers usually indicate a mature delivery practice.\n\nCode ownership, documentation, testing, security, deployment and post-launch support should be explicit before the contract. You should also know who will work on the product and how daily or weekly communication will happen.\n\nA strong engagement is more than a client-vendor relationship. The right technical partner challenges assumptions, explains options with their consequences and treats product success as part of its own responsibility."
},
authorTranslations:{fa:"گندم",en:"Gandom"},coverImage:"/wimg.png",publishedAt:"2026-06-26",readingMinutes:5,sortOrder:5,isActive:true
}
]

try {
  for(const item of siteContentDefinitions){
    db.insert(siteContents).values({...item,translations:JSON.stringify(item.translations)}).onConflictDoNothing({target:siteContents.key}).run()
  }
  db.update(articles).set({isActive:false,updatedAt:new Date()}).where(inArray(articles.slug,retiredSeedSlugs)).run()
  for(const article of articleSeeds){
    const values={...article,titleTranslations:JSON.stringify(article.titleTranslations),excerptTranslations:JSON.stringify(article.excerptTranslations),contentTranslations:JSON.stringify(article.contentTranslations),authorTranslations:JSON.stringify(article.authorTranslations)}
    db.insert(articles).values(values).onConflictDoUpdate({target:articles.slug,set:{...values,updatedAt:new Date()}}).run()
  }
  console.log("Agency site content and articles seeded.")
} finally { sqlite.close() }
