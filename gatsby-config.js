/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const site =
  process.env.LANG === 'AU'
    ? 'https://rhubarblane.com.au/'
    : 'https://rhubarblane.co.nz/';

const siteLang = process.env.LANG === 'AU' ? 'AU' : 'NZ';

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Basic`,
    siteUrl: site,
    siteLang: siteLang,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: 'hc--[folder]--[local]',
            namedExport: false,
            exportLocalsConvention: 'asIs',
          },
        },
        // Override the file regex for Sass
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
        sassOptions: {
          includePaths: [`${__dirname}/src/assets/scss`],
        },
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap`,
          },
          {
            name: `Oswald`,
            file: `https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap`,
          },
        ],
      },
    },
  ],
};
