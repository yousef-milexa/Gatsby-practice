const path = require('path');


const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    
    return graphql(`
    {
        allMarkdownRemark(limit: 1000) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        tags
                        templateKey
                    }
            }
        }
    }
}
`).then(result => {
    if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
    }
    
    const archives = results.data.allMarkdownRemark.edges
    
    archives.forEach(({node}) => {
        createPage({
            path: `/posts${node.frontmatter.slug}`,
            component: path.resolve('./src/components/postLayout.js'),
            context: {
                slug: node.frontmatter.slug,
            }
        });
    }) 

    const posts = result.data.allMarkdownRemark.edges
    
    posts.forEach(edge => {
        const id = edge.node.id
        createPage({
            path: edge.node.fields.slug,
            tags: edge.node.frontmatter.tags,
            component: path.resolve(
                `src/pages/${String(edge.node.frontmatter.templateKey)}.js`
                ),
                // additional data can be passed via context
                context: {
                    id,
            },
        })
        })
        })
    }

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
        }
}


