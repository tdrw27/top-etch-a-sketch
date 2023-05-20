const body = document.querySelector('body');
let selectedColor = 'black';
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

// Buttons for changing grid size
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');

const x16button = document.createElement('button');
x16button.innerText = "16 x 16";


const x32button = document.createElement('button');
x32button.innerText = "32 x 32";


const x64button = document.createElement('button');
x64button.innerText = "64 x 64";

const x100button = document.createElement('button');
x100button.innerText = "100 x 100";

// Buttons for grid sizing
const buttonArr = [x16button, x32button, x64button, x100button];
buttonArr.forEach(button => buttonContainer.appendChild(button))
body.appendChild(buttonContainer);

// Adding event listeners to buttons
x16button.addEventListener('click', () => createGrid(16));
x32button.addEventListener('click', () => createGrid(32));
x64button.addEventListener('click', () => createGrid(64));
x100button.addEventListener('click', () => createGrid(100));


function setColor(e) {
  let target = e.target
  if (target.nodeName == 'DIV') {
    if (selectedColor) {
      target.style.backgroundColor = selectedColor;
      target.classList.add('set');
    }
    else {
      setSpecial(target, specialClass);
    }
  }
}

// // change color of grid area to special selection
// function setSpecial(target, specialClass) {
//   //random rgb
//   if
// }


function createGrid(size) {
  const oldContainer = document.querySelector('section')
  const container = document.createElement('section');
  container.classList.add('grid-container');

  // add event listener for mouseover to change grid-area color
  container.addEventListener('mouseover', setColor)

  // clear any existing grids
  if (body.contains(oldContainer)) {
    body.removeChild(oldContainer);
    }

  // create initial 16 x 16 divs
  body.appendChild(container);

  let grid = size * size;



  for (let i = 1; i <= grid; i++) {
    const div = document.createElement('div');
    div.classList.add(`grid-areax${size}`)
    // div.setAttribute('id', `grid${i}`)
    container.appendChild(div);
  }
}


// Code to change background of grid
// root.style.setProperty('--background-color', 'blue')


// Buttons for customization
const customButtons = document.createElement('div');
customButtons.classList.add('buttonContainer');

const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
body.appendChild(inputContainer);
// Line Color Section
const colorInputSection = document.createElement('div');
colorInputSection.classList.add('inputSection');

const colorInputLabel = document.createElement('label')
colorInputLabel.innerText = "Line Color: ";

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');

colorInputSection.appendChild(colorInputLabel);
colorInputSection.appendChild(colorPicker);
// Background Color Section
const backgroundInputSetion = document.createElement('div');
backgroundInputSetion.classList.add('inputSection');

const backgroundInputLabel = document.createElement('label');
backgroundInputLabel.innerText = "Background Color: ";

const backgroundColorPicker = document.createElement('input');
backgroundColorPicker.setAttribute('type', 'color');

backgroundInputSetion.appendChild(backgroundInputLabel);
backgroundInputSetion.appendChild(backgroundColorPicker);

// Appending Sections
inputContainer.appendChild(colorInputSection);
inputContainer.appendChild(backgroundInputSetion);

// Listeners for customization
colorInputSection.addEventListener('input', e => {
  let target = e.target
  selectedColor = target.value;
})

backgroundInputSetion.addEventListener('input', e => {
  let target = e.target
  root.style.setProperty('--background-color', target.value);
})







// Initial Grid
createGrid(16);