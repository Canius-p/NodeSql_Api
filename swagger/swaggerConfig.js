const {
  productDtoSchema,
  routeAnnotations,
} = require('./schema/product.schema');

const apiDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Swagger Tutorial By Sakar',
    version: '15',
    description: 'This is practise Swagger UI',
    summary: '',
    termsOfService: '',
    contact: {
      name: 'Sakar Aryal',
      url: 'https://techiesakar.com',
      email: 'techiesakar@gmail.com',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  paths: {
    '/api/products/allproducts': {
      get: routeAnnotations.getProduct,
    },
    '/api/products/addProduct': {
      post: routeAnnotations.addProduct,
    },
    // Add other paths here...
  },
  components: {
    schemas: productDtoSchema,
  },
};

module.exports = apiDocumentation;
