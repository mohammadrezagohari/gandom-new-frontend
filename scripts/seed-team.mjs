import { sql } from "drizzle-orm"
import { closeDatabasePool, db } from "../src/db/index.mjs"
import { teamMembers } from "../src/db/schema.mjs"

const members = [
  {
    id: 2,
    name: "Mostafa",
    family: "Barimani",
    position: "SEO Specialist",
    about: "SEO specialist focused on technical SEO, content strategy, keyword research, analytics and sustainable organic growth.",
    skills: ["Social Skills", "Technical SEO", "WordPress", "Analytics", "Data Analysis", "Backlink Strategy", "SEO Content", "Digital Marketing", "Keyword Research"],
    nameTranslations: { en: "Mostafa", fa: "مصطفی" },
    familyTranslations: { en: "Barimani", fa: "بریمانی" },
    positionTranslations: { en: "SEO Specialist", fa: "متخصص سئو" },
    aboutTranslations: { en: "SEO specialist focused on technical SEO, content strategy, keyword research, analytics and sustainable organic growth.", fa: "متخصص سئو با تمرکز بر سئوی تکنیکال، استراتژی محتوا، تحقیق کلمات کلیدی، تحلیل داده و رشد ارگانیک پایدار." },
    skillsTranslations: { en: ["Social Skills", "Technical SEO", "WordPress", "Analytics", "Data Analysis", "Backlink Strategy", "SEO Content", "Digital Marketing", "Keyword Research"], fa: ["مهارت‌های ارتباطی", "سئوی تکنیکال", "وردپرس", "آنالیتیکس", "تحلیل داده", "استراتژی بک‌لینک", "محتوای سئو", "بازاریابی دیجیتال", "تحقیق کلمات کلیدی"] },
    image: "/webp/personls/mostafabarimani.webp",
    singlePageImage: "/webp/personls/png/mostafabarimani.png",
    linkedin: "https://www.linkedin.com/in/mostafa-barimani/",
    instagram: "/",
    joinedAt: "December 2022",
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
    sortOrder: 1,
  },
  {
    id: 1,
    name: "Ali",
    family: "Asadpour",
    position: "CEO | UI/UX",
    about: "Product and UI/UX designer focused on turning business requirements into clear, usable digital experiences through research, prototyping and design systems.",
    skills: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"],
    nameTranslations: { en: "Ali", fa: "علی" },
    familyTranslations: { en: "Asadpour", fa: "اسدپور" },
    positionTranslations: { en: "CEO | UI/UX", fa: "مدیرعامل | طراح UI/UX" },
    aboutTranslations: { en: "Product and UI/UX designer focused on turning business requirements into clear, usable digital experiences through research, prototyping and design systems.", fa: "طراح محصول و UI/UX که روی تبدیل نیازهای کسب‌وکار به تجربه‌های دیجیتال شفاف و قابل استفاده از طریق تحقیق، پروتوتایپ و سیستم طراحی تمرکز دارد." },
    skillsTranslations: { en: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"], fa: ["مبانی UI/UX", "فیگما", "روان‌شناسی رنگ", "پروتوتایپ", "تست کاربردپذیری", "طراحی واکنش‌گرا", "حل مسئله", "وایرفریم"] },
    image: "/webp/personls/aliasadpour.webp",
    singlePageImage: "/webp/personls/png/aliasadpour.png",
    linkedin: "https://www.linkedin.com/in/aliasadpuor/",
    instagram: "/",
    joinedAt: "December 2022",
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
    sortOrder: 2,
  },
  {
    id: 3,
    name: "Mohammadreza",
    family: "Gohari",
    position: "CTO | Software Developer",
    about: "Software developer and technical lead working across backend, frontend and infrastructure, with a focus on maintainable products and reliable delivery.",
    skills: ["Laravel", "PHP", "Docker", "Linux", "CI/CD", "SQL", "JavaScript", "React.js", "Next.js", "Elastic Search", "Redis", "RabbitMQ"],
    nameTranslations: { en: "Mohammadreza", fa: "محمدرضا" },
    familyTranslations: { en: "Gohari", fa: "گوهری" },
    positionTranslations: { en: "CTO | Software Developer", fa: "مدیر فنی | توسعه‌دهنده نرم‌افزار" },
    aboutTranslations: { en: "Software developer and technical lead working across backend, frontend and infrastructure, with a focus on maintainable products and reliable delivery.", fa: "توسعه‌دهنده نرم‌افزار و رهبر فنی با تجربه در بک‌اند، فرانت‌اند و زیرساخت، با تمرکز بر محصول قابل نگه‌داری و تحویل قابل اتکا." },
    skillsTranslations: { en: ["Laravel", "PHP", "Docker", "Linux", "CI/CD", "SQL", "JavaScript", "React.js", "Next.js", "Elastic Search", "Redis", "RabbitMQ"], fa: ["لاراول", "PHP", "داکر", "لینوکس", "CI/CD", "SQL", "جاوااسکریپت", "ری‌اکت", "نکست‌جی‌اس", "الاستیک‌سرچ", "ردیس", "ربیت‌ام‌کیو"] },
    image: "/webp/personls/mohammadrezagohari.webp",
    singlePageImage: "/webp/personls/png/mohammadrezagohari.png",
    linkedin: "https://www.linkedin.com/in/mohammad-reza-gohari/",
    instagram: "/",
    joinedAt: "December 2022",
    joinedAtTranslations: { en: "December 2022", fa: "آذر ۱۴۰۱" },
    sortOrder: 3,
  },
]

try {
  for (const member of members) {
    await db.insert(teamMembers)
      .values({
        ...member,
        skills: JSON.stringify(member.skills),
        nameTranslations: JSON.stringify(member.nameTranslations),
        familyTranslations: JSON.stringify(member.familyTranslations),
        positionTranslations: JSON.stringify(member.positionTranslations),
        aboutTranslations: JSON.stringify(member.aboutTranslations),
        skillsTranslations: JSON.stringify(member.skillsTranslations),
        joinedAtTranslations: JSON.stringify(member.joinedAtTranslations),
      })
      .onDuplicateKeyUpdate({ set: { id: sql`${teamMembers.id}` } })
  }
  console.log("Team members seeded.")
} finally {
  await closeDatabasePool()
}
