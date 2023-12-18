// // Importa la biblioteca Mongoose para interactuar con MongoDB y definir modelos y esquemas.
// import mongoose from "mongoose";

// const examenUnsaSchema = new mongoose.Schema({
//   tipo: {
//     type: String,
//     required: true,
//   },
//   titulo: {
//     type: String,
//     required: true,
//   },
//   profesor: {
//     type: String,
//     required: true,
//   },
//   descripcion: {
//     type: String,
//     required: true,
//   },
//   enlace: {
//     type: String,
//     required: true,
//   },
// });

// // Especifica la colección "examenes_unsa" en el modelo
// const ExamenUnsa = mongoose.model("ExamenUnsa", examenUnsaSchema, "examenes-unsa");

// export default ExamenUnsa;

import mongoose from "mongoose";

const examenUnsaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  // Agrega esta línea para definir el campo _id
  tipo: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  profesor: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  enlace: {
    type: String,
    required: true,
  },
});

const ExamenUnsa = mongoose.model("ExamenUnsa", examenUnsaSchema, "examenes-unsa");

export default ExamenUnsa;
