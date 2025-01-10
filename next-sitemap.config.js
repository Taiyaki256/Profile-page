/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://taiyaki.cc',
    outDir: './out',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        additionalSitemaps: [
          'https://blog.taiyaki.cc/sitemap.xml',
        ],
      },
  };
  