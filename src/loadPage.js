export function loadPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to the Restaurant Page!';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Enjoy our delicious menu and cozy atmosphere.';


    content.appendChild(heading);
    content.appendChild(paragraph);
}