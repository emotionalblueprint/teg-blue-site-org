import { loadAllNodes } from '@/src/lib/content'

export async function GET() {
  const baseUrl = 'https://teg-blue.org'
  const publications = loadAllNodes('publication')

  // Build RSS XML
  const rssItems = publications
    .filter(pub => pub.status !== 'draft')
    .map(pub => {
      const pubDate = pub.lastUpdated || pub.date || new Date().toISOString()
      const dateObj = new Date(pubDate)
      const rfcDate = dateObj.toUTCString()

      // Get first content section as description, or use summary
      const description = pub.summary ||
        (pub.content?.[0]?.content) ||
        'TEG-Blue research publication'

      return `
    <item>
      <title><![CDATA[${pub.title}]]></title>
      <link>${baseUrl}/publications/${pub.slug}</link>
      <guid isPermaLink="true">${baseUrl}/publications/${pub.slug}</guid>
      <pubDate>${rfcDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <author>research@teg-blue.org (${pub.author || 'TEG-Blue Research'})</author>
      ${pub.doi ? `<dc:identifier>doi:${pub.doi}</dc:identifier>` : ''}
      ${pub.tags?.map(tag => `<category>${tag}</category>`).join('\n      ') || ''}
    </item>`
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>TEG-Blue Research Publications</title>
    <link>${baseUrl}</link>
    <description>Research publications, validation studies, and working papers from TEG-Blue. Open science for emotional regulation research.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/icon.png</url>
      <title>TEG-Blue Research</title>
      <link>${baseUrl}</link>
    </image>
    <copyright>CC BY-NC-SA 4.0 TEG-Blue Research</copyright>
    <managingEditor>research@teg-blue.org (Anna Paretas-Artacho)</managingEditor>
    <webMaster>research@teg-blue.org (TEG-Blue)</webMaster>
    <category>Science</category>
    <category>Psychology</category>
    <category>Emotional Regulation</category>
    <ttl>1440</ttl>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
