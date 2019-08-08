import React from 'react';
import PropTypes from 'prop-types';
// import GridList from '@material-ui/core/GridList';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Article = (props) => (
  <>
  <Typography variant="h2" paragraph>{props.title}</Typography>
  <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.instructions }} />
</>

);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  // difficulty: PropTypes.string.isRequired,
  // cooking_time: PropTypes.number.isRequired,
  // preparation_time: PropTypes.number.isRequired,
  // ingredients: PropTypes.arrayOf(PropTypes.string),
  // summary: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  // tags: PropTypes.array,
};

export default Article;
