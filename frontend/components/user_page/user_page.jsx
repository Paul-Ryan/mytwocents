import React from 'react';
import UserProjectItem from './user_project_item';
import UserTipItem from './user_tip_item';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.username);
    // this.props.fetchTips();
  }

  // render() {
  //   return (
  //     <div className="user-info">
  //       <h1>Your Tips</h1>
  //       <div className="all-tips">
  //         <h2>Articles you support!</h2>
  //         <ul className="user-tip-list">
  //           {
  //             this.props.tips.map(tip => (
  //               <UserTipItem
  //                 tip={tip}
  //                 key={tip.id}
  //                 removeTip = {this.props.removeTip}
  //                 />
  //             ))
  //           }
  //         </ul>
  //       </div>
  //       <div className="tip-meta-info">
              // <h1>4 tips left</h1>
              // <button>Add more tips</button>
  //       </div>
  //     </div>
  //   );

    render() {
      return (
        <div>{this.props.username}</div>
      );
    }
  }


export default UserInfo;
