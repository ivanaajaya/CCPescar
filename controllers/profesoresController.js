// import Profesor from "../models/profesoresModel.js";

// export const getProfesores = async (req, res) => {
//   try {
//     const profesores = await Profesor.find();

//     if (profesores.length > 0) {
//       res.json({ profesores });
//     } else {
//       res.status(404).json({
//         message: "No se encontraron profesores",
//         error: "Lamentablemente no se encontraron profesores en la base de datos",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


//manejando la obtención de profesores y renderizando diferentes vistas según los resultados de la consulta.

import Profesor from "../models/profesoresModel.js";
import { config, notFound, resolve, getQuery } from "../utils/helpers.js";

export const getProfesores = (req, res) => {
    const query = getQuery(req);
    Profesor.find(query)
        .then((profesores) => 
            profesores.length > 1 ? 
            res.render('layouts/profesores', {...config, profesores: resolve(profesores)}) : 
            profesores.length > 0 ?
            res.render('layouts/profesor', {...config, profesores: resolve(profesores[0])}) :
            res.render('layouts/404', {...config, err: notFound})
        )
        .catch((err) => res.render('layouts/404', err));
};
