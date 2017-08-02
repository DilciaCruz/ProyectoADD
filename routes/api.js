var express = require('express');
var router = express.Router();

/* GET home page. */
function iniApiRoute(db){
  var reserva= db.collection('reserva');

  router.get('/getLista',function(req,res,next){
    reserva.find({}).toArray(function(err,docs){
      if(err){
        res.status(500).json({"error":"No se pudieron obtener las reservas"});
      }else{
        res.status(200).json(docs);
      }
    })
  });

  router.post('/createitem',function(req,res,next){
      var doc = {nombrepelicula:"",numerosala:0, fechafuncion:"", hora:"", formatopelicula:"", Clasificacion:"", nombrecompleto:"",correo:"", Asientos: 0};
      doc.nombrepelicula =req.body.nombrepelicula;
      doc.numerosala =req.body.numerosala;
      doc.fechafuncion =req.body.fechafuncion;
      doc.hora =req.body.hora;
      doc.formatopelicula =req.body.formatopelicula;
      doc.Clasificacion =req.body.Clasificacion;
      doc.nombrecompleto =req.body.nombrecompleto;
      doc.correo =req.body.correo;
      doc.Asientos =req.body.Asientos;




      reserva.insertOne(doc,function (err,result){
        if(err){
          res.status(500).json({"error": "Ocurrio un error"});

        }else{
            res.status(200).json({"insert":"ok"});
        }
      });
  });
  return router;
};



module.exports = iniApiRoute;
