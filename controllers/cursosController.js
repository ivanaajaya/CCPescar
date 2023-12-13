//manejar la obtención de cursos y renderizar diferentes vistas según los resultados de la consulta

import Curso from "../models/cursoModel.js";
import { config, notFound, resolve, getQuery } from "../utils/helpers.js";

export const getCursos = (req, res) => {
    const query = getQuery(req);
    Curso.find(query)
        .then((cursos) => 
            cursos.length > 1 ? 
            res.render('layouts/cursos', {...config, cursos: resolve(cursos)}) : 
            cursos.length > 0 ?
            res.render('layouts/curso', {...config, cursos: resolve(cursos[0])}) :
            res.render('layouts/404', {...config, err: notFound})
        )
        .catch((err) => res.render('layouts/404', err));
};
