"use strict";

/* CONSIGNA: Realizar una clase “ProductManager” que gestione un conjunto de productos. Aspectos a incluir:
-Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío. 
-Cada producto que gestione debe contar con las propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)
-Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable
-Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
-Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”*/

const randomNum = function () {
  return Math.floor(Math.random() * 100);
};

const randomId = () => {
  let genericId = randomNum();
  return genericId;
};

const products = [];

class ProductManager {
  constructor(title, description, price, thumbnail, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = randomId();
    this.stock = stock;
  }

  static getProducts() {
    return products;
  }

  addProduct() {
    return products.push(this);

    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].code.includes(this.code)) {
    //     throw new Error("Product already exists!❌");
    //   } else {
    //     return products.push(this);
    //   }
    // }
  }
}

const productManager1 = new ProductManager(
  "pelicula",
  "blabla",
  20000,
  "no tiene",
  5
);

const productManager2 = new ProductManager(
  "pelota",
  "blabla",
  25000,
  "not found",
  2
);
const productManager3 = new ProductManager(
  "sombrilla",
  "blabla",
  10000,
  "hello",
  10
);

productManager1.addProduct();
productManager2.addProduct();
productManager3.addProduct();
console.log(products);

// console.log(products);

// let array = [
//   {
//     name: "james",
//     id: 1,
//   },
//   {
//     name: "albert",
//     id: 2,
//   },
// ];

// const runningArray = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i].id);
//   }
// };

// console.log(runningArray(array));
