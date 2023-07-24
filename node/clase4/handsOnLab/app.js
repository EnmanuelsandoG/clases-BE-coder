const ManagerUsuarios = require("./managerUsuarios");

const MU = new ManagerUsuarios("./usuarios.json");

MU.CrearUsuario({
  Nombre: "Enmanuel",
  Apellido: "Sandoval",
  Edad: 29,
  Curso: "Backend",
}).then(() => {
  MU.ConsultarUsuarios().then((todos) => {
    console.log(todos);
  });
});
