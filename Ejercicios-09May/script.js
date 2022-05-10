var MyMessg = "Mi mensaje personalizado";
const PI = 3.1416;

// calcular el area de un circulo
function getAreaCirculo(radio) {
  const radioAlCuadrado = radio * radio;
  return PI * radioAlCuadrado;
}

function getAreaCilindro(radio, altura) {
  const resultado = 2 * PI * getRadioPorAltura(radio, altura);
  return resultado;
}

// Otro modulo de mi programa
function getAreaCilindro2(radio, altura) {
  const resultado = 2 * PI * getRadioPorAltura(radio, altura);
  return resultado;
}

function getRadioPorAltura(radio, altura) {
  const radioPorAltura = radio * altura;
  return radioPorAltura;
}

// Una funcion solo va a ejecutar el primer return que encuentre
function getNameApellido(name, lastname) {
  if (name.length <= 5) return name;

  return lastname;
}

// Retornamos un objeto literal
function getNameApellidoFull(name, lastname) {
  return [name, lastname];
}

// Métodos
// Esta función no retirna ningun valor,
// sino que modifica el valor de alguna variable o dato
function setMensaje(param) {
  MyMessg = param;
}

// Arrow Functions
// Es lo mismo que una funcion pero definida a traves de una constante,
// lo que mejora su inmutabilidad

const MyArrow1 = (param1) => {
  return "el dato es: " + param1;
};

const getCuboNumero = (n) => {
  const numeroAlCubo = n * n * n;
  return { resultado: numeroAlCubo, numeroOperado: n };
};

const getVolumenEsfera = (r) => {
  // V = (4/3)*PI*(radio*radio*radio)
  const cubo = getCuboNumero(r);
  const volumen = (4 / 3) * PI * cubo.resultado;
  return {
    volumen,
    radioEsfera: r,
    msgPrint: `El volumen de una esfera de radio: ${r}, es igual a: ${volumen}`,
  };
};

const arrayEsferas = [
  { radio: null, color: null, elemento: "aluminio" }, //0
  { radio: 2, color: "rojo", elemento: "oro" },
  { radio: 3, color: "verde", elemento: "plata" },
  { radio: null, color: "negra", elemento: "" }, // 3
  { radio: 5, color: "amarillo", elemento: "bronce" },
  { radio: 7, color: "azul", elemento: "cobre" },
  { radio: 1, color: "café", elemento: "aleación" },
  { radio: null, color: null, elemento: "" }, //7
];

// Iteracion de arreglo (colección de datos) de esferas
// arrayEsferas.forEach((item, index) => {
//   if (item.radio && item.color && item.elemento) {
//     let radio, color, elemento;
//     radio = item.radio;
//     color = item.color;
//     elemento = item.elemento;
//     const resultado = getVolumenEsfera(radio);
//     console.log(
//       `${resultado.msgPrint}, está hecha de ${elemento}, y su color es ${color}`
//     );
//   } else {
//     console.log(
//       `La esfera del item: ${index} en la coleccion de datos tiene campos incompletos`
//     );
//   }
// });

const RADIO_DEFAULT = 2.5;
const COLOR_DEFAULT = "gris";
const ELEMENT_DEFAULT = "aluminio";

const outpuEsferasNuevas = arrayEsferas.map((item, index) => {
  if (item.radio && item.color && item.elemento) {
    return {
      radio: item.radio,
      color: item.color,
      elemento: item.elemento,
    };
  } else {
    let radio, color, elemento;
    radio = item.radio ? item.radio : RADIO_DEFAULT; // operador ternario
    color = item.color ? item.color : COLOR_DEFAULT;
    elemento = item.elemento ? item.elemento : ELEMENT_DEFAULT;
    return {
      radio,
      color,
      elemento,
    };
  }
});

outpuEsferasNuevas.forEach((item, index) => {
  if (item.radio && item.color && item.elemento) {
    let radio, color, elemento;
    radio = item.radio;
    color = item.color;
    elemento = item.elemento;
    const resultado = getVolumenEsfera(radio);
    console.log(
      `${resultado.msgPrint}, está hecha de ${elemento}, y su color es ${color}`
    );
  } else {
    console.log(
      `La esfera del item: ${index} en la coleccion de datos tiene campos incompletos`
    );
  }
});

// Objeto literal
let obj = {
  name: "Diana",
  apellido: "Sen",
};

console.log(obj);

console.log(obj.name);



// Ejemplo grafico de como se veria super 

let application = {
  funciones: [
    {
      name: "funcion1",
      global: true,
      elem: undefined
    },
  ],
  variables: [
    {
      name: "var1",
      global: true,
      local: false,
    },
  ],
};
