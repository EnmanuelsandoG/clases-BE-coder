// Clase 2 Nuevas funcionalidades de los lenguajes Ecmascript

// //Operacion exponencial e includes
// /*Realizar una función reciba un array y devuelva el resultado de la operación potenciación en caso de poder realizarla. De no ser posible, devuelva null.

// Se deberá detectar si el array incluye un ** y tiene un número a cada lado. En ese caso, realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente que indica el número de la derecha. Utilizar funciones de ES7: includes y ** */

// function calculoPotencia(datamensajeing) {
//   if (datamensajeing.includes("**")) {
//     let numeros = datamensajeing.split("**");
//     if (numeros.length == 2 && numeros[0] && numeros[1]) {
//       return numeros[0] ** numeros[1];
//     } else return null;
//   } else return null;
// }

// console.log("6**2 =", calculoPotencia("6**2"));
// console.log(" ** =", calculoPotencia("**"));
// console.log("3**3 =", calculoPotencia("3**3"));
// console.log("4** =", calculoPotencia("4**"));
// console.log("4**5 =", calculoPotencia("4**5"));
// console.log("8**2** =", calculoPotencia("8**2**"));
// console.log("4*=5 =", calculoPotencia("4*=5"));

// //Ejercicio ASYNC AWAIT
// /*Realizar una función que reciba un objeto, y muemensajee cada dos segundos sus claves y valores en este formato: [clave, valor]. El proceso no debe ser bloqueante. Utilizar las nuevas funciones de ES8: entries, async await*/

// const delay2s = () =>
//   new Promise((resolve) => {
//     let refTimer = setInterval(() => resolve(refTimer), 2000);
//   });

// async function momensajearClaveValor(obj) {
//   let entries = Object.entries(obj);
//   for (let entrie of entries) {
//     console.log(entrie);
//     let refTimer = await delay2s(); //bloquear el hilo principal de ejecucion del codigo
//     clearInterval(refTimer);
//   }
// }

// console.log("Principio");
// momensajearClaveValor({
//   nombre: "Daniel",
//   apellido: "Sanchez",
//   edad: 51,
// });
// console.log("Fin");

//Utilizacion ES6-ES9
/*Dados los objetos indicados en la siguiente diapositiva:
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Momensajear el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)*/

// const objetos = [
//   {
//     manzanas: 3,

//     peras: 2,

//     carne: 1,

//     jugos: 5,

//     dulces: 2,
//   },

//   {
//     manzanas: 1,

//     sandias: 1,

//     huevos: 6,

//     jugos: 1,

//     panes: 2,
//   },
// ];

// const tiposProductos = [];

// objetos.forEach((objeto) => {
//   Object.keys(objeto).forEach((producto) => {
//     if (!tiposProductos.includes(producto)) {
//       tiposProductos.push(producto);
//     }
//   });
// });

// console.log(tiposProductos);

// const totalProductosVendidos = Object.values(
//   objetos.reduce((acc, obj) => {
//     for (const producto in obj) {
//       if (acc[producto]) {
//         acc[producto] += obj[producto];
//       } else {
//         acc[producto] = obj[producto];
//       }
//     }

//     return acc;
//   }, {})
// );

// console.log(totalProductosVendidos);

// //ES10 Ejemplo trim y flat

// const mensaje = "         Hola              ";
// console.log(mensaje);
// console.log(mensaje.trim());

// const array = ["h", "o", ["l", "a"], ["m", "u", "n"], "d", "o"];
// console.log(array);
// console.log(array.flat());

// //ES11 Ejemplo de variable nullish y variables privadas

// const variableDePrueba = 0;
// const variableConNullish = variableDePrueba ?? "Sin valor"; //Con este punto si se puede tomar la variable 0 que se necesita.
// console.log(variableConNullish); //con Nullish solo nos interesa que el valor no sea undefinded o null. Todo lo demas puede ser reasignado.

// class Persona {
//   #fullName; // Primero se declara la variable antes del constructor para poder contruitrla con los valores del constructor
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.#fullName = `${this.nombre} ${this.apellido}`; //Asignamos el valor de la variable privada
//   }

//   //Esta variable solo se puede usar de manera interna. No se puede acceder a ella por fuera
//   getFullName = () => {
//     return this.#fullName; //La unica forma que se pueda obtener el valor de la variable privada es pidiendola desde un metodo
//     //Permite utilizar variables, pero evitando que se puedan modificar desde afuera (por seguridad)
//   };
//   #metodoPrivado = () => {
//     //Los metodos privados se declaran solo para ser usados dentro de la clase y no llamados por fuera
//     //aqui se realizan tareas que se quieren ejecutar solo de manera interna en la clase, no se puede mandar a llamar este metodo.
//   };
// }

// let instancial = new Persona("Mauricio", "Espinoza");

// console.log(instancial.getFullName());

//Hands on Labs: Registrador de tickets de eventos.?????
/* CONSIGNA: ¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)*/
