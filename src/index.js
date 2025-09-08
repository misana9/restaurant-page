import './styles.css';
import { loadPage }  from './loadPage';
import { menuPage }  from './menuPage';
import { aboutPage }  from './aboutPage';

// Initial load
loadPage();

// Navigation buttons

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

homeButton.addEventListener("click", () => {
    document.getElementById('content').innerHTML = '';
    loadPage();
});

menuButton.addEventListener("click", () => {
    document.getElementById('content').innerHTML = '';
    menuPage();
});

aboutButton.addEventListener("click", () => {
    document.getElementById('content').innerHTML = '';
    aboutPage();
});
