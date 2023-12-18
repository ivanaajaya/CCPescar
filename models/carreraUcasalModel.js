//definición de modelo utilizando Mongoose, un ODM (Object-Document Mapper) 
//Importa la biblioteca Mongoose para interactuar con MongoDB y definir modelos y esquemas.

import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
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

const CarreraUcasal = mongoose.model("CarreraUcasal", carreraSchema, "carreras_ucasal");

export default CarreraUcasal;
