const productDtoSchema = {
  ProductDto: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: 'Product Title',
      },
      price: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      published: {
        type: 'boolean',
        description: 'Product Status',
      },
    },
  },
};

const routeTags = {
  ProductRoutes: {
    name: 'Product',
    description: 'This is for API product',
  },
};

const routeAnnotations = {
  // To get all Product
  getProduct: {
    tags: [routeTags.ProductRoutes.name],
    summary: 'Get all product',
    description: 'Returns all product',
    responses: {
      200: { description: 'successful operation' },
    },
  },

  //   To add new product
  addProduct: {
    tags: [routeTags.ProductRoutes.name],
    summary: 'Add a new product',
    description: 'Add a new product',
    requestBody: {
      description: 'Update an existent pet in the store',
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProductDto',
          },
        },
      },
    },
    responseBody: {
      description: 'Successfull operation',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProductDto',
          },
        },
      },
    },
    responses: {
      200: { description: 'successful operation' },
      405: { description: 'Invalid Input' },
    },
  },
};

module.exports = {
  productDtoSchema,
  routeTags,
  routeAnnotations,
};
