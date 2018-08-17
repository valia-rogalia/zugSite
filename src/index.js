import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.css';
import './css/lap.css';
import './css/mobile.css';

import Header from './js/Header';
import MainBanner from './js/MainBanner';
import AboutUs from './js/AboutUs';
import OurServices from './js/OurServices';
import OurWorks from './js/OurWorks';
import Contacts from './js/Contacts';
import Footer from './js/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainBanner />, document.getElementById('main_image'));
ReactDOM.render(<AboutUs />, document.getElementById('about_us'));
ReactDOM.render(<OurServices />, document.getElementById('our_services'));
ReactDOM.render(<OurWorks/>, document.getElementById('our_works'));
ReactDOM.render(<Contacts/>, document.getElementById('contacts'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

registerServiceWorker();

// cd Рабочий стол/Програмирование/Front-end/Конструкторское бюро/react public/3dstudio
