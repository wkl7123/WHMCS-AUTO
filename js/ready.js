$("#month").slider({
	tooltip: 'show'
});
$("#month").on("change", function(slideEvt) {
	$("#monthSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

$("#quarter").slider({
	tooltip: 'show'
});
$("#quarter").on("change", function(slideEvt) {
	$("#quarterSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

$("#semiAnnual").slider({
	tooltip: 'show'
});
$("#semiAnnual").on("change", function(slideEvt) {
	$("#semiAnnualSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

$("#annual").slider({
	tooltip: 'show'
});
$("#annual").on("change", function(slideEvt) {
	$("#annualSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

$("#biennial").slider({
	tooltip: 'show'
});
$("#biennial").on("change", function(slideEvt) {
	$("#biennialSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

$("#triennial").slider({
	tooltip: 'show'
});
$("#triennial").on("change", function(slideEvt) {
	$("#triennialSliderVal").text(100-(slideEvt.value.newValue*100).toFixed(0));
});

if(localStorage.data!=undefined){
	var data=JSON.parse(localStorage.data)
	$('#checkbox-month').prop("checked",data.checkbox.month);
	$('#checkbox-quarter').prop("checked",data.checkbox.quarter);
	$('#checkbox-semiAnnual').prop("checked",data.checkbox.semiAnnual);
	$('#checkbox-annual').prop("checked",data.checkbox.annual);
	$('#checkbox-biennial').prop("checked",data.checkbox.biennial);
	$('#checkbox-triennial').prop("checked",data.checkbox.triennial);
	$("#month").slider('setValue',data.value.month,true);
	$("#monthSliderVal").html(100-(data.value.month*100).toFixed(0));
	$("#quarter").slider('setValue',data.value.quarter,true);
	$("#quarterSliderVal").html(100-(data.value.quarter*100).toFixed(0));
	$("#semiAnnual").slider('setValue',data.value.semiAnnual,true);
	$("#semiAnnualSliderVal").html(100-(data.value.semiAnnual*100).toFixed(0));
	$("#annual").slider('setValue',data.value.annual,true);
	$("#annualSliderVal").html(100-(data.value.annual*100).toFixed(0));
	$("#biennial").slider('setValue',data.value.biennial,true);
	$("#biennialSliderVal").html(100-(data.value.biennial*100).toFixed(0));
	$("#triennial").slider('setValue',data.value.triennial,true);
	$("#triennialSliderVal").html(100-(data.value.triennial*100).toFixed(0));
}

$("#reset-btn").click(function(){
	$("#month").slider('setValue',1,true);
	$("#quarter").slider('setValue',1,true);
	$("#semiAnnual").slider('setValue',1,true);
	$("#annual").slider('setValue',1,true);
	$("#biennial").slider('setValue',1,true);
	$("#triennial").slider('setValue',1,true);
})

$("#select-btn").click(function(){
	if($("#select-btn").text()=="全部选择"){
		$('#checkbox-month').prop("checked",true);
		$('#checkbox-quarter').prop("checked",true);
		$('#checkbox-semiAnnual').prop("checked",true);
		$('#checkbox-annual').prop("checked",true);
		$('#checkbox-biennial').prop("checked",true);
		$('#checkbox-triennial').prop("checked",true);
		$("#select-btn").html("全部取消")
	}else{
		$('#checkbox-month').prop("checked",false);
		$('#checkbox-quarter').prop("checked",false);
		$('#checkbox-semiAnnual').prop("checked",false);
		$('#checkbox-annual').prop("checked",false);
		$('#checkbox-biennial').prop("checked",false);
		$('#checkbox-triennial').prop("checked",false);
		$("#select-btn").html("全部选择")
	}
})

$("#save-btn").click(function(){
	var data=JSON.stringify(getResult())
	localStorage.data=data;
	chrome.storage.local.set({
		'data':data
	});
	alert("保存成功");
})

function getResult(){
	return {
		checkbox:{
			month:$('#checkbox-month').prop("checked"),   //.is(":checked")
			quarter:$('#checkbox-quarter').prop("checked"),
			semiAnnual:$('#checkbox-semiAnnual').prop("checked"),
			annual:$('#checkbox-annual').prop("checked"),
			biennial:$('#checkbox-biennial').prop("checked"),
			triennial:$('#checkbox-triennial').prop("checked")
		},
		value:{
			month:$('#month').slider('getValue'),
			quarter:$('#quarter').slider('getValue'),
			semiAnnual:$('#semiAnnual').slider('getValue'),
			annual:$('#annual').slider('getValue'),
			biennial:$('#biennial').slider('getValue'),
			triennial:$('#triennial').slider('getValue')
		}
	}
}

