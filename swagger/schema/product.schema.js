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
    id: 'Id',
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

  // To get Published Product
  getPublishedProducts: {
    tags: [routeTags.ProductRoutes.name],
    summary: 'Get publishd product',
    description: 'Returns published product',
    responses: {
      200: { description: 'successful operation' },
    },
  },
  // To get single Product
  getSingleProducts: {
    tags: [routeTags.ProductRoutes.id],
    summary: 'Get single product',
    description: 'Returns single product',
    responses: {
      200: { description: 'successful operation' },
    },
  },

  // To update Product
  updateProducts: {
    tags: [routeTags.ProductRoutes.id],
    summary: 'Get update product',
    description: 'Returns updated product',
    responses: {
      200: { description: 'successful operation' },
    },
  }, // To  delete Product
  deleteProducts: {
    tags: [routeTags.ProductRoutes.id],
    summary: 'To delete product',
    description: 'Products get deleted product',
    responses: {
      200: { description: 'successful operation' },
    },
  },
};

module.exports = {
  productDtoSchema,
  routeTags,
  routeAnnotations,
};
