"use strict";

import { Router } from "express";
import ProductManager from "../ProductManager.js";

const router = Router();
const pm = new ProductManager("../products.json");

router.get("/", async (req, res) => {
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

app.get("/:pid", async (req, res) => {
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

export default router;
