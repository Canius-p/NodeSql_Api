const express = require('express');
const cors = require('cors');
const swaggerUiExpress = require('swagger-ui-express');
const apiDocumentation = require('./swagger/swaggerConfig.js');

const app = express();

var corOptions = {
  origin: 'https://localhost:4000',
};

//middlewares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require('./routes/productRoutes.js');

app.use('/api/products', router);

//tester
app.get('/', (req, res) => {
  res.send('hey');
});

const port = process.env.port || 4000;
app.listen(4000, () => {
  // server listen garna lai
  console.log(`Server has started at port ${port}`);
});

app.use(
  '/doc',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(apiDocumentation)
);
