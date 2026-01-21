import tableImage from './assets/yihan-wang-table.jpg'

const heroImage = document.createElement('img'); 
heroImage.src = tableImage;
const heading = document.createElement('h1');
heading.textContent = 'Mala Hot Pot';
const description = document.createElement('p');
description.textContent = 'Hotpot from the southwestern region of China - Sichuan. Decades of experience in serving thousands of customers.'

const contentContainer = document.querySelector('#content');
contentContainer.append(heroImage, heading, description);