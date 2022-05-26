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
import prodimage from './assets/prodimage.png'
import support from './assets/support 1.png'
import footericon from './assets/footericon.png'
import whatsapp from './assets/whatsapp.png'
import Swiper from 'swiper';
import '../node_modules/swiper/swiper.scss';
import '../node_modules/swiper/modules/pagination/pagination.scss';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    slidesPerView: 2,
    loop: false,
    spaceBetween: 80,


});
swiper.loopDestroy();
swiper.loopCreate();



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
const afterComentsImage = document.getElementsByClassName('after-coments-image')[0];
afterComentsImage.src = prodimage


const contactsImage = document.getElementById('contacts-image');
contactsImage.src = support
const contactsBTNImage = document.getElementById('btn-icon');
contactsBTNImage.src = whatsapp
const footerLogo = document.getElementById('footer-container-logo-img');
footerLogo.src = footericon