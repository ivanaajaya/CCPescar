import mongoose from "mongoose";

const profesorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  asignatura: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  contacto: {
    nombre: {
      type: String,
      required: true,
    },
    asignatura: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
  },
  foto: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
});

// Especifica la colección "profesores" en el modelo
const Profesor = mongoose.model("Profesor", profesorSchema, "profesores");

export default Profesor;
