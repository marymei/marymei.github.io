import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/common.css';
import ReactHeader from './components/header.js';
import ReactFooter from './components/footer.js';
import ReactBanner from './components/banner.js';

let App = React.createClass({
  getInitialState:function(){
    return {
      showOrHide: 'showlogo', //showlogo显示logo，showgoback显示返回
      title: '博客栈首页'
    }
  },
  componentWillReceiveProps: function() {
    let that = this,displayName;
    that.state.title = that.props.children.props.route.title;
    displayName = that.props.children.props.route.component.displayName;
    displayName == 'List' ? that.setState({showOrHide: 'showlogo'}) : that.setState({showOrHide: 'showgoback'});
  },
  render() {
    return (
      <div className="page-index">
        <ReactHeader title={this.state.title} showOrHide={this.state.showOrHide} />
      	<ReactBanner />
        <div className="content">
          {this.props.children}
        	<ReactFooter />
        </div>
      </div>
    );
  }
});


module.exports = App;

