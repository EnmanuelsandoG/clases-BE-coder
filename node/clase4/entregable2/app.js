"use strict";

/* Consigna

Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).

Aspectos a incluir
La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

Aspectos a incluir

Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto

Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.

Formato del entregable
Archivo de javascript con el nombre ProductManager.js

*/

const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path ?? "./products.json";
    this.products = [];
  }

  static id = 0;

  async checkProducts() {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } //else {
    //   const fileContent = await fs.promises.readFile(this.path, "utf-8");
    //   this.products = JSON.parse(fileContent);
    // }
  }

  async getProducts() {
    await this.checkProducts();
    return this.products;
  }

  async addProduct({ title, description, price, thumbnail, code, stock }) {
    await this.checkProducts();

    const product = {
      id: ProductManager.id++,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("All fields must be filled!⚠️");
      return; // Se agrega un return para salir de la función si faltan campos.
    }

    const productExists = this.products.some((p) => p.code === product.code);
    if (productExists) {
      console.error(`This product code ${product.code} already exists!🙁`);
      return; // Se agrega un return para salir de la función si el código de producto ya existe.
    }

    this.products.push(product); // Se agrega el nuevo producto al array products.

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, "\t")
    );

    return this.products;
  }

  getProductById(productID) {
    return this.products.find((product) => product.id == productID) ?? {};
  }
}

const productManager1 = new ProductManager("./products.json");

productManager1.addProduct({
  title: "Baseball",
  description: "Little baseball used for the sport",
  price: 3000,
  thumbnail: "not found",
  code: 4567872,
  stock: 50,
});

productManager1.getProducts();
