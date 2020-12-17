const express = require('express');
const router = express.Router();

let product = ['banana'];

router.get("/product", (req, res, next) => {
  res.status(200).send('api product');
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  product.push(req.body.fruit);
});

router.get("/product.json", (req, res, next) => {
  /*const product = {
    name: '4k TV',
    brand: 'Samsung',
    price: 800
  }*/
  res.status(200).json(product);
});

module.exports = router;