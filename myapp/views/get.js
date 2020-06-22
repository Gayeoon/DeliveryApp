var request=require("request");

		var defaultUrl="http://info.sweettracker.co.kr/" 
		const SERVICE_KEY="2JMpnLKoZENZZ5WbgrvJig"  
		code = "04";
		number =  "380751026474";
		const $api_url = "http://info.sweettracker.co.kr/api/v1/trackingInfo"+"?t_key="+SERVICE_KEY+"&t_code=N"&t_invoice="+number;
		var tmp = "";
		request($api_url, function(err, res, body){
			var data = JSON.parse(body);
			console.log($api_url);		
			var ans  = JSON.stringify(data.result);
			console.log('배송상태1 : '+ ans);
			
		});
		
		
function button1_click(){
	alert('ho');
}