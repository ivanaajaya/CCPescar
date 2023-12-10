import mongoose from "mongoose";

const carreraSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sections: [
    {
      title: {
        type: String,
        required: true,
      },
      links: [
        {
          text: {
            type: String,
            required: true,
          },
          href: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

// Especifica la colección "carreras_unsa" en el modelo
const Carrera = mongoose.model("Carrera", carreraSchema, "carreras_unsa");

export default Carrera;
