export function loadPage(){
    const content = document.getElementById('content');

    const scrollMain = document.createElement('div');
    scrollMain.id = 'scrollMain';



    const scrollMap = document.createElement('div');
    scrollMap.id = 'scrollMap';
 

    content.appendChild(scrollMain);
    content.appendChild(scrollMap);
}