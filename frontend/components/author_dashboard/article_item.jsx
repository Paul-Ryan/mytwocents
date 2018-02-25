import React from 'react';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="article-item">
        <h3>{this.props.article.title}</h3>
      </div>
    );
  }
}

export default ArticleItem;
