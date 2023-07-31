"use strict";

/* Consigna:
Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

Aspectos a incluir

-Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 
-Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
-El servidor debe contar con los siguientes endpoints:
-ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto. Agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.
-Si no se recibe query de límite, se devolverán todos los productos
-Si se recibe un límite, sólo devolver el número de productos solicitados
-ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos. 

Sugerencias
-Tu clase lee archivos con promesas. recuerda usar async/await en tus endpoints
-Utiliza un archivo que ya tenga productos, pues el desafío sólo es para gets. 

*/

//CommonJs
// const express = require("express");
// const ProductManager = require("ProductManager");

//module
import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const pm = new ProductManager("./products.json");

app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  try {
    let limit = req.query.limit;
    const products = await pm.getProducts();
    if (!limit || limit > products.length) {
      res.send(products);
    } else {
      const limitedProducts = products.slice(0, limit);
      res.send(limitedProducts);
    }
  } catch (error) {
    res.status(500).send("Internar server error");
  }
});

//Modificar error de que no permite que ID sea 0. lo toma como falsy
app.get("/products/:pid", async (req, res) => {
  try {
    let pid = parseInt(req.params.pid);
    const productById = await pm.getProductById(pid);
    if (productById.id || productById.id == 0) {
      res.send(productById);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Internar server error");
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});
