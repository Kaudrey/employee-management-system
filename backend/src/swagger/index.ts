import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Employee Management API',
    description: 'API for handling authentication and employee management.',
  },
  host: 'localhost:5050',
  basePath: '/api/v1',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Auth',
      description: 'Authentication endpoints',
    },
    {
      name: 'Employees',
      description: 'Employee management endpoints (Admin only)',
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  definitions: {},
};

const outputFile = './src/swagger/doc/swagger.json';
const routes = ['./src/routes/index.ts']; // points to your combined route file

swaggerAutogen()(outputFile, routes, doc).then(async () => {
  await import('../app'); // import your app entry point to auto-start after doc gen
});
