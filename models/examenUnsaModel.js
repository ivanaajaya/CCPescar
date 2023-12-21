


// import mongoose from "mongoose";

// const linkSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//   },
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

// const ExamenUnsa = mongoose.model("ExamenUnsa", linkSchema, "examenes-unsa");

// export default ExamenUnsa;

import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  exams: [{
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
  }],
});

const ExamenUnsa = mongoose.model("ExamenUnsa", subjectSchema, "examenes-unsa");

export default ExamenUnsa;
