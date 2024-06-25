const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'PIII- test',
    description: 'Aplicacion inicial de backend',
  },
  host: `localhost:${process.env.PORT || 3000}`,
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; 
const endpointsFiles = [
  './src/modules/user/user.routes.js',
  './src/modules/gamer/gamer.routes.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    require('./swagger-output.json'); // Este paso es opcional, solo para verificar la salida
    console.log('Swagger documentation generated successfully');
  })
  .catch(err => {
    console.error('Error generating Swagger documentation', err);
  });
