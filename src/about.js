function createAbout() {
    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    const description = document.createElement('p');
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt temporibus vitae voluptas in voluptatum expedita quae consequatur, similique adipisci voluptatibus! Suscipit mollitia corrupti tenetur voluptate at. At similique nesciunt ex earum delectus atque nam, sit voluptates modi quidem ut perspiciatis`;
    return [heading, description]
}

export { createAbout };