var express = require('express');
var router = express.Router();

/* GET home page. */
function initIndexRoute(db){
  router.get('/', function(req, res, next) {
    res.render('mobile_index', { layout:"layout_mobile",title: 'Express' });

  });
  return router;
}


module.exports = initIndexRoute;
