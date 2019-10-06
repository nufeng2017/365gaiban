layui.use(['layer','form','laypage'], function() {
	var $ = layui.jquery;
	var laypage = layui.laypage;
	
	//筛选其它
	$('.z-select').click(function(){
		$(this).addClass('z-select-show');
	});
	$('.z-select li').click(function(e){
		e.stopPropagation();
		$(this).parents('.z-select').find('.z-select-val').html($(this).html());
		$(this).parents('.z-select').removeClass('z-select-show');
	});
	
	//找房条件关闭
	$('.z-now-filter ul li i').click(function(){
		$(this).parent().hide();
	});
	
	//选择单位
	$('.z-rental-date>div').click(function(){
		$(this).parent().children().removeClass('z-select-this');
		$(this).addClass('z-select-this');
	});
	
	//执行一个laypage实例
	laypage.render({
	    elem: 'z-laypage',
	    count: 150 //数据总数，从服务端得到
	});
});