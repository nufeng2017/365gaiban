layui.use(['layer'], function() {
	var $ = layui.jquery;

	//导航hover
	$('.z-head-nav .z-nav-hover').mouseenter(function(){
		$(this).find('.z-nav-hover-box').show().addClass('layui-anim layui-anim-scaleSpring');
	}).mouseleave(function(){
		$(this).find('.z-nav-hover-box').removeClass('layui-anim-scaleSpring').hide();
	});
	
	//回到页头
	$('#z-back-top').click(function(){
		$(document).scrollTop(0);
	});
	
	//侧边栏hover事件
	$('.z-side-nav-box .z-side-nav-btn:not(.z-gobacktop)').mouseenter(function(){
		$(this).parents('.z-side-nav-box').children().removeClass('z-hover-this');
		$(this).parents('.z-side-nav').addClass('z-hover-this');
	}).mouseleave(function(){
		$(this).parents('.z-side-nav').removeClass('z-hover-this');
	});
	$('.z-side-nav-box #z-zixun .z-zixun-btn .z-close-icon').click(function(){
		$(this).parents('.z-side-nav').removeClass('z-hover-this');
	});
});