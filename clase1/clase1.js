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
