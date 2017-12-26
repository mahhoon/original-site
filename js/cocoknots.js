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

$(function(){
    var nav = $('#header'),
	offset = nav.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
	    nav.addClass('fixed');
	  } else {
	    nav.removeClass('fixed');
	  }
	});
});

/*サイドナビ固定*/
$(function() {
     $('#sidemenu').fitSidebar({
         wrapper : '#contents',
         responsiveWidth : 767
     });
 });

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