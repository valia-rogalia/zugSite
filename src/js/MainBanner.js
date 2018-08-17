import React, { Component } from 'react';
import $ from "jquery";

class MainBanner extends Component {

  render() {
    var margin_height = $("#header").outerHeight() + "px";
    var image_height = parseInt($(window).height(),10) - parseInt(margin_height,10) + "px";

    return (
      <div id="tagline_wrapper" style={{height: image_height, marginTop: margin_height}}>
        <h1>Мысли<br />материальны</h1>
      </div>
    );
  }
}

export default MainBanner;
