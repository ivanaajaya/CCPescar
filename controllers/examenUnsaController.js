import ExamenUnsa from "../models/examenUnsaModel.js";
import { config, notFound, resolve, getQuery} from "../utils/helpers.js";

export const getExamenesUnsaall = (req, res) => {
  const query = getQuery(req);

  ExamenUnsa.find(query)
    .then((examenesUnsa) => 
        examenesUnsa.length > 1 ?
        res.render('layouts/examenes-unsa', {...config, examenesUnsa: resolve(examenesUnsa)}) :
        res.render('layouts/404', {...config, err: notFound})
    )
    .catch((err) => res.render('layouts/404', {...config, err: err}));
};


// export const getExamenesUnsa = async (req, res) => {
//     const { materiaId } = req.query;

//     // Verifica si se proporcionó la información necesaria
//     if (!materiaId) {
//         console.log("Se requiere el ID de la materia");
//         return res.render('layouts/404', { ...config, err: "Se requiere el ID de la materia" });
        
//     }

//     try {
//         console.log("sssssssssssssssssss", { materiaId })
//         // Lógica para consultar exámenes de la materia seleccionada por su ID
//         // Utiliza el campo de referencia a la materia en tu modelo de examen
//         const examenes = await ExamenUnsa.find({ "_id": materiaId });

//         if (examenes.length > 0) {
//             console.log("passoooooooooooooooo", { materiaId })
//             // Si hay exámenes para la materia seleccionada, renderiza la vista correspondiente
//             res.render('layouts/examenes-unsa', { ...config, examenes: resolve(examenes) });
//         } else {
//             // Si no hay exámenes, muestra un mensaje de not found
//             res.render('layouts/404', { ...config, err: "No se encontraron exámenes para la materia seleccionada" });
//         }
//     } catch (error) {
//         // Si hay un error durante la consulta, muestra un mensaje de error
//         res.render('layouts/404', { ...config, err: error.message });
//     }
// };
