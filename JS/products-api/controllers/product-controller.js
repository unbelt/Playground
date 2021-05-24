const Product = require('../models/product-model');

const { jsonResponse, readBody } = require('../utils');

// @desc     Gets all products
// @route    GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    jsonResponse(res, products);
  } catch (error) {
    console.error(error);
  }
}

// @desc   Gets single product
// @route  GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (product) {
      jsonResponse(res, product);
    } else {
      jsonResponse(res, { message: `Product with ID ${id} not found!` }, 404);
    }
  } catch (error) {
    console.error(error);
  }
}

// @desc     Create a product
// @route    POST /api/products
async function createProduct(req, res) {
  try {
    const { title, description, price } = await readBody(req);
    const newProduct = await Product.create({ title, description, price });

    jsonResponse(res, newProduct, 201);
  } catch (error) {
    console.error(error);
  }
}

// @desc     Update a product
// @route    PUT /api/products/:id
async function updateProduct(req, res, id) {
  try {
    const existingProduct = await Product.findById(id);

    if (existingProduct) {
      const { title, description, price } = await readBody(req);

      const productData = {
        id,
        title: title || existingProduct.title,
        description: description || existingProduct.description,
        price: price || existingProduct.price,
      };

      const updatedProduct = await Product.update(productData);

      jsonResponse(res, updatedProduct);
    } else {
      jsonResponse(res, { message: `Product with ID ${id} not found!` }, 404);
    }
  } catch (error) {
    console.error(error);
  }
}

// @desc     Delete a product
// @route    DELETE /api/products/:id
async function deleteProduct(req, res, id) {
  try {
    const existingProduct = await Product.findById(id);

    if (existingProduct) {
      const products = await Product.remove(id);

      jsonResponse(res, products);
    } else {
      jsonResponse(res, { message: `Product with ID ${id} not found!` }, 404);
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
