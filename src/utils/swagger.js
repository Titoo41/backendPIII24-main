const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
  },
  host: 'localhost:' + process.env.PORT,
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; 
const endpointsFiles = [
  './src/modules/user/user.routes.js',
  './src/modules/gamer/gamer.routes.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);
