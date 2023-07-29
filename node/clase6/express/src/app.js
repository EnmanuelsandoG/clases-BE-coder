const express = require("express");

const app = express();

//Ruta, route o endpoint
app.get("/saludo", (req, res) => {
  res.send("Hola a todos los coders! desde express");
});

const usuarios = [
  { id: "1", nombre: "Mauricio", apellido: "Espinoza", edad: "25" },
  { id: "2", nombre: "Enmanuel", apellido: "Sandoval", edad: "28" },
  { id: "3", nombre: "Jose", apellido: "Martinez", edad: "19" },
];

app.get("/", (req, res) => {
  res.send(usuarios);
});

app.get("/:idUsuario", (req, res) => {
  const idUsuario = req.params.idUsuario;

  let usuario = usuarios.find((u) => u.id === idUsuario);

  if (!usuario) {
    return res.send({
      error: "usuario no encontrado",
    });
  }
  res.send({ usuario });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});
