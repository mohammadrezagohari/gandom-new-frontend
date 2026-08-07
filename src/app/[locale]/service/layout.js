import { staticMetadata } from "@/src/lib/staticPageMetadata"
export async function generateMetadata({ params }) { const { locale } = await params; return staticMetadata(locale, "service") }
export default function Layout({ children }) { return children }
