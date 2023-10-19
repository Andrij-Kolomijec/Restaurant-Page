"use strict";
(self["webpackChunky"] = self["webpackChunky"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVCQUF1QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyRGVzY3JpcHRpb24oKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21QcmljZShpdGVtKSB7XG4gICAgaWYgKGl0ZW0gPT09IFwiRHJpbmtzXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDIgKyAxKSArIDIpO1xuICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gXCJEaXNoZXNcIikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDYwIC0gMzUgKyAxKSArIDM1KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdEZXNzZXJ0cycpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMCAtIDE1ICsgMSkgKyAxNSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnUoKSB7XG4gICAgY2xlYXJEZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IG1lbnVEYXRhID0ge1xuICAgICAgICBEcmlua3M6IFtcbiAgICAgICAgICAgIFwiTW9qaXRvXCIsXG4gICAgICAgICAgICBcIk9sZCBGYXNoaW9uZWRcIixcbiAgICAgICAgICAgIFwiUGnDsWEgQ29sYWRhXCIsXG4gICAgICAgICAgICBcIlN0cmF3YmVycnkgRGFpcXVpcmlcIixcbiAgICAgICAgICAgIFwiRXNwcmVzc28gTWFydGluaVwiLFxuICAgICAgICAgICAgXCJTYW5ncmlhXCIsXG4gICAgICAgICAgICBcIlZpcmdpbiBNb2ppdG9cIixcbiAgICAgICAgICAgIFwiU2hpcmxleSBUZW1wbGVcIixcbiAgICAgICAgICAgIFwiVmlyZ2luIFBpw7FhIENvbGFkYVwiLFxuICAgICAgICAgICAgXCJGcnVpdCBQdW5jaFwiLFxuICAgICAgICAgICAgXCJDb2ZmZWVcIixcbiAgICAgICAgICAgIFwiVGVhXCIsXG4gICAgICAgICAgICBcIkxlbW9uYWRlXCIsXG4gICAgICAgICAgICBcIkljZWQgVGVhXCIsXG4gICAgICAgICAgICBcIlNvZGFcIixcbiAgICAgICAgICAgIFwiV2F0ZXJcIlxuICAgICAgICBdLFxuICAgICAgICBEaXNoZXM6IFtcbiAgICAgICAgICAgIFwiU3BpY3kgVGhhaSBCYXNpbCBDaGlja2VuXCIsXG4gICAgICAgICAgICBcIkNyZWFteSBHYXJsaWMgUGFybWVzYW4gUGFzdGFcIixcbiAgICAgICAgICAgIFwiTWFuZ28gU2Fsc2EgU2FsbW9uXCIsXG4gICAgICAgICAgICBcIlZlZ2V0YWJsZSBTdGlyLUZyeSB3aXRoIFRvZnVcIixcbiAgICAgICAgICAgIFwiSGF3YWlpYW4gUGluZWFwcGxlIFBpenphXCIsXG4gICAgICAgICAgICBcIkJlZWYgYW5kIEJyb2Njb2xpIFN0aXItRnJ5XCIsXG4gICAgICAgICAgICBcIkdyZWVrIFNhbGFkIHdpdGggRmV0YSBhbmQgT2xpdmVzXCIsXG4gICAgICAgICAgICBcIkJ1dHRlciBDaGlja2VuIEN1cnJ5XCIsXG4gICAgICAgICAgICBcIkNhcHJlc2UgU2FsYWQgd2l0aCBCYWxzYW1pYyBHbGF6ZVwiLFxuICAgICAgICAgICAgXCJUZXJpeWFraSBHbGF6ZWQgU2FsbW9uXCIsXG4gICAgICAgICAgICBcIkxlbW9uIEhlcmIgUm9hc3RlZCBDaGlja2VuXCIsXG4gICAgICAgICAgICBcIlNocmltcCBTY2FtcGkgd2l0aCBMaW5ndWluZVwiLFxuICAgICAgICAgICAgXCJNZXhpY2FuIFN0cmVldCBUYWNvc1wiLFxuICAgICAgICAgICAgXCJTcGluYWNoIGFuZCBNdXNocm9vbSBRdWljaGVcIixcbiAgICAgICAgICAgIFwiQkJRIFB1bGxlZCBQb3JrIFNhbmR3aWNoXCIsXG4gICAgICAgICAgICBcIkJha2VkIFppdGkgd2l0aCBJdGFsaWFuIFNhdXNhZ2VcIixcbiAgICAgICAgICAgIFwiRWdncGxhbnQgUGFybWVzYW5cIixcbiAgICAgICAgICAgIFwiU2VzYW1lIEdpbmdlciBOb29kbGVzXCIsXG4gICAgICAgICAgICBcIkNhanVuIEphbWJhbGF5YVwiLFxuICAgICAgICAgICAgXCJCZWVmIGFuZCBCbGFjayBCZWFuIFN0aXItRnJ5XCJcbiAgICAgICAgXSxcbiAgICAgICAgRGVzc2VydHM6IFtcbiAgICAgICAgICAgIFwiQ2hvY29sYXRlIExhdmEgQ2FrZVwiLFxuICAgICAgICAgICAgXCJTdHJhd2JlcnJ5IENoZWVzZWNha2VcIixcbiAgICAgICAgICAgIFwiQXBwbGUgUGllIHdpdGggVmFuaWxsYSBJY2UgQ3JlYW1cIixcbiAgICAgICAgICAgIFwiVGlyYW1pc3VcIixcbiAgICAgICAgICAgIFwiVHJpcGxlIENob2NvbGF0ZSBCcm93bmllc1wiLFxuICAgICAgICAgICAgXCJLZXkgTGltZSBQaWVcIixcbiAgICAgICAgICAgIFwiUGVhY2ggQ29iYmxlclwiLFxuICAgICAgICAgICAgXCJSYXNwYmVycnkgU29yYmV0XCIsXG4gICAgICAgICAgICBcIkNhcmFtZWwgRmxhblwiLFxuICAgICAgICAgICAgXCJCYW5hbmEgU3BsaXQgU3VuZGFlXCIsXG4gICAgICAgICAgICBcIlJlZCBWZWx2ZXQgQ3VwY2FrZXNcIlxuICAgICAgICBdLFxuICAgIH07XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbiAgICBmb3IgKGxldCBjYXRlZ29yeSBpbiBtZW51RGF0YSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgb2xFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgICAgICAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnLCBgJHtjYXRlZ29yeS50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgICBjYXRlZ29yeU5hbWUuaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZChjYXRlZ29yeU5hbWUpO1xuICAgICAgICBtZW51RGF0YVtjYXRlZ29yeV0uZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbkRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuRGlzaC5pbm5lclRleHQgPSBkaXNoO1xuICAgICAgICAgICAgY29uc3Qgc3BhblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3BhblByaWNlLmlubmVyVGV4dCA9IGAke2dldFJhbmRvbVByaWNlKGNhdGVnb3J5KX1gO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3BhbkRpc2gpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3BhblByaWNlKTtcbiAgICAgICAgICAgIG9sRWxlbWVudC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmQob2xFbGVtZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=