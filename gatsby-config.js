module.exports = {
  siteMetadata: {
    title: 'آموزش برنامه‌نویسی فرانت‌اند',
    author: 'مهدی پوراسماعیل',
    description: 'مجموعه مقالات آموزشی برای راحت‌تر کردن روند پیدا کردن کار برنامه‌نویسی',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt: file => {
          const pruneLength = 350
          file.excerpt = file.content.slice(0, pruneLength)
          file.excerpt =
            file.content
              .slice(0, file.excerpt.lastIndexOf(' '))
              .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, '$1') + '...'
          return file
        },
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
