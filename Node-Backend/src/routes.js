const { Router } = require('express'); // Importa apenas o método de rotas do Express

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); //Rota de acesso do usuário

routes.get('/search', SearchController.index);//Rota de listagem


module.exports = routes; // Exportar as rotas para outros arquivos