var express = require('express'); 
var router = express.Router();
 
 
router.get('/', function(req, res, next) {
    res.render('get_page', { title: 'Gayeon Delivery' });
});
 
 
module.exports = router;
 
