import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

let Header = React.createClass({
  render() {
    return (
      <div className="header">
      	<i className={'icon-logo ' + this.props.showOrHide}>
      		<img src="./app/images/logo.png" className="icon-logo-img" />
      	</i>
      	<i className={"icon-back " + this.props.showOrHide} onClick={browserHistory.goBack}>&lt;返回</i>
      	<p className="blog-title">{this.props.title}</p>
      </div>
    );
  }
});

module.exports = Header;
