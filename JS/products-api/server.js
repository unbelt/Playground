const http = require('http');

const { GET, POST, PUT, DELETE } = require('./constants');
const { jsonResponse } = require('./utils');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./controllers/product-controller');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === GET) {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([a-z0-9\-]+)/) &&
    req.method === GET
  ) {
    const id = req.url.split('/')[3];
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === POST) {
    createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/([a-z0-9\-]+)/) && req.method === PUT) {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([a-z0-9\-]+)/) &&
    req.method === DELETE
  ) {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  } else {
    jsonResponse(res, { message: 'Route not found!' }, 404);
  }
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
