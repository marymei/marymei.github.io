import React from 'react';
import {Link} from 'react-router';

let List = React.createClass({
  getInitialState: function() {
    return {
        articleList: []
    };
  },    
  componentDidMount: function() {
    var that = this;
    fetch("/server/api/list.json")
    .then(
        function(response){
            if(response.status !== 200){
                alert("存在一个问题，状态码为："+response.status);
                return;
            }
            response.json().then(function(data){
                that.setState({articleList: data.data.list});
            });
        }
    )
    .catch(function(err){
        alert("Fetch错误:"+err);
    });
  },
  render() {
    return (
    	<ul className="list-page">
            {
                this.state.articleList.map(function(value,index,array){
                    return <Item key={'key'+index} data={value} ></Item>
                })
            }
    	</ul>
    );
  }
});

var Item = React.createClass({
    render:function(){
        return (
            <li className="list-li">
                <Link to="/article">
                    <p className="article-title">{this.props.data.title}</p>
                    <p className="article-content">{this.props.data.content}</p>
                </Link>
            </li>            
        )
    }
});

module.exports = List;
