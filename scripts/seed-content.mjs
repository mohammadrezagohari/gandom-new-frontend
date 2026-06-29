import { db, sqlite } from "../src/db/index.mjs"
import { articles, teamMembers } from "../src/db/schema.mjs"
import { eq } from "drizzle-orm"

const articleSeeds = [
  {
    slug: "bilingual-content-strategy",
    titleTranslations: { en: "How to Build a Bilingual Content Strategy for Product Teams", fa: "چطور برای تیم محصول یک استراتژی محتوای دوزبانه بسازیم" },
    excerptTranslations: { en: "A practical framework for planning, governing and publishing multilingual content without slowing the team down.", fa: "یک چارچوب عملی برای برنامه‌ریزی، حاکمیت و انتشار محتوای چندزبانه بدون کند شدن روند تیم." },
    contentTranslations: {
      en: "Multilingual content becomes sustainable when teams treat it as part of product delivery, not a last-minute publishing task. Start by defining one source of truth for every entity, decide which fields must be translated, and make those rules visible in the admin panel.\n\nThe second step is operational discipline. Editors need predictable slug rules, fallback behavior, review ownership and clear publishing dates. When those rules are stored with the content itself, list pages, detail pages and seeded data stay aligned across languages.\n\nFinally, invest in reusable content structures. Titles, summaries, body text, author names and short metadata should follow the same translation pattern. That consistency lowers maintenance cost and makes future migrations much easier.",
      fa: "محتوای چندزبانه زمانی پایدار می‌شود که تیم‌ها آن را بخشی از فرایند تحویل محصول بدانند، نه کاری که در آخرین لحظه برای انتشار انجام می‌شود. از تعیین یک منبع حقیقت برای هر موجودیت شروع کنید، مشخص کنید کدام فیلدها باید ترجمه شوند و این قواعد را در پنل مدیریت شفاف نگه دارید.\n\nگام دوم، نظم عملیاتی است. ویراستارها به قانون مشخص برای slug، رفتار fallback، مسئول بازبینی و تاریخ انتشار نیاز دارند. وقتی این قواعد همراه خود محتوا ذخیره شوند، صفحه‌های لیست، جزئیات و داده‌های seed در همه زبان‌ها هماهنگ می‌مانند.\n\nدر نهایت، روی ساختارهای قابل استفاده مجدد سرمایه‌گذاری کنید. عنوان، خلاصه، متن اصلی، نام نویسنده و متادیتای کوتاه باید از یک الگوی ترجمه مشترک پیروی کنند. این یکدستی هزینه نگه‌داری را پایین می‌آورد و مهاجرت‌های بعدی را بسیار ساده‌تر می‌کند."
    },
    authorTranslations: { en: "Gandom Editorial Team", fa: "تیم محتوای گندم" },
    coverImage: "/wimg.png",
    publishedAt: "2026-06-01",
    readingMinutes: 6,
    sortOrder: 1,
    isActive: true,
  },
  {
    slug: "seo-content-localization-checklist",
    titleTranslations: { en: "SEO Content Localization Checklist for Persian and English", fa: "چک‌لیست بومی‌سازی محتوای سئو برای فارسی و انگلیسی" },
    excerptTranslations: { en: "The small technical details that keep translated content discoverable, readable and structurally consistent.", fa: "ریزجزئیات فنی که باعث می‌شوند محتوای ترجمه‌شده قابل کشف، خوانا و از نظر ساختاری یکدست بماند." },
    contentTranslations: {
      en: "Localization is more than translating words. Each language needs its own headings, excerpt tone, internal links and date formatting. A direct translation of keywords often misses actual search intent, so content teams should validate terms for each language separately.\n\nYour checklist should include page titles, summaries, open graph text, readable slugs, canonical behavior, image alt text and author information. Keeping these values editable in the CMS prevents the frontend from hardcoding language-specific copy.\n\nWhen localization is built into your content model from day one, editors can update one article confidently and know every list, card and detail view will stay synchronized.",
      fa: "بومی‌سازی فقط ترجمه کلمات نیست. هر زبان به تیترها، لحن خلاصه، لینک‌های داخلی و قالب تاریخ مخصوص خودش نیاز دارد. ترجمه مستقیم کلمات کلیدی معمولا نیت جست‌وجوی واقعی را پوشش نمی‌دهد، بنابراین تیم محتوا باید اصطلاحات هر زبان را جداگانه اعتبارسنجی کند.\n\nچک‌لیست شما باید شامل عنوان صفحه، خلاصه، متن open graph، slug خوانا، رفتار canonical، متن جایگزین تصویر و اطلاعات نویسنده باشد. وقتی این مقادیر در CMS قابل ویرایش باشند، فرانت‌اند مجبور به hardcode کردن متن وابسته به زبان نمی‌شود.\n\nاگر بومی‌سازی از روز اول در مدل محتوا لحاظ شود، ویراستار می‌تواند یک مقاله را با خیال راحت به‌روزرسانی کند و مطمئن باشد همه کارت‌ها، لیست‌ها و صفحه‌های جزئیات همگام می‌مانند."
    },
    authorTranslations: { en: "Mostafa Barimani", fa: "مصطفی بریمانی" },
    coverImage: "/wimg.png",
    publishedAt: "2026-06-08",
    readingMinutes: 5,
    sortOrder: 2,
    isActive: true,
  },
  {
    slug: "design-system-content-governance",
    titleTranslations: { en: "Design Systems Need Content Governance Too", fa: "سیستم طراحی فقط کامپوننت نمی‌خواهد، حاکمیت محتوا هم می‌خواهد" },
    excerptTranslations: { en: "Why translated content patterns should be treated as a first-class part of product design systems.", fa: "چرا الگوهای محتوای ترجمه‌شده باید بخشی درجه‌یک از سیستم طراحی محصول باشند." },
    contentTranslations: {
      en: "Teams usually document spacing, colors and typography before they document how content behaves across languages. That gap creates fragile UI, especially in right-to-left layouts and long-form editorial pages.\n\nA healthy system defines how translated titles wrap, how summaries truncate, which fields must never fall back silently and where editors can safely reuse content blocks. These rules reduce rework for both developers and content managers.\n\nThe strongest product teams treat words as interface material. Once you model copy with the same care as components, multilingual publishing becomes faster and much less error-prone.",
      fa: "تیم‌ها معمولا قبل از آنکه رفتار محتوا را در زبان‌های مختلف مستندسازی کنند، فاصله‌ها، رنگ‌ها و تایپوگرافی را ثبت می‌کنند. همین فاصله باعث شکنندگی UI می‌شود، به‌خصوص در چیدمان‌های راست‌به‌چپ و صفحه‌های محتوایی بلند.\n\nیک سیستم سالم مشخص می‌کند عنوان‌های ترجمه‌شده چطور wrap شوند، خلاصه‌ها کجا truncate شوند، کدام فیلدها نباید بی‌صدا fallback بخورند و ویراستار در چه جاهایی می‌تواند بلاک‌های محتوا را با خیال راحت دوباره استفاده کند. این قواعد، دوباره‌کاری توسعه‌دهنده و مدیر محتوا را کم می‌کند.\n\nقوی‌ترین تیم‌های محصول با کلمات مثل متریال رابط برخورد می‌کنند. وقتی متن را با همان دقت کامپوننت‌ها مدل کنید، انتشار چندزبانه هم سریع‌تر می‌شود و هم خطای کمتری خواهد داشت."
    },
    authorTranslations: { en: "Ali Asadpour", fa: "علی اسدپور" },
    coverImage: "/wimg.png",
    publishedAt: "2026-06-15",
    readingMinutes: 4,
    sortOrder: 3,
    isActive: true,
  },
  {
    slug: "scaling-admin-content-workflows",
    titleTranslations: { en: "Scaling Admin Workflows for Dynamic Content", fa: "چطور گردش کار پنل ادمین را برای محتوای داینامیک مقیاس‌پذیر کنیم" },
    excerptTranslations: { en: "From seed data to live publishing, here is how to keep dynamic content structured and manageable.", fa: "از seed اولیه تا انتشار زنده، این راهنما نشان می‌دهد چطور محتوای داینامیک را ساخت‌یافته و قابل مدیریت نگه دارید." },
    contentTranslations: {
      en: "Admin tooling often starts as a simple form, but growing teams need stronger guarantees. Validation, ordering, visibility flags and translation-aware fields should all live in one clear workflow.\n\nSeed data is also part of that workflow. Good seed content demonstrates the final shape of records, gives QA something realistic to verify and helps new environments boot with representative data.\n\nIf your database preserves old values while gradually backfilling translated fields, you can modernize content models safely. That incremental path is usually the difference between a clean migration and a risky rewrite.",
      fa: "ابزارهای ادمین معمولا با یک فرم ساده شروع می‌شوند، اما تیم در حال رشد به تضمین‌های قوی‌تری نیاز دارد. اعتبارسنجی، ترتیب نمایش، وضعیت انتشار و فیلدهای آگاه از ترجمه باید همگی در یک گردش کار روشن کنار هم قرار بگیرند.\n\nداده‌های seed هم بخشی از همین گردش کار هستند. seed خوب شکل نهایی رکوردها را نشان می‌دهد، چیزی واقعی برای QA فراهم می‌کند و محیط‌های تازه را با داده‌های نماینده بالا می‌آورد.\n\nاگر دیتابیس بتواند هم‌زمان مقادیر قدیمی را نگه دارد و فیلدهای ترجمه‌شده را به‌تدریج کامل کند، مدل محتوا را با ریسک کمتر مدرن می‌کنید. همین مسیر تدریجی معمولا تفاوت بین یک مهاجرت تمیز و یک بازنویسی پرخطر است."
    },
    authorTranslations: { en: "Mohammadreza Gohari", fa: "محمدرضا گوهری" },
    coverImage: "/wimg.png",
    publishedAt: "2026-06-22",
    readingMinutes: 7,
    sortOrder: 4,
    isActive: true,
  },
]

