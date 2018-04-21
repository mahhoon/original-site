/* ドロップダウンメニュー */

$(function(){
    $("ul.head_nav li").hover(function(){
            $("ul:not(:animated)",this).slideDown("fast")
        },
        function(){
            $("ul",this).slideUp("fast");
    })
}) 

/*グロナビ固定*/

$(function() {
    var nav = $('#header'),
    //navの位置
	navTOP = nav.offset().top;
	//スクロールするたびに実行
	$(window).scroll(function () {
	    var winTOP=$(this).scrollTop();
	    //スクロールの位置がnavの位置より下だったらクラスfixedを追加
	  if(winTop>=navTop) {
	      nav.addClass('.fixed')
	  } else if(winTop<=navTop) {
	    nav.removeClass('fixed')
	  }
	});
});

/*サイドナビ固定
$(function() {
     $('#sidemenu').fitSidebar({
         wrapper : '#contents',
         responsiveWidth : 767
     });
 });
 */

/*
 $(function(){
    var fix = $('#sidemenu'), //固定したいコンテンツ
    side = $('#sidebar'), //サイドバーのID
    main = $('#content'), //固定する要素を収める範囲
     sideTop = side.offset().top;
     fixTop = fix.offset().top,
     mainTop = main.offset().top,
     w = $(window);
      
     var adjust = function(){
     fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
     var fixHeight = fix.outerHeight(true),
     mainHeight = main.outerHeight(),
     winTop = w.scrollTop();
     if(winTop + fixHeight > mainTop + mainHeight){
     fix.css({
     position: 'absolute',
     top: mainHeight - fixHeight
     });
     }else if(winTop >= fixTop){
     fix.css({
     position: 'fixed',
     top: 10
     });
     }else{
     fix.css('position', 'static');
     }
     }
     w.on('scroll', adjust);
 });
 */
 
 /*toggle button*/
 $(document).ready(function(){
  $(".menu_icon").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});


<!-- スムーズスクロール部分の記述 -->
<script>
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
</script>