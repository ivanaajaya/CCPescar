//este módulo establece la ruta para obtener todas las carreras y 
//utiliza el controlador Carrera.getCarreras para manejar la solicitud específica

import { Router } from "express";
import * as CarreraUnsa from "../controllers/carreraUnsaController.js";

const carreraUnsaRouter = Router();

// http://127.0.0.1:3000/carreras-unsa/
// Ruta para obtener todas las carreras
carreraUnsaRouter.get('/', CarreraUnsa.getCarrerasUnsa); // READ

export default carreraUnsaRouter;
