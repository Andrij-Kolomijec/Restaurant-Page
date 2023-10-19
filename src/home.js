function clearDescription() {
    let description = document.querySelector('.description');
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

function generateHome () {
    clearDescription();
    const description = document.querySelector('.description');
    const welcome = document.createElement('h1');
    const paragraph = document.createElement('p');
    const bonappetit = document.createElement('h2');
    const emBonappetit = document.createElement('em');

    welcome.innerText = 'Welcome!';
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    emBonappetit.innerText = 'Bon Appétit';

    bonappetit.appendChild(emBonappetit);
    description.append(welcome, paragraph, bonappetit);
}

export default generateHome;