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

export default generateContact;