const express = require('express');
const router = express.Router();

router.post("/calcul", (req, res, next) => {
  const phrase = 'le chemin vers le soleil levant';
  let lettre = req.body.lettre;
  let count = phrase.split(lettre).length -1;
  console.log(count);
  res.status(200).send(count.toString());
});

router.post('/plusg', (req, res, next) => {
  const nb1 = req.body.nb1;
  const nb2 = req.body.nb2;
  if(nb1 > nb2) {
    res.status(200).send(nb1.toString());
  } else if(nb2 > nb1) {
    res.status(200).send(nb2.toString());
  } else {
    res.status(200).send('equal');
  }
});

router.post('/inverse', (req, res, next) => {
  const nombres = req.body.nombres;
  res.status(200).send(nombres.reverse());
});

module.exports = router;