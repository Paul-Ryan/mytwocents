import React from 'react';
import ArticleItem from './article_item';

class AuthorDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="author-info">
        <h1>Your Articles</h1>
        <div className="author-layout">
          <ul className="author-article-list">
            {
              this.props.articles.map(article => (
                <ArticleItem
                  article={article}
                  key={article.id}
                  />
              ))
            }
          </ul>
          <div className="article-meta-info">
            <h1>40 tips this week</h1>
            <h1>100 tips total</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorDashboard;
