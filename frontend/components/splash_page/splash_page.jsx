import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-bg">
        <h2 className="splash-header">It works for reader</h2>
        <div className="readers">
          <div className="unit">
            <h3>One Click</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
          <div className="unit">
            <h3>Control who you support</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
          <div className="unit">
            <h3>Review your tips</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
        </div>

        <h2 className="splash-header">It works for authors</h2>
        <div className="authors">
          <div className="unit">
            <h3>Create your Tip Jar</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
          <div className="unit">
            <h3>Pasted it in your article</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
          <div className="unit">
            <h3>Get paid!</h3>
            <p>
              It takes one click, once you're setup your account, anywhere an author has a tip jar button. Tips are a small amount of money, less than the tip you might pay for a coffee, to help writers create content that matters.
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default SplashPage;
