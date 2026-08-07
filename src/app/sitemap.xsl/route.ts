const stylesheet = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="fa" dir="rtl">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>نقشه سایت گندم</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: #f6f7f9; color: #202124; font-family: Tahoma, Arial, sans-serif; }
          main { width: min(1200px, calc(100% - 32px)); margin: 40px auto; }
          header { padding: 28px; margin-bottom: 20px; border-radius: 18px; background: #212121; color: #fff; box-shadow: 0 12px 35px rgba(0,0,0,.12); }
          h1 { margin: 0 0 10px; color: #f9c900; font-size: 28px; }
          p { margin: 0; line-height: 1.9; color: #d8d8d8; }
          .count { display: inline-block; margin-top: 16px; padding: 7px 12px; border-radius: 999px; background: rgba(249,201,0,.14); color: #f9c900; font-weight: bold; }
          .table-wrap { overflow-x: auto; border: 1px solid #e2e5e9; border-radius: 18px; background: #fff; box-shadow: 0 8px 25px rgba(0,0,0,.05); }
          table { width: 100%; min-width: 900px; border-collapse: collapse; direction: rtl; }
          th { padding: 15px; background: #f1f3f4; color: #4b4f56; text-align: right; font-size: 13px; white-space: nowrap; }
          td { padding: 14px 15px; border-top: 1px solid #edf0f2; vertical-align: top; font-size: 13px; }
          tr:hover td { background: #fffdf2; }
          a { color: #1267c4; text-decoration: none; direction: ltr; unicode-bidi: embed; }
          a:hover { text-decoration: underline; }
          .url { min-width: 390px; word-break: break-all; }
          .alternates { display: flex; flex-wrap: wrap; gap: 6px; direction: ltr; }
          .lang { padding: 4px 8px; border: 1px solid #dfe3e8; border-radius: 7px; background: #fafafa; }
          .muted { color: #777; direction: ltr; white-space: nowrap; }
          footer { padding: 18px 4px; color: #777; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <main>
          <header>
            <h1>نقشه سایت گندم</h1>
            <p>این فایل به‌صورت خودکار از صفحات ثابت و داده‌های فعال دیتابیس ساخته می‌شود.</p>
            <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/> آدرس ثبت‌شده</span>
          </header>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>آدرس صفحه</th>
                  <th>نسخه‌های زبانی</th>
                  <th>آخرین تغییر</th>
                  <th>بازه تغییر</th>
                  <th>اولویت</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:urlset/sm:url">
                  <tr>
                    <td><xsl:value-of select="position()"/></td>
                    <td class="url"><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                    <td>
                      <div class="alternates">
                        <xsl:for-each select="xhtml:link">
                          <a class="lang" href="{@href}"><xsl:value-of select="@hreflang"/></a>
                        </xsl:for-each>
                      </div>
                    </td>
                    <td class="muted"><xsl:value-of select="sm:lastmod"/></td>
                    <td><xsl:value-of select="sm:changefreq"/></td>
                    <td><xsl:value-of select="sm:priority"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <footer>Gandom — Dynamic XML Sitemap</footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`

export async function GET() {
  return new Response(stylesheet, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
