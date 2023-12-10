import { config } from '../utils/helpers.js'

// Controladores Metodos GET
export const Home = async(req, res) => {
    res.render('home', config)
}