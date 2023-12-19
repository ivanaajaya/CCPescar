import CarreraUcasal from "../models/carreraUcasalModel.js";
import { config, notFound, resolve, getQuery } from "../utils/helpers.js";

export const getCarrerasUcasal = (req, res) => {
    const query = getQuery(req);

    CarreraUcasal.find(query)
        .then((carrerasUcasal) => 
            carrerasUcasal.length > 1 ?
                res.render('layouts/carreras-ucasal', {...config, carrerasUcasal: resolve(carrerasUcasal)}) :
                res.render('layouts/404', {...config, err: notFound})
        )
        .catch((err) => res.render('layouts/404', {...config, err: err}));
};
