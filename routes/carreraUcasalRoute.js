import { Router } from "express";
import * as CarreraUcasal from "../controllers/carreraUcasalController.js";

const carreraUcasalRouter = Router();

// http://127.0.0.1:3000/carreras-ucasal/
// Ruta para obtener todas las carreras de la Universidad Católica de Salta
carreraUcasalRouter.get('/', CarreraUcasal.getCarrerasUcasal); // READ

export default carreraUcasalRouter;
