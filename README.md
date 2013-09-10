# クロスフェードギャラリー

## デモ

<a href="http://klutche.github.io/crossFade/" target="_blank" class~"link">デモページ</a>

## HTML

	<ul class="crossFade">
	<li><a href="http://damlab.org/"><img src="images/450x300_01.jpg" width="450" height="300" alt=""></a></li>
	<li><a href="http://damlab.org/"><img src="images/450x300_02.jpg" width="450" height="300" alt=""></a></li>
	<li><a href="http://damlab.org/"><img src="images/450x300_03.jpg" width="450" height="300" alt=""></a></li>
	<li><a href="http://damlab.org/"><img src="images/450x300_04.jpg" width="450" height="300" alt=""></a></li>
	</ul>

ul に `crossFade` というクラスを設定します。
あとは li の中にリンクを付けた画像を置いてあるだけです。
スタイルは Javascript が自動で設定してくれるので、特にCSSを設定する必要はありません。

今回のスクリプトは li 自体をフェードイン・フェードアウトさせるので、li の中身は画像だろうとテキストだろうと何でも構いません。

## Javascript

jQuery 依存のスクリプトなので、まず jQuery を読み込んでおきます。

`<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>`

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

上部の初期設定で、ギャラリーサイズを指定してやる必要があります。
切替時間やフェードの速さは、好みに応じて変更してください。

## しくみ

<a href="http://klutche.org/archives/713/">クロスフェード処理で切り替わるシンプルな画像ギャラリー</a>に、マウスオーバーで中断、マウスが外れたら再開、の処理を追加しただけです。

`$(".crossFade").hover(function(){`

以下は、マウスオーバ－時の処理です。

`clearInterval(timerID);`

setInterval を解除しています。

`}, function(){`

以下が、マウスが外れた時の処理です。

`timerID = setInterval(show, $interval);`

再び setInterval で処理をループしています。

## サンプルファイル一式

<a href="https://github.com/klutche/crossFade" target="_blank" class="link">https://github.com/klutche/crossFade</a>
