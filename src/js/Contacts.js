import React, { Component } from 'react';

import telegramLogo from '../img/telegram.png'
import viberLogo from '../img/viber.png'
import emailLogo from '../img/email.png'
import instaLogo from '../img/insta.png'
import faceLogo from '../img/facebook.png'

class Contacts extends Component {

  render() {
    return (
      <div id="contacts_wrapper" className="container">
        <div id="contacts_background">
          <h2>Контакты</h2>
          <hr />
          <h3>Свяжитесь как вам удобно</h3>
          <ul id="contacts_list">
            <li>
              <img src={telegramLogo} alt="telegram"/>
              <a href="tel: +380958737787">
                +380958737787
              </a>
              <img src={viberLogo} alt="viber"/>
            </li>
            <li>
              <img src={emailLogo} alt="mail"/>
              <a href="mailto: zugengineering@gmail.com">zugengineering@gmail.com</a>
            </li>
            <li>
              <img src={instaLogo} alt="insta"/>
              <a href="https://www.instagram.com/zug_engineering">@zug_engineering</a>
            </li>
            <li>
              <img src={faceLogo} alt="facebook"/>
              <a href="https://www.facebook.com/Zug-Engineering-410949322704775">Zug Engineering</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contacts;
