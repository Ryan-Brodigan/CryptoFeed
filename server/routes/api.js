const express = require('express');
const router = express.Router();

router.get('/coins/', (req, res) => {
  res.send({
    coins : [{name:'BTC'}, {name:'ETH'}, {name:'DOGE'}]
  })
});
router.get('/coins/:name', (req, res) => {
  const requestedCoinName = req.params[name];
  res.send({name:requestedCoinName});
});

router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;
