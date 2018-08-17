import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div id="footer_wrapper" className="container">
        <span>©Copyright 2018 Zug Engineering. Все права защищены.</span>
        <span>Сайт разработан <a href="tel: +380958141794" title="Telegram/Viber">Orlovskiy</a></span>
      </div>
    );
  }
}

export default Footer;
