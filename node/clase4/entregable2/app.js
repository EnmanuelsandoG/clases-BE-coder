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
    this.id = 0;
    this.products = [];
  }

  async checkProducts() {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    } else {
      const fileContent = await fs.promises.readFile(this.path, "utf-8");
      this.products = JSON.parse(fileContent);
      if (this.products.length > 0) {
        this.id = this.products[this.products.length - 1].id + 1;
      }
    }
  }

  async getProducts() {
    await this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    return productsInfo;
  }

  async addProduct({ title, description, price, thumbnail, code, stock }) {
    await this.checkProducts();

    const product = {
      id: this.id++,
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

  async getProductById(productID) {
    await this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    const product = productsInfo.find((product) => product.id === productID);
    return product ? product : {};
  }

  async updateProduct(productID, fieldUpdate) {
    this.checkProducts();
    const productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    let fieldValue = productsInfo.find((product) => product.id === productID);
    fieldValue.title = fieldUpdate.title ? fieldUpdate.title : fieldValue.title;
    fieldValue.description = fieldUpdate.description
      ? fieldUpdate.description
      : fieldValue.description;
    fieldValue.price = fieldUpdate.price ? fieldUpdate.price : fieldValue.price;
    fieldValue.thumbnail = fieldUpdate.thumbnail
      ? fieldUpdate.thumbnail
      : fieldValue.thumbnail;
    fieldValue.code = fieldUpdate.code ? fieldUpdate.code : fieldValue.code;
    fieldValue.stock = fieldUpdate.stock ? fieldUpdate.stock : fieldValue.stock;
    await fs.promises.writeFile(this.path, JSON.stringify(productsInfo));
  }

  async deleteProduct(productID) {
    this.checkProducts();
    let productsInfo = JSON.parse(
      await fs.promises.readFile(this.path, "utf-8")
    );
    productsInfo = productsInfo.filter((product) => product.id !== productID);
    // if (productsInfo) {
    await fs.promises.writeFile(this.path, JSON.stringify(productsInfo));
    // } else {
    //   return;
    // }
  }
}

//Creacion de la instancia
// const productManager1 = new ProductManager("./products.json");

//Pruebo que funcione el metodo Add.Product

// productManager1.addProduct({
//   title: "baseball cap",
//   description: "baseball cap used for the sport",
//   price: 12000,
//   thumbnail: "not found",
//   code: 6754992,
//   stock: 20,
// });

//Pruebo que funcione el metodo get products

// productManager1.getProducts();

//Pruebo que funcione el metodo getProductById

// productManager1.getProductById(2);

//pruebo que funcione el metodo Updateproduct

// const productIDToUpdate = 0;
// const fieldUpdate = {
//   title: "Nuevo Update de producto",
//   description: "una descripcion breve",
//   price: 90000,
//   code: 1234567,
//   stock: 40,
// };

// productManager1
//   .updateProduct(productIDToUpdate, fieldUpdate)
//   .then(() => {
//     console.log("Producto Actualizado Correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al actualizar el producto:", error.message);
//   });

//pruebo que funcione el metodo deleteProduct

// productManager1
//   .deleteProduct(1)
//   .then(() => {
//     console.log("Producto Eliminado Correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al eliminar el producto:", error.message);
//   });

//Nueva ejecucion en cadena de la instancia
const prodMngr = new ProductManager("./products.json");

//Products
const productsExample = [
  {
    title: "Fender Stratocaster",
    description: "Guitarra electrica marca Fender",
    price: 800000,
    thumbnail: "Whatever",
    code: 3456789,
    stock: 10,
  },
  {
    title: "Gibson Les paul",
    description: "Guitarra electrica marca gibson",
    price: 1200000,
    thumbnail: "Whatever",
    code: 1234567,
    stock: 5,
  },
  {
    title: "Fender telecaster",
    description: "Guitarra electrica marca Fender",
    price: 780000,
    thumbnail: "Whatever",
    code: 7654321,
    stock: 2,
  },
];

//Ejecucion del codigo
const app = async function () {
  try {
    // await prodMngr.addProduct(productsExample[1]);
    // const prodsInfo = await prodMngr.getProducts();
    // console.log(prodsInfo);
    // const prodInfo = await prodMngr.getProductById(1);
    // console.log(prodInfo);
    // await prodMngr.updateProduct(3, { title: "Fender new Stratocaster" });
    // await prodMngr.deleteProduct(2);

    console.log("Ejecucion de APP satisfactoria!");
  } catch (error) {
    console.log(error);
  }
};

app();
