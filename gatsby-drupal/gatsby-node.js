/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allNodeArticle {
    edges {
      node {
        title
        path {
          alias
        }
        drupal_id
        field_body {
          value
        }
      }
    }
  }
      }
    `).then(result => {
      result.data.allNodeArticle.edges.forEach(({ node }) => {
        let path_alias;
        if (node.path.alias == null) {
          path_alias = `article/${node.drupal_id}`;
        } else {
          path_alias = node.path.alias;
        }
        
        createPage({
          // This is the path, or route, at which the page will be visible.
          path: path_alias,
          // This the path to the file that contains the React component
          // that will be used to render the HTML for the recipe.
          component: path.resolve(`./src/templates/article.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL
            // variables.
            drupal_id: node.drupal_id,
          },
        })
      });
      
      resolve()
    })
  })
};