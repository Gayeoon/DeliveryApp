var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 
/* GET */
router.get('/', function(req, res, next) {
    var code = req.query.code;
    var number = req.query.number;
	var who = '김가연';
	var send = '11번가';
	var item = '노트북';
	var level = '1';
	var request=require("request")
	var detail = 'f';
	var defaultUrl="http://info.sweettracker.co.kr/" 
		const SERVICE_KEY="2JMpnLKoZENZZ5WbgrvJig"  
		const $api_url = "http://info.sweettracker.co.kr/api/v1/trackingInfo"+"?t_key="+SERVICE_KEY+"&t_code="+code+"&t_invoice="+number;


	function resolveAfter2Seconds() { 
		return new Promise(resolve => { 
			setTimeout(() => { 
			console.log('배송상태2 : ff ');	 
			res.render('result_page', { title: 'Gayeon Delivery', code: code, number: number, who: who, send:send, item:item, level:level, detail:detail, method: "get" });
			
			resolve('resolved'); 
		}, 2000); }); 
		} 
		
	async function asyncCall() { 
	/*
		request($api_url, function(err, res, body){
			var data = JSON.parse(body);
			console.log(data);
			if(data.hasOwnProperty('msg')){
				code = 'F';
				item = '옵션명 1:B_OPP비접착봉투,옵션명 2:B25_작은꽃(반투명)10장-3개 (+600원)';
			}else{
				console.log($api_url);		
				code = JSON.stringify(data.receiverAddr);
				console.log('배송상태1 : '+ code); 
				who = JSON.stringify(data.receiverName);
				send = JSON.stringify(data.senderName);
				item = JSON.stringify(data.itemName);
				level = JSON.stringify(data.level);
				console.log('who : '+ who);
				console.log('send : '+ send);
				console.log('level : '+ level);
				
				if(data.hasOwnProperty('trackingDetails')){
					var ja = new Array();
					for(var i=0; i<data.trackingDetails.length; i++){
						var jo = new Object();
						jo.time = data.trackingDetails[i].timeString;
						jo.d_where = data.trackingDetails[i].where;
						jo.kind = data.trackingDetails[i].kind;
						ja.push(jo);
					}
					detail = ja;
				}
				
				console.log(ja);
				console.log('----------------------------------------------------');
				console.log(detail);
			} 
		});
		*/
		
		code = "대전 유성구";
		level = "6";
		detail = [
  { "time": '2020-05-06 19:48:02', "d_where": '경기월산', "kind": '집화처리' },
  { "time": '2020-05-06 19:48:02', "d_where": '남양주B', "kind": '행낭포장' },
  { "time": '2020-05-07 00:38:34', "d_where": '군포BHub', "kind": '간선하차' },
  { "time": '2020-05-07 00:39:18', "d_where": '군포BHub', "kind": '행낭포장' },
  { "time": '2020-05-07 01:26:40', "d_where": '군포BHub', "kind": '간선상차' },
  { "time": '2020-05-07 04:24:13', "d_where": '용인HUB', "kind": '간선하차' },
  { "time": '2020-05-07 04:27:04', "d_where": '용인HUB', "kind": '간선상차' },
  { "time": '2020-05-07 11:20:14', "d_where": '유성', "kind": '간선하차' },
  { "time": '2020-05-07 14:02:16', "d_where": '대전유성송강', "kind": '배달출발\n(배달예정시간\n:19∼21시)' },
  { "time": '2020-05-07 21:33:43', "d_where": '대전유성송강', "kind": '배달완료' }];
		console.log('level : '+ level);
		var result = await resolveAfter2Seconds(); 
		console.log(result); 
	} 
	
	asyncCall();


});

module.exports = router;



