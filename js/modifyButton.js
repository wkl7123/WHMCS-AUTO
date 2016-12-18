if(window.location.search.substring(0,23)=="?action=managegroup&id=" && window.location.pathname=="/admin/configproductoptions.php"){
	$('#sortabletbl1 tr').each(function(i){
		if(i!=0){
			var tds=$(this).find('td');
			var name=tds.eq(1).find('input').attr('name');
			var n=name.substring(6,name.length-1);
			var href='configproductoptions.php?manageoptions=true&cid='+n;
			tds.eq(3).html("<a href='"+href+"' target='_blank'><img src='https://static.bisend.cn/image/base/edit.png'></a>");
		}
	})
}
