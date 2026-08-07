import { createPageMetadata } from "@/src/lib/seo"
export async function generateMetadata({ params }) { const { locale } = await params; return createPageMetadata({ locale, pathname: "landing", title: "Landing", noIndex: true }) }
export default function Layout({ children }) { return children }
