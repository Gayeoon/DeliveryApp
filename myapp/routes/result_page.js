var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 
/* GET */
router.get('/', function(req, res, next) {
    var code = req.query.code;
    var number = req.query.number;
	var who = '가연';
	var send = '언더웨어';
	
	var request=require("request")

var defaultUrl="http://info.sweettracker.co.kr/" 
		const SERVICE_KEY="2JMpnLKoZENZZ5WbgrvJig"  
		const $api_url = "http://info.sweettracker.co.kr/api/v1/trackingInfo"+"?t_key="+SERVICE_KEY+"&t_code="+code+"&t_invoice="+number;


	function resolveAfter2Seconds() { 
		return new Promise(resolve => { 
			setTimeout(() => { 
			console.log('배송상태2 : ff ');	 
			res.render('result_page', { title: 'Express', code: code, number: number, who: who, send:send, method: "get" });
			
			resolve('resolved'); 
		}, 2000); }); 
		} 
		
	async function asyncCall() { 
		request($api_url, function(err, res, body){
			var data = JSON.parse(body);
			console.log(data);
			if(data.hasOwnProperty('msg')){
				code = 'F';
			}else{
				console.log($api_url);		
				code = JSON.stringify(data.complete);
				console.log('배송상태1 : '+ code);
				who = JSON.stringify(data.reciver_name);
				send = JSON.stringify(data.sender_name);
			}
		});
		  
		var result = await resolveAfter2Seconds(); 
		console.log(result); 
	} 
	
	asyncCall();


});

module.exports = router;



