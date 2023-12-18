//definición de modelo utilizando Mongoose, un ODM (Object-Document Mapper) 
//Importa la biblioteca Mongoose para interactuar con MongoDB y definir modelos y esquemas.

import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  examen: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  links: [linkSchema],
});

const carreraSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sections: [sectionSchema],
});

// Especifica la colección "carreras_unsa" en el modelo
const CarreraUnsa = mongoose.model("CarreraUnsa", carreraSchema, "carreras_unsa");

export default CarreraUnsa;