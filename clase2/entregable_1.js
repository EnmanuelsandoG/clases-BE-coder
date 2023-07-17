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

const products = [];

class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    // this.products = products;
  }

  static id = 0;

  static getProducts() {
    return products;
  }

  addProduct() {
    if (
      !this.title ||
      !this.description ||
      !this.price ||
      !this.thumbnail ||
      !this.code ||
      !this.stock
    ) {
      console.error("All fields must be filled!⚠️");
    } else {
      products.map((product) => {
        if (product.code === this.code) {
          console.error("this product code already exists!🙁");
        }
        let id = ProductManager.id++;
        products.push({ id: id, ...product });
      });
      return products;
    }
  }

  getProductById = (productID) =>
    products.find((product) => product.id == productID) ?? {};
}

const productManager1 = new ProductManager(
  "Baseball bat",
  "Wooden Bat",
  45000,
  "not found",
  6749783,
  25
);

const productManager2 = new ProductManager(
  "Baseball",
  "Little baseball used for the sport",
  3000,
  "not found",
  4567872,
  50
);
const productManager3 = new ProductManager(
  "Football",
  "ball used for the sport",
  12000,
  "not found",
  7345019,
  13
);

const productManager4 = new ProductManager(
  "Football Copy",
  "ball used for the sport",
  12000,
  "not found",
  7345019,
  13
);

productManager1.addProduct();
productManager2.addProduct();
productManager3.addProduct();
productManager4.addProduct();
console.log(ProductManager.getProducts());
console.log(productManager1.getProductById(2));

// products.map(({ code, title }) => {
//   console.log(`this is the code: ${code} of ${title}`);
// });

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

// const randomNum = function () {
//   return Math.floor(Math.random() * 100);
// };

// const randomId = () => {
//   let genericId = randomNum();
//   return genericId;
// };
