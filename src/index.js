import './style.css';
import Restaurant from './restaurant.jpg';

const content = document.getElementById('content');

function generatePage() {
    const description = document.createElement('div');
    const header = document.createElement('header');
    const navbar = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
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
    link1.innerText = 'Nick Karvounis';
    link1.href = 'https://unsplash.com/@nickkarvounis';
    link2.innerText = 'Unsplash';
    link2.href = 'https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE';

    footer.append('Photo by ', link1, ' on ', link2);
    navbar.append(home, menu, contact);
    content.append(header, navbar, description, footer);
    
    generateHome();
    
    home.addEventListener('click', generateHome);
    menu.addEventListener('click', generateMenu);
    contact.addEventListener('click', generateContact);
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

function generateMenu() {
    clearDescription();
    const menuData = {
        Drinks: [
            "Mojito",
            "Old Fashioned",
            "Piña Colada",
            "Strawberry Daiquiri",
            "Espresso Martini",
            "Sangria",
            "Virgin Mojito",
            "Shirley Temple",
            "Virgin Piña Colada",
            "Fruit Punch",
            "Coffee",
            "Tea",
            "Lemonade",
            "Iced Tea",
            "Soda",
            "Water"
        ],
        Dishes: [
            "Spicy Thai Basil Chicken",
            "Creamy Garlic Parmesan Pasta",
            "Mango Salsa Salmon",
            "Vegetable Stir-Fry with Tofu",
            "Hawaiian Pineapple Pizza",
            "Beef and Broccoli Stir-Fry",
            "Greek Salad with Feta and Olives",
            "Butter Chicken Curry",
            "Caprese Salad with Balsamic Glaze",
            "Teriyaki Glazed Salmon",
            "Lemon Herb Roasted Chicken",
            "Shrimp Scampi with Linguine",
            "Mexican Street Tacos",
            "Spinach and Mushroom Quiche",
            "BBQ Pulled Pork Sandwich",
            "Baked Ziti with Italian Sausage",
            "Eggplant Parmesan",
            "Sesame Ginger Noodles",
            "Cajun Jambalaya",
            "Beef and Black Bean Stir-Fry"
        ],
        Desserts: [
            "Chocolate Lava Cake",
            "Strawberry Cheesecake",
            "Apple Pie with Vanilla Ice Cream",
            "Tiramisu",
            "Triple Chocolate Brownies",
            "Key Lime Pie",
            "Peach Cobbler",
            "Raspberry Sorbet",
            "Caramel Flan",
            "Banana Split Sundae",
            "Red Velvet Cupcakes"
        ],
    };
    const description = document.querySelector('.description');
    for (let category in menuData) {
        const categoryName = document.createElement('div');
        const olElement = document.createElement('ol');
        categoryName.classList.add('food', `${category.toLowerCase()}`);
        categoryName.innerText = category;
        description.append(categoryName);
        menuData[category].forEach((dish) => {
            const li = document.createElement('li');
            const spanDish = document.createElement('span');
            spanDish.innerText = dish;
            const spanPrice = document.createElement('span');
            spanPrice.innerText = `${getRandomPrice(category)}`;
            li.appendChild(spanDish);
            li.appendChild(spanPrice);
            olElement.appendChild(li);
        });
        description.append(olElement);
    }
}

function getRandomPrice(item) {
    if (item === "Drinks") {
        return Math.floor(Math.random() * (10 - 2 + 1) + 2);
    } else if (item === "Dishes") {
        return Math.floor(Math.random() * (60 - 35 + 1) + 35);
    } else if (item === 'Desserts') {
        return Math.floor(Math.random() * (30 - 15 + 1) + 15);
    }
}

function generateContact() {
    clearDescription();
    const description = document.querySelector('.description');
    const contacts = document.createElement('h1');
    const number = document.createElement('p');
    const address = document.createElement('p');

    contacts.innerText = 'Contacts';
    address.innerText = 'Planet Earth, 420 69'
    number.innerText = 'Phone: +69 486 52 486 42';

    description.append(contacts, address, number);
}

function clearDescription() {
    let description = document.querySelector('.description');
    // content.removeChild(description);
    // description = document.createElement('div');
    // description.setAttribute('class', 'description');
    // const footer = document.querySelector('footer');
    // content.insertBefore(description, footer);
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

generatePage();
