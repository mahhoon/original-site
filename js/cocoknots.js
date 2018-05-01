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
var bt = $("#header").offset().top; 
var ds = 0;
 
$(document).scroll(function(){ 
    ds = $(this).scrollTop(); 
 
    if (bt <= ds) {  
        $("#header").addClass('.fixed'); 
    } else if (bt >= ds) { 
        $("#header").removeClass('.fixed'); 
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
