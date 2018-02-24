import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {

  render() {
    return (
      <div>
        <h2>It works for reader</h2>
        <div className="readers">
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
        </div>

        <h2>It works for authors</h2>
        <div className="authors">
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
          <div className="unit">
            <h3>One Click</h3>
            <p>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default SplashPage;
