import './styles/main.scss'
import logo from './assets/headerlogo.png'
import firstpage from './assets/boots.png'
import logodivider from './assets/logodivider.png'
import secondimg from './assets/secondBoots.png'
import performance from './assets/performance.png'
import feather from './assets/feather.png'
import pillow from './assets/pillow.png'
import clients from './assets/clients.png'
import commentgirl from './assets/commentgirl.png'

import Swiper from 'swiper';
import '../node_modules/swiper/swiper.scss';
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



const logoHeader = document.getElementById('header-logo__image');
logoHeader.src = logo;
const firstPageImg = document.getElementById('first-page-img');
firstPageImg.src = firstpage;

const firstPageFooters = document.getElementsByClassName('firstpage-footer');
for (let footer of firstPageFooters) {
    footer.style.backgroundImage = `url(${logodivider}) `
}
const imgs = document.getElementsByClassName('swiper-slide-img-img')
for (let img of imgs) {
    img.src = commentgirl
}

const secondPageImg = document.getElementById('second-page-img');
secondPageImg.src = secondimg;

const performanceImg = document.getElementById('benefitsPerformance');
performanceImg.src = performance;
const featherImg = document.getElementById('benefitsFeather');
featherImg.src = feather;
const pillowImg = document.getElementById('benefitsComfort');
pillowImg.src = pillow;

const asdas = document.getElementById('comments-img');
asdas.src = clients