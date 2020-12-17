const express = require('express');
const router = express.Router();

router.get("/hello/:name", (req, res, next) => {
  name = req.params.name;
  res.status(200).send('hello ' + name);
})

module.exports = router;