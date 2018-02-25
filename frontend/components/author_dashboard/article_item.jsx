import React from 'react';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="article-item">
        <h3>{this.props.article.title}</h3>
        <h4>Author Id: {this.props.article.author_id}</h4>
      </div>
    );
  }
}

export default ArticleItem;
