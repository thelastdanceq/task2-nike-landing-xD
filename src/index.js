import './styles/main.scss'
import logo from './assets/headerlogo.png'
import firstpage from './assets/boots.png'
import firstpage2 from './assets/bootshome2.png'
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
import circle from './assets/circles.png'
import close from './assets/close.png'
import menuIcon from './assets/menuicon.png'
import Swiper from 'swiper';
import '../node_modules/swiper/swiper.scss';
import '../node_modules/swiper/modules/pagination/pagination.scss';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    loopAdditionalSlides: 0,
    slidesPerView: 1,
    spaceBetween: 80,
    breakpoints: {
        320: {

        },
        480: {

        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 80,
        },
    }
});
const firstPageImg = document.getElementById('first-page-img');
const firstpageButton = document.getElementsByClassName('firstpage-button__button')[0];
const decideWidth = () => {
    if (document.body.clientWidth <= 426) {
        firstpageButton.style.backgroundImage = `url(${circle})`
        firstpageButton.style.backgroundPosition = 'center'
        firstpageButton.style.backgroundRepeat = 'no-repeat'
        firstPageImg.src = firstpage2;
    } else {
        firstPageImg.src = firstpage;
    }
}

const setImageBySelector = (selector, image) => {
    document.querySelector(selector).src = image;
}

decideWidth()


window.onresize = function () {
    decideWidth()
};



const firstPageFooters = document.getElementsByClassName('firstpage-footer');
for (let footer of firstPageFooters) {
    footer.style.backgroundImage = `url(${logodivider}) `
}
const imgs = document.getElementsByClassName('swiper-slide-img-img')
for (let img of imgs) {
    img.src = commentgirl
}
setImageBySelector('#header-logo__image', logo)
setImageBySelector('#menu-icon', menuIcon)
setImageBySelector('#second-page-img', secondimg)
setImageBySelector('#benefitsPerformance', performance)
setImageBySelector('#benefitsFeather', feather)
setImageBySelector('#benefitsComfort', pillow)
setImageBySelector('#comments-img', clients)
setImageBySelector('.after-coments-image', prodimage)
setImageBySelector('#contacts-image', support)
setImageBySelector('#btn-icon', whatsapp)
setImageBySelector('#footer-container-logo-img', footericon)


const menu = document.querySelector('.nav-menu-btn');
const links = document.querySelector('.nav__links');
const back = document.querySelector('.menu-background');
const closeBtn = document.querySelector('#close-btn');
menu.addEventListener('click', () => {
    links.classList.toggle('active');
    back.classList.toggle('active')
})
closeBtn.src = close;

closeBtn.addEventListener('click', () => {
    links.classList.toggle('active');
    back.classList.toggle('active')
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}