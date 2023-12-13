//este módulo establece la ruta para obtener todas las carreras y 
//utiliza el controlador Carrera.getCarreras para manejar la solicitud específica

import { Router } from "express";
import * as Carrera from "../controllers/carrerasController.js";

const carreraRouter = Router();

// http://127.0.0.1:3000/carreras/
// Ruta para obtener todas las carreras
carreraRouter.get('/', Carrera.getCarreras); // READ

export default carreraRouter;
