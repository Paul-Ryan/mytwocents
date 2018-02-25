import React from 'react';
import { connect } from 'react-redux';
import AuthorDashboard from './author_dashboard';

const mapStateToProps = state => {
  return {
    articles: [{
      id: 2,
      author_id: 1,
      title: "A great article"
    }, {
      id: 3,
      author_id: 2,
      title: "the second best article"
    }]
  };
};

const mapDispatchToProps = () => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDashboard);
