"use strict";
(self["webpackChunky"] = self["webpackChunky"] || []).push([["contacts"],{

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contacts.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2NvbnRhY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyRGVzY3JpcHRpb24oKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XG4gICAgY2xlYXJEZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29udGFjdHMuaW5uZXJUZXh0ID0gJ0NvbnRhY3RzJztcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9ICdQbGFuZXQgRWFydGgsIDQyMCA2OSdcbiAgICBudW1iZXIuaW5uZXJUZXh0ID0gJ1Bob25lOiArNjkgNDg2IDUyIDQ4NiA0Mic7XG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoY29udGFjdHMsIGFkZHJlc3MsIG51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=