import ExamenUcasal from "../models/examenUcasalModel.js";

import { config, notFound, resolve} from "../utils/helpers.js";

export const getExamenesUcasalByMateria = async (req, res) => {
  const carreraId = req.params.carreraId;

  try {
    // Find subjects by carreraId
    const examenesUcasal = await ExamenUcasal.find({ _id: { $in: carreraId } });

    if (examenesUcasal.length > 0) {
      res.render('layouts/examenes-ucasal', { ...config, examenesUcasal: resolve(examenesUcasal) });

    } else {
      res.render('layouts/404', {...config, err: notFound})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};