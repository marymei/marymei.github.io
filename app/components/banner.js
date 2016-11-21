import React from 'react';

let Banner = React.createClass({
  render() {
    return (
	    <div className="banner">
	    	<img className="banner-img" src="./app/images/banner/banner.jpg" />
	    </div>
    );
  }
});

module.exports = Banner;