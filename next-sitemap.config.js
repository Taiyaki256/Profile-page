/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://taiyaki.cc',
    outDir: './out',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    // sitemapBaseFileName: 'smap',
    robotsTxtOptions: {
        additionalSitemaps: [
          'https://blog.taiyaki.cc/sitemap.xml',
        ],
      },
  };
  