var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('inicio2', {title:'bienvenido', user: req.session.usuario})
});

module.exports = router;
