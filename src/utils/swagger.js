const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
    version: '1.0.0'
  },
  host: `localhost:${process.env.PORT || 3000}`,
  schemes: ['http'],
};

const outputFile = '../../swagger-output.json'; // Ruta ajustada según tu estructura de archivos
const endpointsFiles = [
  './src/modules/user/user.routes.js',
  './src/modules/gamer/gamer.routes.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    console.log('Swagger documentation generated successfully');
  })
  .catch(err => {
    console.error('Error generating Swagger documentation', err);
  });
