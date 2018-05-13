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

$(function() { //htmlを読み込んで
var nav = $("#header"); 
var navTOP = nav.offset().top; //#headerのtopからの位置を取得
 
    $(window).scroll(function(){ //ドキュメントをスクロールしたら以下を実行します
        var winTOP  = $(this).scrollTop(); //要素topからのscroll位置を取得する
 
    if (winTOP >= navTOP) {  //scroll位置が#headerの位置を超えていたら
        $("#header").addClass('fixed'); 
    } else if (winTOP <= navTOP) { 
        $("#header").removeClass('fixed'); 
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
     PRsa-bisu 
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
