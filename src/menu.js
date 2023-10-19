function clearDescription() {
    let description = document.querySelector('.description');
    while (description.firstChild) {
        description.removeChild(description.firstChild);
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

export default generateMenu;