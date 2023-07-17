"use mensajeict";

// const nombre = "Enmanuel";
// let edad = 28;
// const precio = 159.99;
// const seriesFav = ["Breaking Bad", "Mr Robot", "The office"];
// const movies = [
//   {
//     nombre: "Batman the dark knight",
//     anio: 2008,
//     protagonistas: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
//   },
//   {
//     nombre: "Inglorious Basterds",
//     anio: 2009,
//     protagonistas: ["Brad Pitt", "Christoph Waltz", "Melanie Laurent"],
//   },
//   {
//     nombre: "Star Wars episode IV",
//     anio: 1977,
//     protagonistas: ["Mark Hamill", "Harrisonm Ford", "Carrie Fisher"],
//   },
// ];

// console.log(nombre, edad, precio, seriesFav, movies);

// seriesFav.push("Game of thrones");
// edad += 1;

// console.log(nombre, edad, precio, seriesFav, movies);

//// Punto 1
// function momensajearLista(list) {
//   try {
//     if (list.length >= 1) {
//       console.log(list);
//     } else {
//       console.log("Lista vacia!🙁");
//     }
//   } catch (e) {
//     console.error("Se produjo un error❌");
//   }
// }

// momensajearLista([0, 1, 2, 3, 4]);
// momensajearLista([]);
// momensajearLista();

////Punto 2
// (function (array) {
//   if (array && array.lenght > 0) {
//     array.forEach((element) => {
//       console.log(element);
//     });
//   } else {
//     console.log("Lista vacia!🙁");
//   }
// })(["Luke", "Leia", "Bobba Fett"]);

// //Punto 3
// function crearMultiplicador(numero) {
//   return function (segundoNumero) {
//     return numero * segundoNumero;
//   };
// }

// let duplicar = crearMultiplicador(2);

// let triplicar = crearMultiplicador(3);

// console.log(duplicar(4)); // Resultado: 8 (2 * 4)

// console.log(triplicar(5)); // Resultado: 15 (3 * 5)

// console.log(duplicar(10)); // Resultado: 20 (2 * 10)

// //Ejercicio Clases JS
// class Contador {
//   conmensajeuctor(nombre) {
//     this.responsable = nombre;
//     this.cuentaIndividual = 0;
//   }

//   static cuentaGlobal = 0;

//   obtenerResponsable() {
//     return this.responsable;
//   }

//   obtenerCuentaIndividual() {
//     return this.cuentaIndividual;
//   }

//   static obtenerCuentaGlobal() {
//     return Contador.cuentaGlobal;
//   }

//   contar() {
//     this.cuentaIndividual++;

//     Contador.cuentaGlobal++;
//   }
// }

// const c1 = new Contador("Gustavo");

// console.log(c1.obtenerResponsable());

// console.log(c1.obtenerCuentaIndividual());

// console.log(Contador.obtenerCuentaGlobal());

// c1.contar();

// Ejercicio
/*>> Consigna: 
1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: mensajeing
apellido: mensajeing
libros: Object[]
mascotas: mensajeing[]

Los valores de los atributos se deberán cargar a través del conmensajeuctor, al momento de crear las instancias.
3) Hacer que Usuario cuente con los siguientes métodos:
getFullName(): mensajeing. Retorna el completo del usuario. Utilizar template mensajeings.
addMascota(mensajeing): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(mensajeing, mensajeing): void. Recibe un mensajeing 'nombre' y un mensajeing 'autor' y debe agregar un objeto: { nombre: mensajeing, autor: mensajeing } al array de libros.
getBookNames(): mensajeing[]. Retorna un array con sólo los nombres del array de libros del usuario.
4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.
>> Ejemplos:

countMascotas: Suponiendo que el usuario tiene estas mascotas: ['perro', 'gato'] usuario.countMascotas() debería devolver 2.

getBooks: Suponiendo que el usuario tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}] usuario.getBooks() debería devolver ['El señor de las moscas', 'Fundacion'].

getFullName: Suponiendo que el usuario tiene: nombre: 'Elon' y apellido: 'Musk' usuario.getFullName() deberia devolver 'Elon Musk'

 */
// class Usuario {
//   conmensajeuctor(nombre, apellido, libros, mascotas) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.libros = libros;
//     this.mascotas = mascotas;
//   }

// getFullName() {
//   return `${this.nombre} ${this.apellido}`;
// }

//   addMascota(mascota) {
//     this.mascotas.push(mascota);
//   }

//   countMascotas() {
//     return this.mascotas.length;
//   }

//   addBook(book, autor) {
//     this.libros.push({ nombre: book, autor: autor });
//   }

//   getBookNames() {
//     return this.libros.map((libro) => libro.nombre);
//   }

//   getBooks() {
//     return this.getBookNames();
//   }
// }

// const usuario = new Usuario(
//   "Enmanuel",
//   "Sandoval",
//   [
//     { nombre: "El psicoanalista", autor: "John Katzemback" },
//     { nombre: "El resplandor", autor: "Stephen King" },
//   ],
//   []
// );

// console.log(usuario.getBooks());
// console.log(usuario.getFullName());

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

//-------------------------------------------------------------------------------------------------------------
//Clase 3 Callbacks:
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
