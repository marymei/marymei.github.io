import React from 'react';

let Article = React.createClass({
  getInitialState: function() {
    return {
      articleTitle: '',
      articleContent: ''
    }
  },
  componentDidMount: function() {
    console.log(this.props.params.id)
    var that = this;
    fetch("/server/api/article.json")
    .then(
        function(response){
            if(response.status !== 200){
                alert("存在一个问题，状态码为："+response.status);
                return;
            }
            response.json().then(function(data){
                that.setState({
                  articleTitle: data.data.title,
                  articleContent: data.data.content
                });
            });
        }
    )
    .catch(function(err){
        alert("Fetch错误:"+err);
    });    
  },
  render() {
    return (
        <div className="article-page">
            <p className="article-title txt-c">{this.state.articleTitle}</p>
            <div className="article-msg">{this.state.articleContent}</div>
        </div>
     );
  }
});

module.exports = Article;

