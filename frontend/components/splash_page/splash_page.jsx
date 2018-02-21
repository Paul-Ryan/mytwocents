import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {


  render() {


    return (
      <div>
        <h1>My Two Cents</h1>

        <div clasName="readers">
          <h2>It works for reader</h2>
        </div>

        <div className="author">
          <h2>It works for authors</h2>
        </div>

      </div>
    );
  }
}

export default SplashPage;
