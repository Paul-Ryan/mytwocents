import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => {

  return {
    username: "bob"
  };
};

const mapDispatchToProps = () => {

  return({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
