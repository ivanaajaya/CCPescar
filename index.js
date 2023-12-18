/**se configuran y se utilizan módulos y configuraciones para iniciar el servidor. */

/** IMPORTACIONES */
// Production (Permanece en el proyecto)
import express from 'express'
import { engine } from 'express-handlebars';
// Development (Solo para desarrollo)
import morgan from 'morgan';
// Database Connection
import dbConn from './config/db.js';
// Application Routers
import carreraUcasalRouter from './routes/carreraUcasalRoute.js';
import carreraUnsaRoutes from "./routes/carreraUnsaRoute.js";
import profesorRouter from './routes/profesoresRoute.js';
import authRouter from './routes/authRoute.js';
import cursoRouter from './routes/cursosRoute.js';
import examenUnsaRouter from './routes/examenUnsaRouter.js';
/** DECLARACIONES */
// Servidor BackEnd
const app = express();
const PORT = process.env.PORT || 3000;
const startMsg = `Aplicacion ejecutandose en el puerto ${PORT}`

//Configuración del Motor de Plantillas Handlebars:
app.engine("hbs", engine({
    defaultLayout: process.cwd()+"/views/index",
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set('views', './views');

/** IMPLEMENTACION */
app.use(morgan('dev'));
// Request Body Parser (Middleware)
app.use(express.urlencoded({extended: true}));

// Rutas de la API
app.use("/", authRouter);
app.use("/carreras-unsa", carreraUnsaRoutes );
app.use("/carreras-ucasal", carreraUcasalRouter);
app.use("/examenes-unsa", examenUnsaRouter);
app.use("/profesores", profesorRouter );
app.use("/cursos", cursoRouter);
// Rutas Estaticas para el Frontend
app.use("/", express.static("public"));

/** Ejecución del Servidor */
app.listen(PORT, console.log(startMsg))