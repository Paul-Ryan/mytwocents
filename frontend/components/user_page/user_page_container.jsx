import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    currentUser: state.currentUser,
    username: "bob",
    tips: [1, 2, 3]

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
