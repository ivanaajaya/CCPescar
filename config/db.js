// Importacion del ORM
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
// Indicador de Recurso Universal (Servidor MongoDB)
const { 
    DBTYPE, 
    USERNAME, 
    PASSWORD, 
    HOSTNAME, 
    DB_PORT, 
    DATABASE, 
    APP_URI,
    WEB_URI
} = process.env;
const URI = APP_URI ?? `${DBTYPE}://${HOSTNAME}:${DB_PORT}/${DATABASE}`;
// Conexion con Servidor de Base de Datos
const dbConn = mongoose.connect(URI)
.then(() => console.log('conectado con la base de datos ' + DATABASE))
.catch(err => console.log(err));
// Exportacion de la Conexion
export default dbConn;