var express = require('express');
var router = express.Router();

/* GET home page. */
function iniApiRoute(db){
  var reserva= db.collection('reserva');

  router.get('/getLista',function(req,res,next){
    reserva.find({}).limit(4).toArray(function(err,docs){
      if(err){
        res.status(500).json({"error":"No se pudieron obtener las reservas"});
      }else{
        res.status(200).json(docs);
      }
    })
  });
  return router;
};



module.exports = iniApiRoute;
