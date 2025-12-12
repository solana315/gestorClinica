require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors'); 
const route = require("./src/routes/route");
const registerRoute = require("./src/routes/route");



const sequelize = require('./src/models/database');  
const { initModels } = require("./src/models/init-models");  

app.set('port', process.env.PORT || 3001);

app.use(express.json());
app.use(cors({
  origin: '*',
}));

initModels(sequelize);

// Testa a conexão com a base de dados
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com a base de dados estabelecida com sucesso!');
  } catch (error) {
    console.error(' Erro ao conectar à base de dados:', error);
    process.exit(1);
  }
};

// Inicia o servidor
connectDB().then(() => {
  app.listen(app.get('port'), () => {
    console.log(` Servidor a correr na porta ${app.get('port')}`);
  });
});

//Login
app.use("/auth", route);
// Register
app.use("/auth", registerRoute);
