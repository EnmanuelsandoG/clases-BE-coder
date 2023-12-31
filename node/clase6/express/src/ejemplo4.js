"use strict";

import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

const usuarios = [
  { id: "1", nombre: "Dalia", apellido: "Gomez", genero: "F" },
  { id: "2", nombre: "Mayra", apellido: "Flores", genero: "F" },
  { id: "3", nombre: "Armando", apellido: "Mendoza", genero: "M" },
  { id: "4", nombre: "Jimena", apellido: "Gomez", genero: "F" },
  { id: "5", nombre: "Herminio", apellido: "Fuentes", genero: "M" },
  { id: "6", nombre: "Juan", apellido: "Carballo", genero: "M" },
];

app.get("/", (req, res) => {
  const genero = req.query.genero;

  if (!genero || (genero !== "M" && genero !== "F")) {
    return res.send({ usuarios });
  }

  const usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.genero === genero
  );

  res.send({ usuariosFiltrados });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});
