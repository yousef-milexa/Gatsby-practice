const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    
    return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                    slug
                    }
                }
                }
            }
            allSitePage {
                edges {
                node {
                    id
                }
                }
            }
        }
`).then(result => {
    if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
    }
    
    const archives = result.data.allMarkdownRemark.edges;
    
    archives.forEach(({node}) => {
        createPage({
            path: `/posts${node.frontmatter.slug}`,
            component: path.resolve('./src/components/postLayout.js'),
            context: {
                slug: node.frontmatter.slug,
            }
        })
    }); 

    const DefaultPageTemplate = path.resolve(`src/templates/default-page.js`);

    result.data.allSitePage.edges.forEach(({ node: {slug, id} }) => {
        createPage({
            path: `/${slug}/`,
            component: DefaultPageTemplate,
            context: {
                id: id,
            }
        })
    }); 
})
}




