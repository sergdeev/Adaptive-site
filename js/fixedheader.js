$(window).scroll(function(){
  if( $(this).scrollTop() > 120 ){
    $("header").addClass( 'scrolled' )
  }else if($(this).scrollTop() <= 120 ){
    $("header").removeClass( 'scrolled' )
  }

})
