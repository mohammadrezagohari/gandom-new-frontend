import { getSitemapEntries } from "@/src/lib/sitemap"

export const dynamic = "force-dynamic"

function escapeXml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const entries = getSitemapEntries()
  const urls = entries.map((item) => {
    const alternateLinks = Object.entries(item.alternates?.languages || {})
      .map(([language, url]) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(url)}" />`)
      .join("\n")

    const lastModified = item.lastModified
      ? `    <lastmod>${escapeXml(item.lastModified instanceof Date ? item.lastModified.toISOString() : item.lastModified)}</lastmod>\n`
      : ""
    const changeFrequency = item.changeFrequency
      ? `    <changefreq>${escapeXml(item.changeFrequency)}</changefreq>\n`
      : ""
    const priority = typeof item.priority === "number"
      ? `    <priority>${item.priority.toFixed(1)}</priority>\n`
      : ""

    return [
      "  <url>",
      `    <loc>${escapeXml(item.url)}</loc>`,
      alternateLinks,
      lastModified.trimEnd(),
      changeFrequency.trimEnd(),
      priority.trimEnd(),
      "  </url>",
    ].filter(Boolean).join("\n")
  }).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
    },
  })
}
