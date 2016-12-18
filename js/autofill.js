chrome.storage.local.get('data',function(result){
	var factor={};
	var options=['month','quarter','semiAnnual','annual','biennial','triennial'];
	var data=result.data;
	data=JSON.parse(data);
	for(i in options){
		var item=options[i];
		if(data['checkbox'][item]==true){
			factor[item]=data['value'][item];
		}else{
			factor[item]=1;
		}
	}
	// alert(JSON.stringify(factor));
	$('form table tbody tr').each(function(){	
		var tds=$(this).find('td');
		if(tds.eq(0).text()=='Pricing'){
			var monthPrice=parseFloat(tds.eq(1).find('input').val());
			var quarterPrice=monthPrice*3;
			var semiAnnualPrice=monthPrice*6;
			var annualPrice=monthPrice*12;
			var biennialPrice=monthPrice*24;
			var triennialPrice=monthPrice*36;
			tds.eq(1).find('input').val((monthPrice*factor['month']).toFixed(2));
			tds.eq(2).find('input').val((quarterPrice*factor['quarter']).toFixed(2));
			tds.eq(3).find('input').val((semiAnnualPrice*factor['semiAnnual']).toFixed(2));
			tds.eq(4).find('input').val((annualPrice*factor['annual']).toFixed(2));
			tds.eq(5).find('input').val((biennialPrice*factor['biennial']).toFixed(2));
			tds.eq(6).find('input').val((triennialPrice*factor['triennial']).toFixed(2));
		}
	})
});