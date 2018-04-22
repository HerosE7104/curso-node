var express= require('express');
var router= express.Router();
const respuesta = {texto: 'hola perro',metodo: 'Get',numeroloco:21};
const usuario = {nombre: 'Lennin Diaz', email:'aluregames@gmail.com', contra:'hola1234'};
router.route('/')
        .get(function(req, res, next){
            respuesta.metodo = 'GET';
            res.json(respuesta);
        })
        .post(function(req, res, next){
            respuesta.texto = req.body.nombre + ' ' + req.body.apellido;
            respuesta.metodo = 'POST';
            res.json(respuesta);
        })
        .put(function(req, res, next){
            respuesta.metodo = 'PUT';
            res.json(respuesta);
        })
        .delete(function(req, res, next){
            respuesta.metodo = 'DELETE';
            res.json(respiesta);
        })

router.route('/login')
    
        .post(function(req, res, next){
            var body = req.body;
            if(body.email === usuario.email && body.contra === usuario.contra){
                req.session.usuario = body;
                
                res.json('sesion iniciada');
            } else{
                req.session.usuario = null;
                res.json('datos de login incorrectos');
            }
            
        })
     
       
module.exports = router;