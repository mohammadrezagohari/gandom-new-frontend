import { db, sqlite } from "../src/db/index.mjs"
import { teamMembers } from "../src/db/schema.mjs"
const members = [
  {
    id: 2, name: "Mostafa", family: "Barimani", position: "SEO",
    about: "SEO specialist focused on technical SEO, content strategy, keyword research, analytics and sustainable organic growth.",
    skills: ["Social Skills", "Technical SEO", "WordPress", "Analytics", "Data Analysis", "Backlink Strategy", "SEO Content", "Digital Marketing", "Keyword Research"],
    image: "/webp/personls/mostafabarimani.webp", singlePageImage: "/webp/personls/png/mostafabarimani.png",
    linkedin: "https://www.linkedin.com/in/mostafa-barimani/", instagram: "/", joinedAt: "December 2022", sortOrder: 1,
  },
  {
    id: 1, name: "Ali", family: "Asadpour", position: "CEO | UI/UX",
    about: "Product and UI/UX designer focused on turning business requirements into clear, usable digital experiences through research, prototyping and design systems.",
    skills: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"],
    image: "/webp/personls/aliasadpour.webp", singlePageImage: "/webp/personls/png/aliasadpour.png",
    linkedin: "https://www.linkedin.com/in/aliasadpuor/", instagram: "/", joinedAt: "December 2022", sortOrder: 2,
  },
  {
    id: 3, name: "Mohammadreza", family: "Gohari", position: "CTO | Software Developer",
    about: "Software developer and technical lead working across backend, frontend and infrastructure, with a focus on maintainable products and reliable delivery.",
    skills: ["Laravel", "PHP", "Docker", "Linux", "CI/CD", "SQL", "JavaScript", "React.js", "Next.js", "Elastic Search" , "Redis" , "RabbitMQ"],
    image: "/webp/personls/mohammadrezagohari.webp", singlePageImage: "/webp/personls/png/mohammadrezagohari.png",
    linkedin: "https://www.linkedin.com/in/mohammad-reza-gohari/", instagram: "/", joinedAt: "December 2022", sortOrder: 3,
  },
  {
    id: 7, name: "Parsa", family: "Panahpour", position: "Backend Developer",
    about: "Backend developer focused on server-side applications, databases and deployment workflows.",
    skills: ["ASP.NET Core", "PWA", "C#", "PHP", "Docker", "Windows Server", "Git Flow", "SQL Server"],
    image: "/webp/pp.webp", singlePageImage: "/webp/G_PP.png", linkedin: "/", instagram: "/", joinedAt: "December 2022", sortOrder: 4,
  },
  {
    id: 6, name: "Bita", family: "Ghanbari", position: "UI/UX Designer",
    about: "UI/UX designer focused on accessible interfaces, prototyping and responsive product experiences.",
    skills: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"],
    image: "/webp/B-GH.webp", singlePageImage: "/webp/G_BGH.png", linkedin: "/", instagram: "/", joinedAt: "December 2022", sortOrder: 5,
  },
  {
    id: 5, name: "Atefe", family: "Mohseni", position: "UI/UX Designer",
    about: "UI/UX designer working on clear visual systems, responsive layouts and user-centered product flows.",
    skills: ["UI/UX Fundamentals", "Figma", "Color Psychology", "Prototyping", "Usability Testing", "Responsive Design", "Problem Solving", "Wireframing"],
    image: "/webp/AM.webp", singlePageImage: "/webp/G_AM.png", linkedin: "/", instagram: "/", joinedAt: "December 2022", sortOrder: 6,
  },
  {
    id: 4, name: "Amirreza", family: "Ranjbar", position: "Account Manager",
    about: "Account manager focused on client communication, negotiation, sales and long-term business relationships.",
    skills: ["Marketing Management", "Negotiation", "Analytical Skills", "Sales", "Consumer Products"],
    image: "/webp/AR.webp", singlePageImage: "/webp/G_AR.png", linkedin: "/", instagram: "/", joinedAt: "December 2022", sortOrder: 7,
  },
]

try {
  for (const member of members) {
    db.insert(teamMembers)
      .values({ ...member, skills: JSON.stringify(member.skills) })
      .onConflictDoNothing({ target: teamMembers.id })
      .run()
  }
  console.log("Team members seeded.")
} finally {
  sqlite.close()
}
