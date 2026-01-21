import { createAbout } from './about';
import { createMenu } from './menu';
import './styles.css'
import restaurantImage from './assets/images/joshua-fernandez-restaurant.jpg';

function createHome() {
    const heading = document.createElement('h1');
    heading.textContent = 'Mala Hot Pot';
    const description = document.createElement('p');
    description.textContent = 'Hotpot from the southwestern region of China - Sichuan. Decades of experience in serving thousands of customers.';
    const mainDiv = document.createElement('main');
    mainDiv.append(heading, description);

    const sideImage = document.createElement('img'); 
    sideImage.src = restaurantImage;

    return [mainDiv, sideImage];
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