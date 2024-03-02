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
        apiURL: "https://feminizidmap-backend.onrender.com",
        accessToken: "6eb3adc42b1efa246053efcf62455fa06dd15c7505d351955531d0df661bcb5edbf997749964153d809577a79f0dc0675989fa8d955ea977dc19ff7d2e19bd645d5064ab176b107aa892d2b3204e4f302e004530ca914607d27a5c824fdd5d290e07c7baa43867946c0334e52d6db90a66fb8474ea5a8a4e24b1009e1a88d2e1",
        collectionTypes: [
          "case",
        ],
        queryLimit: 1000,
      },
    },
  ]
};
