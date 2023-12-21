import ExamenUnsa from "../models/examenUnsaModel.js";
import CarreraUnsa from "../models/carreraUnsaModel.js"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { config, notFound, resolve, getQuery} from "../utils/helpers.js";

// export const getExamenesUnsaall = (req, res) => {
//   const query = getQuery(req);

//   ExamenUnsa.find(query)
//     .then((examenesUnsa) => 
//         examenesUnsa.length > 1 ?
//         res.render('layouts/examenes-unsa', {...config, examenesUnsa: resolve(examenesUnsa)}) :
//         res.render('layouts/404', {...config, err: notFound})
//     )
//     .catch((err) => res.render('layouts/404', {...config, err: err}));
// };

// export const getExamenesUnsaByCarrera = async (req, res) => {
//   const carreraId = req.params.carreraId;

//   try {
//     // Recorre los enlaces de la carrera y busca los exámenes correspondientes
//     const examenesUnsa = await ExamenUnsa.find({ _id: { $in: carreraId } });

//     if (examenesUnsa.length > 0) {
//       res.render('layouts/examenes-unsa', {...config, examenesUnsa: resolve(examenesUnsa)}) 
//       // res.json({ examenesUnsa });
//     } else {
//       // res.status(404).json({
//       //   message: "No se encontraron exámenes",
//       //   error: "Lamentablemente no se encontraron exámenes en la base de datos",
//       // });
//       res.render('layouts/404', {...config, err: notFound})
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getExamenesUnsaByCarrera = async (req, res) => {
  const carreraId = req.params.carreraId;

  try {
    // Find subjects by carreraId
    const examenesUnsa = await ExamenUnsa.find({ _id: { $in: carreraId } });

    if (examenesUnsa.length > 0) {
      res.render('layouts/examenes-unsa', { ...config, examenesUnsa: resolve(examenesUnsa) });
      //res.json({ examenesUnsa });
    } else {
      // res.status(404).json({
      //   message: "No se encontraron exámenes",
      //   error: "Lamentablemente no se encontraron exámenes en la base de datos",
      // });
      res.render('layouts/404', {...config, err: notFound})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
