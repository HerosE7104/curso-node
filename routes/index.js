var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/inicio', function (req, res, next) {
  res.render('inicio', { title: 'Hola Mundo', variable: 'son una variable' });
});
module.exports = router;
