export const config = {
    Appname: process.env.APP_NAME ?? "Aplicacion",
    description: process.env.APP_DESCRIPTION ?? "Aplicacion desarrollada con NodeJS",
    author: process.env.APP_AUTHOR ?? "compartiendo conocimientos",
}
export const notFound = {
    error: true,
    code: 404,
    message: "No se encontraron resultados"
}

export const resolve = (data) => JSON.parse(JSON.stringify(data))

export const getQuery = ({body, params:{ postId, val }}) => 
    body.length > 0  && val ? {...body, [postId]: val } :
    Number(postId) ? { postId } :
    postId && val ? { [postId]: val } :
    body.length > 0 ? {...body} : {}