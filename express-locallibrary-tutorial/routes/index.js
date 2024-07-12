var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });//render a specified template  along with the values of named variables passed in an object
// });//index is a template in views/index.pug
  res.redirect("/catalog")
})

module.exports = router; 