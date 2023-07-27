const UserManager = require("./UserManager");

const UM = new UserManager("./Usuarios.json");

const newUser = {
  Name: "Enmanuel",
  LastName: "Sandoval",
  User: "Sando ",
  Password: "CoderHouse4678",
};

// UM.CreateUser(newUser).then((response) => {
//   console.log(response);
// });

UM.UserValidator({
  User: "Sando",
  Password: "CoderHouse4678",
}).then((result) => {
  console.log(result);
});
