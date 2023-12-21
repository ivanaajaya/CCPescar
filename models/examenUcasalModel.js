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

const ExamenUcasal = mongoose.model("ExamenUcasal", subjectSchema, "examenes-ucasal");

export default ExamenUcasal;
