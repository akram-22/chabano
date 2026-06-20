import { getProperties, getArticles, getPromotions } from "@/lib/db"

// Forces this route to run at request time on Vercel's server, instead of
// being executed during `next build`. The build step doesn't reliably have
// access to runtime env vars for every route, and this route depends on
// live Supabase data anyway, so request-time rendering is correct here.
export const dynamic = "force-dynamic"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://updated-real-estate.vercel.app"

  let properties: Awaited<ReturnType<typeof getProperties>> = []
  let articles: Awaited<ReturnType<typeof getArticles>> = []
  let promotions: Awaited<ReturnType<typeof getPromotions>> = []

  try {
    [properties, articles, promotions] = await Promise.all([
      getProperties(),
      getArticles(true),
      getPromotions(),
    ])
  } catch (err) {
    // Never let a transient Supabase error take the whole sitemap down —
    // fall back to just the static pages instead.
    console.error("sitemap.xml: failed to load dynamic content", err)
  }

  type SitemapUrl = {
    url: string
    priority: string
    changefreq: string
    lastmod?: string
  }

  const staticPages: SitemapUrl[] = [
    { url: baseUrl, priority: "1.0", changefreq: "weekly" },
    { url: `${baseUrl}/#services`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/#about`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/#contact`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/blog`, priority: "0.8", changefreq: "weekly" },
  ]

  const propertyPages: SitemapUrl[] = properties.map((p) => ({
    url: `${baseUrl}/properties/${p.id}`,
    priority: "0.9",
    changefreq: "weekly",
    lastmod: p.updated_at,
  }))

  const promoPages: SitemapUrl[] = promotions.map((p) => ({
    url: `${baseUrl}/promotions/${p.id}`,
    priority: "0.9",
    changefreq: "weekly",
    lastmod: p.updated_at,
  }))

  const articlePages: SitemapUrl[] = articles.map((a) => ({
    url: `${baseUrl}/blog/${a.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: a.updated_at,
  }))

  const allPages = [...staticPages, ...propertyPages, ...promoPages, ...articlePages]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.lastmod ? `<lastmod>${new Date(page.lastmod).toISOString().split("T")[0]}</lastmod>` : ""}
  </url>`).join("\n")}
</urlset>`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
  })
}
