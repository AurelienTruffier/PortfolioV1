//ANIMATIONS DE SCROLL
const portfolioLink = document.getElementById('portfolio_nav_link');
const skillsLink = document.getElementById('skills_nav_link');
const contactLink = document.getElementById('contact_nav_link');

const portfolio = document.getElementById('portfolio');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

//fonction à appeler pour scroller vers un élément donné en paramètre
function AutoScroll(section){
    //récupère la position verticale de la section vers laquelle l'on va scroller
    const topPosition = section.getBoundingClientRect().top;
    window.scroll({
        top: topPosition,
        behavior: 'smooth'
    });
}

portfolioLink.addEventListener('click', () => {
    AutoScroll(portfolio);
});

skillsLink.addEventListener('click', () => {
    AutoScroll(skills);
});

contactLink.addEventListener('click', () => {
    AutoScroll(contact);
});

//BOUTON DE SCROLL VERS LE HAUT
const scroll_up_button = document.getElementById('scroll_up_button');
const top_container = document.getElementById('top_container');

scroll_up_button.addEventListener('click', () => {
    AutoScroll(top_container);
})

document.addEventListener('scroll',() => {
    //récupère la valeur du scroll depuis le haut de l'écran
    let scrollY = window.scrollY;
    //si elle est supérieure à 200px
    if(scrollY > 200){
        //on affiche le bouton
        scroll_up_button.classList.add('show');
    }
    else{
        scroll_up_button.classList.remove('show');
    }
})