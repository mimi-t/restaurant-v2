import chefImage from './assets/images/abhinav-bhardwaj-chef.jpg'

function createAbout() {
    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    const description = document.createElement('p');
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus vitae voluptas in voluptatum expedita quae consequatur, similique adipisci voluptatibus! Suscipit mollitia corrupti tenetur voluptate at. At similique nesciunt ex earum delectus atque nam, sit voluptates modi quidem ut perspiciatis`;
    const mainDiv = document.createElement('main');
    mainDiv.append(heading, description);

    const sideImage = document.createElement('img'); 
    sideImage.src = chefImage;

    return [mainDiv, sideImage];
}

export { createAbout };