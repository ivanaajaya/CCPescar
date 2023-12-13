import { config } from '../utils/helpers.js'

//Renderización de la Vista 'home'
export const Home = async(req, res) => {
    res.render('home', config)
}