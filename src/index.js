import { createAbout } from './about';
import { createMenu } from './menu';
import './styles.css'
// import tableImage from './assets/images/yihan-wang-table.jpg'
import ingredientsImage from './assets/images/peijia-li-ingredients.jpg';

function createHome() {
    const heroImage = document.createElement('img'); 
    heroImage.src = ingredientsImage;
    const heading = document.createElement('h1');
    heading.textContent = 'Mala Hot Pot';
    const description = document.createElement('p');
    description.textContent = 'Hotpot from the southwestern region of China - Sichuan. Decades of experience in serving thousands of customers.';


    return [heroImage, heading, description];
}

const contentContainer = document.querySelector('#content');
contentContainer.append(...createHome());

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.append(...createHome());
});

menuButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.append(...createMenu());
});

aboutButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.append(...createAbout());
});