// JavaScript Document

$(function(){
	// 設定
	var $width      = 450;// 横幅
	var $height     = 300;// 高さ
	var $interval   = 3000;// 切り替わりの間隔(ミリ秒)
	var $fade_speed = 1000;// フェード処理の早さ(ミリ秒)
	// 開始処理
	$(".crossFade").css({"position":"relative", "overflow":"hidden", "width":$width, "height":$height});
	$(".crossFade li").hide().css({"position":"absolute", "top":0, "left":0});
	$(".crossFade li:first").addClass("active").fadeIn($fade_speed);
	// ループセット
	var timerID = setInterval(show, $interval);
	// マウスオーバーで中断
	$(".crossFade").hover(function(){
		clearInterval(timerID);
	}, function(){
		timerID = setInterval(show, $interval);
	});
	// フェードイン処理
	function show(){
		var $active = $(".crossFade li.active");
		var $next = $active.next("li").length?$active.next("li"):$(".crossFade li:first");
		$active.fadeOut($fade_speed).removeClass("active");
		$next.fadeIn($fade_speed).addClass("active");
	}
});
