/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://hitomoshi.vercel.app/", // あなたのサイトのURL（httpsから始まる）
    generateRobotsTxt: true, // robots.txt を生成する
    sitemapSize: 7000, // ページ数が多い場合に分割する
    outDir: "./public", // 出力先
};
