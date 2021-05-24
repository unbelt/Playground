const { v4: uuidv4 } = require('uuid');

const { writeFile } = require('../utils');
let products = require('../data/products.json');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);

    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);

    writeFile(products);

    resolve(newProduct);
  });
}

function update(product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === product.id);
    products[index] = product;

    writeFile(products);

    resolve(products[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const updatedProducts = products.filter((p) => p.id !== id);

    writeFile(updatedProducts);

    resolve(updatedProducts);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
