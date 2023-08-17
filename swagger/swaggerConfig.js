const {
  productDtoSchema,
  routeAnnotations,
} = require('./schema/product.schema');

const apiDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Sakar Arayl Iphone gift handeu',
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
    '/api/products/published': {
      get: routeAnnotations.getPublishedProducts,
    },
    '/api/products/{id}': {
      get: routeAnnotations.getSingleProducts,
      put: routeAnnotations.updateProducts,
      delete: routeAnnotations.deleteProducts,
    },
  },
  components: {
    schemas: productDtoSchema,
  },
};

module.exports = apiDocumentation;
