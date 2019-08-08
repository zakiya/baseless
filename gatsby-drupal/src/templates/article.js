import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Article from '../components/Article/Article';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
}));

const articleTemplate = (props) => {
  const classes = useStyles();
  const { nodeArticle: article } = props.data;
  
  return (
    <Layout>
      <Helmet
        title={`Umami - ${article.title}`}
        meta={[
          {name: 'description', content: article.title},
        ]}
      />
      <Paper className={classes.root}>
      <Article
          {...article}
          instructions={article.instructions.processed}
        />
      </Paper>
    </Layout>
  )
};


export default articleTemplate;

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
  query ArticleTemplate($drupal_id: String!) {
    nodeArticle(drupal_id: {eq: $drupal_id}) {
      drupal_id,
      title,
      instructions: field_body {
        value,
      }
    }
  }
`;
