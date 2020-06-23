/* Delivery App 첫 페이지의 JS 문서입니다. */


var express = require('express'); 
var router = express.Router();
 
 
router.get('/', function(req, res, next) {
    res.render('get_page', { title: 'Gayeon Delivery' });
});
 
 
module.exports = router;
 
