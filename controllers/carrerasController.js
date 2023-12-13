
// import Carrera from "../models/carrerasModel.js";

// export const getCarreras = async (req, res) => {
//   try {
//     // Asegúrate de especificar la colección correcta (carreras_unsa)
//     const carreras = await Carrera.find({}, null, { collection: 'carreras_unsa' });

//     if (carreras.length > 0) {
//       res.json({ carreras });
//     } else {
//       res.status(404).json({
//         message: "No se encontraron carreras",
//         error: "Lamentablemente no se encontraron carreras en la base de datos",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


//para manejar la obtención de carreras y renderizar diferentes vistas según los resultados de la consulta.

import Carrera from "../models/carrerasModel.js";
import { config, notFound, resolve, getQuery } from "../utils/helpers.js";

export const getCarreras = (req, res) => {
    const query = getQuery(req);
    Carrera.find(query)
        .then((carreras) => 
            carreras.length > 1 ? 
            res.render('layouts/carreras', {...config, carreras: resolve(carreras)}) : 
            carreras.length > 0 ?
            res.render('layouts/carrera', {...config, carreras: resolve(carreras[0])}) :
            res.render('layouts/404', {...config, err: notFound})
        )
        .catch((err) => res.render('layouts/404', err));
};

