"use strict";

import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const pm = new ProductManager("./products.json");

app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});
