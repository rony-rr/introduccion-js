// variable de control
let controlView = false;

const elementList = document.getElementById("list");
const elementBtn = document.getElementById("myButton");

document.addEventListener("DOMContentLoaded", function () {
  // renderizar vertical u horizontalmente basandonos
  // en la variable de control
  if (!controlView) {
    elementList.setAttribute("class", "vertical");
  } else {
    elementList.setAttribute("class", "horizontal");
  }
});

elementBtn.addEventListener("click", function () {
  controlView = !controlView; // si es true la pasa a false y si es false la pasa a true
  if (!controlView) {
    elementList.setAttribute("class", "vertical");
  } else {
    elementList.setAttribute("class", "horizontal");
  }
});

let x = 1; //  [1, 2, 3, 4, 5]

switch (x) {
  case 1: // esto es como decir if( x === 1)
    break;
  case 2: // esto es como decir if( x === 2)
    break;
  case 3: // esto es como decir if( x === 3)
    break;
  case 4: // esto es como decir if( x === 4)
    break;
  case 5: // esto es como decir if( x === 5)
    break;
  default:
    // esto es como decir x es cualquier
    // valor que no esta en los case
    break;
}
