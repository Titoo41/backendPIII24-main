const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
  },
  host: 'localhost:' + process.env.PORT,
};

const outputFile = './src/utils/swagger-output.json'; // Asegúrate de que esta ruta es correcta
const routes = [
  "./src/modules/user/user.routes.js",  // Asegúrate de que estas rutas son correctas
  "./src/modules/gamer/gamer.routes.js" // Asegúrate de que estas rutas son correctas
];

swaggerAutogen(outputFile, routes, doc);
