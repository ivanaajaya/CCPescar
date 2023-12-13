//definición de modelo utilizando Mongoose, un ODM (Object-Document Mapper) 
//Importa la biblioteca Mongoose para interactuar con MongoDB y definir modelos y esquemas.

import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Curso = mongoose.model('Curso', cursoSchema, "cursos");

export default Curso;
