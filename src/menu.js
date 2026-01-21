function createMenu() {
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const soupSubheading = document.createElement('h2');
    soupSubheading.textContent = 'Soup Bases';
    const soupList = document.createElement('ul');
    const soups = ['Signature Mala', 'Tomato', 'Mushroom', 'Pork Bone', 'Fish'];
    soups.forEach(soup => {
        const soupItem = document.createElement('li');
        soupItem.textContent = soup;
        soupList.append(soupItem);
    });

    const dishSubheading = document.createElement('h2');
    dishSubheading.textContent = 'Dishes';
    const dishList = document.createElement('ul');
    const dishes = ['Signature Beef Tripe', 'Beef Tongue', 'Pork Intestines', 'Pork Belly', 'Shrimp Balls', 'Enoki Mushrooms', 'Chinese Cabbage', 'Bamboo Shoots'];
    dishes.forEach(dish => {
        const dishItem = document.createElement('li');
        dishItem.textContent = dish;
        dishList.append(dishItem);
    });

    return [heading, soupSubheading, soupList, dishSubheading, dishList];
}

export { createMenu };