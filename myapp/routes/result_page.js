/* Delivery App 두번째 페이지의 JS 문서입니다. */

/* code : 택배사 번호 -> 수신인 주소 */
/* number : 운송장 정보 */
/* who : 받는 사람 */
/* send : 보내는 사람 */
/* item : 상품명 */
/* level : 배송 단계(1~6) */
/* detail : 배송 진행 정보 (default:'f' / 정보가 있을경우:JSONArray 객체) */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 
router.get('/', function(req, res, next) {
    
	var code = req.query.code;
    var number = req.query.number;
	var who = '김가연';
	var send = '11번가';
	var item = '노트북';
	var level = '1';
	var detail = 'f';

	var request=require("request")	
	var defaultUrl="http://info.sweettracker.co.kr/" 
	const SERVICE_KEY="2JMpnLKoZENZZ5WbgrvJig"  
	const $api_url = "http://info.sweettracker.co.kr/api/v1/trackingInfo"+"?t_key="+SERVICE_KEY+"&t_code="+code+"&t_invoice="+number;

	/* 변수들을 HTML 문서로 랜더링 하는 부분입니다. */
	/* API를 이용해서 데이터를 받아온 후에 작동시켜야하기 때문에 Promise 구문을 이용했습니다. */
	function resolveAfter2Seconds() { 
		return new Promise(resolve => { 
			setTimeout(() => { 	 
			res.render('result_page', { title: 'Gayeon Delivery', code: code, number: number, who: who, send:send, item:item, level:level, detail:detail, method: "get" });			
			resolve('resolved'); 
		}, 2000); }); 
	} 
		
	/* 스마트 택배 배송조회 API를 이용하는 부분입니다. */	
	async function asyncCall() { 
	
		request($api_url, function(err, res, body){
			var data = JSON.parse(body);
			console.log(data);
			
			// 'msg'가 뜰 경우 배송조회에 실패했다는 것이므로 code에 F를 저장합니다.
			if(data.hasOwnProperty('msg')){
				code = 'F';
			}else{
				console.log($api_url);		
				code = JSON.stringify(data.receiverAddr);
				
				who = JSON.stringify(data.receiverName);
				send = JSON.stringify(data.senderName);
				item = JSON.stringify(data.itemName);
				level = JSON.stringify(data.level);
				console.log('수신인 : '+ who);
				console.log('발신인 : '+ send);
				console.log('배송상태 : '+ level);
				console.log('주소 : '+ code); 
				
				// 수신인, 발신인, 주소가 빈 문자열로 모두 같을 경우 유효하지 않은 배송정보이므로
				// code에 F를 저장합니다.
				// api에 result key가 존재하긴 하지만 이 result가 배송 정보의 유효성을 나타내는지
				// 확실하지 않아서 문자열을 비교하는 식으로 구현했습니다..
				if(who == send && send == code){
					code = 'F';
				}
				
				// 배송 진행 정보를 JSONArray 객체에 저장합니다.
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
			} 
		});
		
		var result = await resolveAfter2Seconds(); 
		console.log(result); 
	} 
	
	asyncCall();
});

module.exports = router;



