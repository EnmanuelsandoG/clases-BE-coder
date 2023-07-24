"use strict";

// //Ejemplo de setTimeout
// const temporizador = function (callback, texto, time) {
//   setTimeout(() => callback(texto), time);
// };

// const saludo = (texto) => {
//   console.log(texto);
//   return texto;
// };

// console.log("Inicia el programa"); //Sync
// console.log(temporizador(saludo, "Hello world", 5000)); //Async
// console.log("Finaliza el programa"); //Sync

// //Ejemplo de setInterval
// let count = 1;

// let timer = setInterval(() => {
//   console.log("Loop de setInterval", count++);
//   if (count > 10) {
//     clearInterval(timer);
//   }
// }, 1000);

/* Ejercicio 1: Almacenar fecha y hora
Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
Utilizar el módulo fs y sus operaciones de tipo callback. */

const fs = require("fs");

console.log(">>> Inicio del programa");

let dateTime = new Date();
let year = dateTime.getFullYear();
let month = dateTime.getMonth() + 1;
let day = dateTime.getDate();
let hour = dateTime.getHours();
let min = dateTime.getMinutes();
let sec = dateTime.getSeconds();

let fechaFormateada = `${year}-${month}-${day} ${hour}:${min}:${sec}`;

fs.writeFile("./date-now.txt", fechaFormateada, (error) => {
  if (error) return console.error("Error de escritura!");

  fs.readFile("./date-now.txt", (error, contenido) => {
    if (error) return console.error("Error de lectura!");

    console.log(contenido.toString());
  });
});

console.log(">>> Fin del programa");
