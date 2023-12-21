//definición de modelo utilizando Mongoose, un ODM (Object-Document Mapper) 
//Importa la biblioteca Mongoose para interactuar con MongoDB y definir modelos y esquemas.

// import mongoose from "mongoose";

// const linkSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//   },
//   href: {
//     type: String,
//     required: true,
//   },
// });

// const sectionSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   links: [linkSchema],
// });

// const carreraSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   sections: [sectionSchema],
// });

// const CarreraUcasal = mongoose.model("CarreraUcasal", carreraSchema, "carreras_ucasal");

// export default CarreraUcasal;
import mongoose from 'mongoose';

const linksSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  examen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExamenUcasal', // Update the model name accordingly
    required: true,
  },
});

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  links: [linksSchema],
});

const carreraSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sections: [sectionSchema],
});

const CarreraUcasal = mongoose.model('CarreraUcasal', carreraSchema, 'carreras_ucasal'); // Update the model name accordingly

export default CarreraUcasal;