const teamTranslations = [
  {
    id: 1,
    nameTranslations: { en: "Ali", fa: "علی" },
    familyTranslations: { en: "Asadpour", fa: "اسدپور" },
    positionTranslations: { en: "CEO | UI/UX", fa: "مدیرعامل | طراح UI/UX" },
    aboutTranslations: {
      en: "Product and UI/UX designer focused on turning business requirements into clear, usable digital experiences through research, prototyping and design systems.",
      fa: "طراح محصول و UI/UX که روی تبدیل نیازهای کسب‌وکار به تجربه‌های دیجیتال شفاف و قابل استفاده از طریق تحقیق، پروتوتایپ و سیستم طراحی تمرکز دارد."
    },
    skillsTranslations: {
      en: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"],
      fa: ["مبانی UI/UX", "فیگما", "روان‌شناسی رنگ", "پروتوتایپ", "تست کاربردپذیری", "طراحی واکنش‌گرا", "حل مسئله", "وایرفریم"]
    },
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
  },
  {
    id: 2,
    nameTranslations: { en: "Mostafa", fa: "مصطفی" },
    familyTranslations: { en: "Barimani", fa: "بریمانی" },
    positionTranslations: { en: "SEO Specialist", fa: "متخصص سئو" },
    aboutTranslations: {
      en: "SEO specialist focused on technical SEO, content strategy, keyword research, analytics and sustainable organic growth.",
      fa: "متخصص سئو با تمرکز بر سئوی تکنیکال، استراتژی محتوا، تحقیق کلمات کلیدی، تحلیل داده و رشد ارگانیک پایدار."
    },
    skillsTranslations: {
      en: ["Social Skills", "Technical SEO", "WordPress", "Analytics", "Data Analysis", "Backlink Strategy", "SEO Content", "Digital Marketing", "Keyword Research"],
      fa: ["مهارت‌های ارتباطی", "سئوی تکنیکال", "وردپرس", "آنالیتیکس", "تحلیل داده", "استراتژی بک‌لینک", "محتوای سئو", "بازاریابی دیجیتال", "تحقیق کلمات کلیدی"]
    },
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
  },
  {
    id: 3,
    nameTranslations: { en: "Mohammadreza", fa: "محمدرضا" },
    familyTranslations: { en: "Gohari", fa: "گوهری" },
    positionTranslations: { en: "CTO | Software Developer", fa: "مدیر فنی | توسعه‌دهنده نرم‌افزار" },
    aboutTranslations: {
      en: "Software developer and technical lead working across backend, frontend and infrastructure, with a focus on maintainable products and reliable delivery.",
      fa: "توسعه‌دهنده نرم‌افزار و رهبر فنی با تجربه در بک‌اند، فرانت‌اند و زیرساخت، با تمرکز بر محصول قابل نگه‌داری و تحویل قابل اتکا."
    },
    skillsTranslations: {
      en: ["Laravel", "PHP", "Docker", "Linux", "CI/CD", "SQL", "JavaScript", "React.js", "Next.js", "Elastic Search", "Redis", "RabbitMQ"],
      fa: ["لاراول", "PHP", "داکر", "لینوکس", "CI/CD", "SQL", "جاوااسکریپت", "ری‌اکت", "نکست‌جی‌اس", "الاستیک‌سرچ", "ردیس", "ربیت‌ام‌کیو"]
    },
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
  },
]

try {
  for (const article of articleSeeds) {
    db.insert(articles)
      .values({
        ...article,
        titleTranslations: JSON.stringify(article.titleTranslations),
        excerptTranslations: JSON.stringify(article.excerptTranslations),
        contentTranslations: JSON.stringify(article.contentTranslations),
        authorTranslations: JSON.stringify(article.authorTranslations),
      })
      .onConflictDoNothing({ target: articles.slug })
      .run()
  }

  for (const item of teamTranslations) {
    const member = db.select().from(teamMembers).where(eq(teamMembers.id, item.id)).get()
    if (!member) continue
    db.update(teamMembers)
      .set({
        nameTranslations: JSON.stringify(item.nameTranslations),
        familyTranslations: JSON.stringify(item.familyTranslations),
        positionTranslations: JSON.stringify(item.positionTranslations),
        aboutTranslations: JSON.stringify(item.aboutTranslations),
        skillsTranslations: JSON.stringify(item.skillsTranslations),
        joinedAtTranslations: JSON.stringify(item.joinedAtTranslations),
        updatedAt: new Date(),
      })
      .where(eq(teamMembers.id, item.id))
      .run()
  }

  console.log("Multilingual content seeded.")
} finally {
  sqlite.close()
}
