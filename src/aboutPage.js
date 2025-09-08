export function aboutPage(){
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'We are passionate about serving the best food in town.';

    content.appendChild(heading);
    content.appendChild(paragraph);
}