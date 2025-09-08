export function menuPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'This is the Menu Page!';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Check out our delicious offerings.';

    content.appendChild(heading);
    content.appendChild(paragraph);
}