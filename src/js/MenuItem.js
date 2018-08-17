import React, { Component } from 'react';
import $ from "jquery";

class MenuItem extends Component {
  constructor() {
    super();

    this.state = {isActive: false}
  }

  componentDidMount() {
    $(document).on("scroll", this.onScroll.bind(this));
  }

  onScroll() {
    var scroll_top = $(document).scrollTop();
    var target = $(this.props.href);
    var header_hight = $("#header").outerHeight();
    if (target.position().top <= scroll_top + header_hight + 245 && target.position().top + target.outerHeight() - 300 > scroll_top) {
      this.setState({isActive: true});
    } else {
      this.setState({isActive: false});
    }
  }

  handleClick(event) {
    event.preventDefault();
    $(event.currentTarget).addClass("menu_active_item");
    var link_id = event.currentTarget.getAttribute("href").slice(1);
    var top = document.getElementById(link_id).offsetTop - 20;
    $('body,html').animate({scrollTop: top}, 1500);
  }

  render() {
    return (
      <a href={this.props.href}
         className={this.state.isActive ? "menu_item menu_active_item" : "menu_item"}
         onClick={this.handleClick.bind(this)}> {this.props.name} </a>
    );
  }
}

export default MenuItem
