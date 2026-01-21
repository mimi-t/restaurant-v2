import closeupImage from './assets/images/peijia-li-closeup.jpg';

function createMenu() {
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    // soup bases section
    const soupSubheading = document.createElement('h2');
    soupSubheading.textContent = 'Soup Bases';
    const soupList = document.createElement('ul');
    const soups = ['Signature Mala', 'Tomato', 'Mushroom', 'Pork Bone', 'Fish'];
    soups.forEach(soup => {
        const soupItem = document.createElement('li');
        soupItem.textContent = soup;
        soupList.append(soupItem);
    });
    const soupSection = document.createElement('section');
    soupSection.append(soupSubheading, soupList);

    // dishes section
    const dishSubheading = document.createElement('h2');
    dishSubheading.textContent = 'Dishes';
    const dishList = document.createElement('ul');
    const dishes = ['Signature Beef Tripe', 'Beef Tongue', 'Pork Intestines', 'Pork Belly', 'Shrimp Balls', 'Enoki Mushrooms', 'Chinese Cabbage', 'Bamboo Shoots'];
    dishes.forEach(dish => {
        const dishItem = document.createElement('li');
        dishItem.textContent = dish;
        dishList.append(dishItem);
    });
    const dishSection = document.createElement('section');
    dishSection.append(dishSubheading, dishList);

    // image
    const topImage = document.createElement('img'); 
    topImage.src = closeupImage;

    const mainDiv = document.createElement('main');
    mainDiv.append(heading, topImage, soupSection, dishSection);

    return [mainDiv];
}

export { createMenu };