import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './app.js';
import List from './pages/list.js';
import Article from './pages/article.js';


let routes = <Route path="/" component={App}>
		<Route path="/list" component={List} title="博客栈首页" />
		<Route path="/article(/:id)" component={Article} title="博客栈文章"/>
	</Route>;

let RoutesCfg = (<Router routes={routes} history={hashHistory}/>);


module.exports = RoutesCfg;