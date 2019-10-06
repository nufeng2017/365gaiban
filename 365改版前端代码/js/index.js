layui.use(['layer'], function() {
	var $ = layui.jquery;

	//重置banner图位置
	var defaultBannerImgWidth = 1920;
	var defaultBannerImgHeight = 540;
	var proportion = defaultBannerImgWidth / defaultBannerImgHeight;
	_resizeImg();
	$(window).resize(function() {
		_resizeImg();
	});
	
	//滚动事件
	$(window).scroll( function(){
		if ($(document).scrollTop() >90){
			$('.z-head-nav').addClass('z-nav-fixed');
		} else {
			$('.z-head-nav').removeClass('z-nav-fixed');
		}
	});
	
	//搜索框选项
	$('.z-banner .z-search .z-search-list li').click(function(){
		_select(this,'z-search-this');
	});
	
	$('.z-house-list-nav .z-house-list-nav-item').click(function(){
		_select(this,'z-sel-this');
	});
	
	//底部弹窗
	$('.z-footer-win .z-close-btn').click(function(){
		$('.z-footer-win').addClass('layui-anim layui-anim-fadeout');
	});
	
	function _resizeImg() {
		if($(window).width() > defaultBannerImgWidth) {
			var imgW = $(window).width();
			var imgH = imgW / proportion;
		} else {
			var imgW = defaultBannerImgWidth;
			var imgH = defaultBannerImgHeight;
		}
		$('.z-banner .z-banner-img').css({
			'width': imgW + 'px',
			'height': imgH + 'px',
			'marginLeft': -(imgW / 2) + 'px',
			'marginTop': -(imgH / 2) + 'px'
		});
	}
	function _select(that,active){
		$(that).parent().children().removeClass(active);
		$(that).addClass(active);
	}
});