import React, { Component } from 'react';
import $ from "jquery";

import imgServ1 from '../img/Service_icons/imgServ1.png'
import imgServ2 from '../img/Service_icons/imgServ2.png'
import imgServ3 from '../img/Service_icons/imgServ3.png'
import imgServ4 from '../img/Service_icons/imgServ4.png'

class OurServices extends Component {
  constructor() {
    super();

    this.services = [
                      [imgServ1,'3D печать','Печатаем на 3D принтере обьекты любой сложности'],
                      [imgServ2,'Моделирование','Создаем 3D объект по вашим чертежам и эскизам'],
                      [imgServ3,'Проектирование','Разрабатываем устройства, детали и механизмы, следуя вашим идеям'],
                      [imgServ4,'Мелкосерийное производство','Производство партий 10-100шт']
                    ]
  }

  render() {
    var li_image_width = $("#our_services_wrapper>ul>li>img").width() + "px";

    var services = this.services.map(function(item,index) {
      return (
        <li key={index}>
          <img src={item[0]} style={{height: li_image_width}} alt=""/>
          <h3>{item[1]}</h3>
          <p>{item[2]}</p>
        </li>
      );
    });

    return (
      <div id="our_services_wrapper" className="container">
        <h2>Наши услуги</h2>
        <ul>{services}</ul>
      </div>
    );
  }
}

export default OurServices;
