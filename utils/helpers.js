//Este módulo exporta varias constantes y funciones útiles 
//para manejar configuraciones, 
//respuestas de error 
//y operaciones en la aplicación


/**
* Configuración de la Aplicación:
* Utiliza valores de entorno si están disponibles, de lo contrario, utiliza valores predeterminados.
*/
export const config = {
    Appname: process.env.APP_NAME ?? "Aplicacion",
    description: process.env.APP_DESCRIPTION ?? "Aplicacion desarrollada con NodeJS",
    author: process.env.APP_AUTHOR ?? "compartiendo conocimientos",
}

/**
 * Respuesta de Error por No Encontrado:
 */
export const notFound = {
    error: true,
    code: 404,
    message: "No se encontraron resultados"
}

/**
 * Función de Resolución de Datos:
 */
export const resolve = (data) => JSON.parse(JSON.stringify(data))

/**
 * Función para Obtener Consultas:
 * Genera un objeto de consulta
 * Puede tomar valores de cuerpo y parámetros de ruta para construir la consulta
 */
export const getQuery = ({ body, params: { postId, val } }) => {
    if (body.length > 0 && val) {
        return { ...body, [postId]: val };
    } else if (Number(postId)) {
        return { postId };
    } else if (postId && val) {
        return { [postId]: val };
    } else if (body.length > 0) {
        return { ...body };
    } else {
        return {};
    }
};

// export const getQuery = ({body, params:{ postId, val }}) => 
//     body.length > 0  && val ? {...body, [postId]: val } :
//     Number(postId) ? { postId } :
//     postId && val ? { [postId]: val } :
//     body.length > 0 ? {...body} : {}
