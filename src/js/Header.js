import React, { Component } from 'react';
import $ from "jquery";
import Logo from '../img/Logo.png'
import MenuItem from './MenuItem'

class Header extends Component {
  constructor() {
    super();
    this.menu = [
                  ['О нас','#about_us'],
                  ['Услуги','#our_services'],
                  ['Работы','#our_works'],
                  ['Контакты','#contacts']
                ];
  }

  componentDidMount() {
    $(document).ready(function(){
      var current_width = $(window).width();
      $(window).resize(function(){
        if ($(window).width() !== current_width)
        {
          current_width = $(window).width();
          window.location.reload();
        }
      });
    });
  }

  handleClickLogo(event) {
    event.preventDefault();
    $(".menu_active_item").removeClass("menu_active_item");
    $('body,html').animate({scrollTop: 0}, 1500);
  }

  render() {
    var menu = this.menu.map(function(item,index) {
      return (
        <li key={index}>
          <MenuItem href={item[1]} name={item[0]} />
        </li>
      );
    },this);

    return (
      <div>
        <span>Студия 3D печати</span>
          <a href="index.html" id="logo_wrapper" onClick={this.handleClickLogo}>
            <img src={Logo} alt="Logo"></img>
          </a>
        <ul id="header_list">
          {menu}
        </ul>
      </div>
    );
  }
}

export default Header;
