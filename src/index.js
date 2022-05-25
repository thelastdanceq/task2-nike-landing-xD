import './styles/main.scss'
import logo from './assets/headerlogo.png'
import firstpage from './assets/boots.png'
import logodivider from './assets/logodivider.png'
import secondimg from './assets/secondBoots.png'
import performance from './assets/performance.png'
import feather from './assets/feather.png'
import pillow from './assets/pillow.png'



const logoHeader = document.getElementById('header-logo__image');
logoHeader.src = logo;
const firstPageImg = document.getElementById('first-page-img');
firstPageImg.src = firstpage;

const firstPageFooters = document.getElementsByClassName('firstpage-footer');
for (let footer of firstPageFooters) {
    footer.style.backgroundImage = `url(${logodivider}) `
}


const secondPageImg = document.getElementById('second-page-img');
secondPageImg.src = secondimg;

const performanceImg = document.getElementById('benefitsPerformance');
performanceImg.src = performance;
const featherImg = document.getElementById('benefitsFeather');
featherImg.src = feather;
const pillowImg = document.getElementById('benefitsComfort');
pillowImg.src = pillow;

