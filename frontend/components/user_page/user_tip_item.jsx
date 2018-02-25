import React from 'react';

class UserTipItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="user-tip-item">
        <h3>User Tip Title</h3>
        <button className="remove-tip">Remove tip</button>
      </div>

    );
  }
}

export default UserTipItem;
