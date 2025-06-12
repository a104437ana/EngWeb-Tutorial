var express = require('express');
var router = express.Router();
var axios = require('axios');

function now() {
  return new Date().toLocaleString('pt-PT', { hour12: false });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , date:now()});
});

router.get('/lista', function(req, res, next) {
  res.render('lista', { title: 'Express' , date:now()});
});

router.get('/ent', function(req, res, next) {
  res.render('ent', { title: 'Express' , date:now()});
});

module.exports = router;
