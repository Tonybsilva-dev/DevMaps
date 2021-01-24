const express = require('express'); //Importando a biblioteca express
const mongoose = require('mongoose') //Importando o Mongoose
const cors = require('cors');
const http = require('http');
const routes = require('../src/routes') //Importando as rotas
const { setupWebSocket } = require('./websocket'); // Importa apenas a função

const app = express(); //Inicia a aplicação
const server = http.Server(app); // Servidor Http fora do express

setupWebSocket(server); // instanciando a função e iniciando o servidor

//Conecta ao servidor DB na nuvem
mongoose.connect('mongodb+srv://<username>:<password>@devmaps-17arf.mongodb.net/devmaps?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); //Agora a aplicação entende requisições JSON
app.use(routes); // Agora as rotas estão cadastradas novamente

server.listen(3333); //Diz a porta de acesso