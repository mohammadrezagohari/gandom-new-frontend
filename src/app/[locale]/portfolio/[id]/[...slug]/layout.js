import { createPageMetadata } from "@/src/lib/seo"
export async function generateMetadata({ params }) { const { locale, id } = await params; return createPageMetadata({ locale, pathname: `portfolio/${id}`, title: "Portfolio item", noIndex: true }) }
export default function Layout({ children }) { return children }
