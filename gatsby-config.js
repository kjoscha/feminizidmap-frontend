/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Feminizidmap`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://content.dwenteignen.de",
        accessToken: "6b01ef8352569dba5f4539b0104fd4c6a3e0518d2aea7800111c4050f39c72584112756a604df9b0eda644563aed97a25c93201342d5e24e5e1534406036571b3f55a15742ad8e50798bc41e64770d3b112797ca46fa34e01c0459e0208e0d6aaada169a3a8cd44357e23b91c692f3ae3bcf51dab91d5480f284aef4ab2bab0b",
        collectionTypes: [
          "news-individual",
        ],
        queryLimit: 1000,
      },
    },
  ]
};
