import React, { Component } from 'react';
import WorkItem from './WorkItem'

import work1 from '../img/Works_icons/1.png'
import work2 from '../img/Works_icons/2.jpg'
import work3 from '../img/Works_icons/3.jpg'
import work4 from '../img/Works_icons/4.jpg'
import work5 from '../img/Works_icons/5.png'
import work6 from '../img/Works_icons/6.jpg'
import work7 from '../img/Works_icons/7.jpg'
import work8 from '../img/Works_icons/8.png'


class OurWorks extends Component {
  constructor() {
    super();

    this.works = [
                  [work1,'Модульные горшки'],
                  [work2,'Ремонт шестерни в планетарный редуктор блендера'],
                  [work3,'Канцелярская подставка'],
                  [work4,'Кот-редуктор'],
                  [work5,'Потайная полочка'],
                  [work6,'Пины для двигателя Honda HL700V'],
                  [work7,'Док-станция "Tesla" для смартфона'],
                  [work8,'Корпус с воздушным охлаждением для Arduino Mega']
                 ]
  }

  render() {
    var works = this.works.map(function(item,index) {
      return (
        <WorkItem key={index} src={item[0]} span={item[1]} />
      );
    });

    return (
      <div id="our_works_wrapper" className="container">
        <h2>Наши работы</h2>
        <ul>{works}</ul>
      </div>
    );
  }
}

export default OurWorks;
