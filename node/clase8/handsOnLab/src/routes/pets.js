import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

const pets = [
  {
    name: "Pepe",
    species: "Loro",
  },
];

router.get("/", (req, res) => {
  res.send(pets);
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No se pudo guardar la imagen");
  }

  console.log(req.file);

  const pet = {
    name: req.body.name ?? "Sin Nombre",
    species: req.body.species ?? "Sin Especie Definida",
    file: req.file.path,
  };

  pets.push(pet);

  res.status(201).send("Mascota creada correctamente!");
});

export default router;
