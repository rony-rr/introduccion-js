function ConvertToUppercase(str) {
  if (str) {
    if (typeof str === "string" || str instanceof String) {
      return str.toUpperCase();
    } else {
      alert("El tipo de dato ingresado es invalido");
    }
  } else {
    alert("La variable esta vacia");
  }
}

// Pruebas de la función
// ConvertToUppercase(2);
// ConvertToUppercase(false);
// ConvertToUppercase(undefined);
// ConvertToUppercase(0);
// ConvertToUppercase("");
// ConvertToUppercase("Esta es una cadena de texto");

// Obtengo todos los elementos html que sean "div"
const elementDiv = document.getElementsByTagName("div");
const countDivs = elementDiv.length;
const msj = `Su web contiene: ${countDivs} elementos div`; // acá uso una contracción para concatenar cadenas de texto

// console.log(msj);

// esto es un arreglo unidimensional
const arr = [1, 2, 3, "este elemento es text", { id: 1, data: [] }];

// esto es un arreglo multidimensional
const arr2 = [
  [1, 2],
  [4, 5],
];

//             1       5
let arr3 = arr[0] + arr2[1][1];

let counterStop = 0;
while (counterStop <= 6) {
  // se vava repetir infinitas veces si no incrementamos el contador
  if (counterStop % 2 === 0) {
    // si es igual a 4 y si es un numero
    console.log("Es un numero par: " + counterStop);
  } else {
    console.log("no es par: " + counterStop);
  }
  counterStop++; // incrementa el contador en una unidad
  //   counterStop = counterStop + 1; // incrementa el contador en una unidad
}

do {
  if (counterStop % 2 === 0) {
    // si es igual a 4 y si es un numero
    console.log("Es un numero par: " + counterStop);
  } else {
    console.log("no es par: " + counterStop);
  }
  counterStop++; // incrementa el contador en una unidad
} while (counterStop < 10);

// Aquí el valor del counterStop ya ha alcanzado -> 10
for (counterStop; counterStop < 20; counterStop++) {
  if (counterStop % 2 === 0) {
    // si es igual a 4 y si es un numero
    console.log("Es un numero par: " + counterStop);
  } else {
    console.log("no es par: " + counterStop);
  }
}

// En este punto counterStop es igual a 20

// function MyFunc1() {}  Funcion natural   =>   const MyFunc2 = () => {} Funcion flecha
arr.forEach((item, index) => {
  console.log({ index }, { item });
});

// map -> retorna -> crear nuevos elementos basados en lo que estamos iterando

const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayData.forEach((item) => {
  if (item % 2 === 0) {
    console.log(`El número: ${item}, es pares`);
  }
});

const pares = [];
arrayData.map((item) => {
  if (item % 2 === 0) {
    pares.push(item);
  }
});

console.log({ pares });
