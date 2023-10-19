import './style.css';
import Restaurant from './restaurant.jpg';

const content = document.getElementById('content');

function generatePage() {
    const header = document.createElement('header');
    const navbar = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const description = document.createElement('div');
    const footer = document.createElement('footer');
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    
    navbar.setAttribute('id', 'navbar');
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    description.setAttribute('class', 'description');

    header.innerText = 'Under the Pipes';
    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';
    link1.textContent = 'Nick Karvounis';
    link1.href = 'https://unsplash.com/@nickkarvounis';
    link2.textContent = 'Unsplash';
    link2.href = 'https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE';

    footer.append('Photo by ', link1, ' on ', link2);
    navbar.append(home, menu, contact);
    content.append(header, navbar, description, description, footer);
    
    // const generateHome = (() => {
    //     // clearDescription();
    //     const welcome = document.createElement('h1');
    //     const paragraph = document.createElement('p');
    //     const bonappetit = document.createElement('h2');
    //     const emBonappetit = document.createElement('em');

    //     welcome.innerText = 'Welcome!';
    //     paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    //     emBonappetit.innerText = 'Bon Appétit';

    //     bonappetit.appendChild(emBonappetit);
    //     description.append(welcome, paragraph, bonappetit);
    // }) ();





    home.addEventListener('click', generateHome);


}


function generateMenu() {

}

function generateContact() {

}

function clearDescription() {
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

// generatePage();
