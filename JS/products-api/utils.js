const fs = require('fs');

const { CONTENT_TYPE, ENCODING } = require('./constants');

function writeFile(contnent, path = './data/products.json') {
  fs.writeFileSync(path, JSON.stringify(contnent), ENCODING, (error) => {
    console.error(error);
  });
}

function jsonResponse(res, content, code = 200) {
  res.writeHead(code, CONTENT_TYPE);
  res.end(JSON.stringify(content));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  writeFile,
  jsonResponse,
  readBody,
};
