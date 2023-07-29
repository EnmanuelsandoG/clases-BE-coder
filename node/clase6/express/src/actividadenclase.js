const express = require("express");

const app = express();

app.get("/bienvenida", (req, res) => {
  const htmlString =
    '<div style= "color: blue;"> Hola bienvenidos a esta pagina!</div>';
  res.send(htmlString);
});

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Enmanuel",
    apellido: "Sandoval",
    edad: "28",
    correo: "enmanuelsando@gmail.com",
  };
  res.send(usuario);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor arriba en el puerto ${PORT}`);
});
