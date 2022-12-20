$(function(){

  function fnScroll() {
    $('.pub_wrap').each(function(){
      var offset = $(this).offset().top
      if(scry >= offset - winh * 0.3) {
        $(this).addClass('active')
      }else {
        $(this).removeClass('active')
      }//if else 
    })//each    
  }//fn

  fnScroll()
  $(window).scroll(function(){
    fnScroll()
  }).resize(function(){
    fnScroll()
  })

})