// Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const textChangerBtn = document.getElementById('text-changer');

textChangerBtn.addEventListener('click', () => {
    if (changeableText.textContent === 'This text will change when you click the button below.') {
        changeableText.textContent = 'The text has been changed successfully!';
    } else {
        changeableText.textContent = 'This text will change when you click the button below.';
    }
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');
const styleChangerBtn = document.getElementById('style-changer');

styleChangerBtn.addEventListener('click', () => {
    if (styleDemo.style.backgroundColor !== 'lightblue') {
        styleDemo.style.backgroundColor = 'lightblue';
        styleDemo.style.color = 'darkred';
        styleDemo.style.border = '3px dashed green';
        styleDemo.textContent = 'Styles have been applied!';
    } else {
        styleDemo.style.backgroundColor = '';
        styleDemo.style.color = '';
        styleDemo.style.border = '';
        styleDemo.textContent = 'This box will change style';
    }
});

// Add or remove an element when a button is clicked
const elementContainer = document.getElementById('element-container');
const elementTogglerBtn = document.getElementById('element-toggler');
let addedElement = null;

elementTogglerBtn.addEventListener('click', () => {
    if (!addedElement) {
        addedElement = document.createElement('div');
        addedElement.className = 'new-element';
        addedElement.textContent = 'This is a dynamically added element!';
        elementContainer.appendChild(addedElement);
        elementTogglerBtn.textContent = 'Remove Element';
    } else {
        elementContainer.removeChild(addedElement);
        addedElement = null;
        elementTogglerBtn.textContent = 'Add Element';
    }
});