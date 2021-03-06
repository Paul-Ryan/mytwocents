import React from 'react';
import UserTipItem from './user_tip_item';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    return (
      <div className="user-info">
        <h1>Your Tips</h1>
        <div className="user-layout">
          <div className="all-tips">
            <h1>Articles you support!</h1>
            <ul className="user-tip-list">
              {
                this.props.tips.map(tip => (
                  <UserTipItem
                    tip={tip}
                    key={tip}
                    removeTip = {this.props.removeTip}
                    />
                ))
              }
            </ul>
          </div>
          <div className="tip-meta-info">
                <h1>4 tips left</h1>
                <button>Add more tips</button>
          </div>
        </div>
      </div>
    );
  }
}


export default UserPage;
