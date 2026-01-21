import { createAbout } from './about';
import { createMenu } from './menu';
import './styles.css'
import restaurantImage from './assets/images/joshua-fernandez-restaurant.jpg';

function styleSelectedTabButton(selectedTab) {
    for (const button in tabButtons) {
        if(button === selectedTab) {
            tabButtons[button].classList.add('selected-button');
        } else {
            tabButtons[button].classList.remove('selected-button');
        }
    }
}

function createHome() {
    styleSelectedTabButton('home');

    const heading = document.createElement('h1');
    heading.textContent = 'Mala Hot Pot';
    const description = document.createElement('p');
    description.textContent = 'Hotpot from the southwestern region of China - Sichuan. Decades of experience in serving thousands of customers.';
    const address = document.createElement('strong');
    address.textContent = 'Shop 22/32 Pepper Road Stockington VIC 3666';
    const mainDiv = document.createElement('main');
    mainDiv.append(heading, description, address);

    const sideImage = document.createElement('img'); 
    sideImage.src = restaurantImage;

    return [mainDiv, sideImage];
}

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');
const tabButtons = {home: homeButton, menu: menuButton, about: aboutButton};

const contentContainer = document.querySelector('#content');
contentContainer.append(...createHome());

homeButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    contentContainer.append(...createHome());
});

menuButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    styleSelectedTabButton('menu');
    contentContainer.append(...createMenu());
});

aboutButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    styleSelectedTabButton('about');
    contentContainer.append(...createAbout());
});