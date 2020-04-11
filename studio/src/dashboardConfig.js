export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e91e547802adafc4f8bc77d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4wa5csi3',
                  apiId: '840c93b7-40e1-457d-832c-30c8a87b29fd'
                },
                {
                  buildHookId: '5e91e547802adae7448bcc7b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-21wwazok',
                  apiId: '4cf18e1f-c28b-462e-90fd-b5a5e9bf09f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuoitrevohoc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-21wwazok.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
