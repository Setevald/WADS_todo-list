const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'API for managing todo items',
      contact: {
        name: 'API Support',
        email: 'support@todoapi.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ]
  },
  apis: ['./server/routes/*.js'] // Path to the API docs
};

const specs = swaggerJsDoc(options);

module.exports = specs;