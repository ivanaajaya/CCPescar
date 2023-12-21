import { Router } from "express";
import * as ExamenUcasal from "../controllers/examenUcasalController.js";

const examenUcasalRouter = Router();
// // Ruta para obtener exámenes por carrera
examenUcasalRouter.get("/carrera/:carreraId", ExamenUcasal.getExamenesUcasalByMateria);

export default examenUcasalRouter;
