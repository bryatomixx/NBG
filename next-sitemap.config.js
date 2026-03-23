/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nbg-insurance.com',
  generateRobotsTxt: true,
  alternateRefs: [
    { href: 'https://nbg-insurance.com/latino', hreflang: 'es' },
  ],
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
  },
}
