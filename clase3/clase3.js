//Clase 3: Programacion Sincronica y asincronica
/* Declaracion de funciones:
funciones tambien son objetos:
tradicional: const nombre = function(params){...} 
funciones 2.0:
arrow functions: const nombre = (params) => {}
funciones de un solo param: const nombre = param => {}
funciones de una sola instruccion: const nombre = param => ...instruccion
return implicito: const promediar = (a,b) => (a + b) / 2
const p = promediar (4,8)
console.log(p) //6 */
//Callbacks:
/*Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

Todas las funciones tendrán que ser realizadas con sintaxis flecha.
*/

// const operacion = (valor1, valor2, funcOperacion) => {
//   return funcOperacion(valor1, valor2);
// };

// const suma = (valor1, valor2) => valor1 + valor2;
// const resta = (valor1, valor2) => valor1 - valor2;
// const multiplicacion = (valor1, valor2) => valor1 * valor2;
// const division = (valor1, valor2) => valor1 / valor2;
// const modulo = (valor1, valor2) => valor1 % valor2;

// console.log(operacion(3, 4, suma));
// console.log(operacion(3, 4, resta));
// console.log(operacion(3, 4, multiplicacion));
// console.log(operacion(3, 4, division));
// console.log(operacion(3, 4, modulo));

/* Promesas: Estados:
-Pending: Estado inicial de una promesas
-Fulfilled: Sale todo bien y el resultado se maneja por el callback asignado mediante el metodo .then()
-Rejected: la operacion fallo, y el error es manejado por el callback asignado mediante el metodo .catch()
*/

// function dividir(dividendo, divisor) {
//   return new Promise((resolve, reject) => {
//     if (divisor == 0) {
//       reject("no se puede dividir por cero.");
//     } else {
//       resolve(dividendo / divisor);
//     }
//   });
// }

// dividir(10, 0)
//   .then((resultado) => {
//     console.log(`resultado: ${resultado}`);
//   })
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });
// //muestra por pantalla:
// // error: no se puede dividir por cero

// dividir(10, 2)
//   .then((resultado) => {
//     console.log(`resultado: ${resultado}`);
//   })
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });

// console.log("fin");

// setTimeout

let contador = 1;

setInterval(() => {
  if (contador == 7) {
    clearInterval(1);
  }
  console.log(`Ejecucion de tarea en ${contador}...`);
  contador++;
}, 2000);

async function imprimirSaludo(texto) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(texto);
}

console.log("Inicio del programa");

imprimirSaludo("Hola coders!!"); //No bloqueante

console.log("Fin del programa");
