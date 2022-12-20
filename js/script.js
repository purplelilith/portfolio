$(function(){

  function fnScroll() {
    var offset = $('.pub_section1').offset().top
    if(scry >= offset - winh * 0.5) {
      $('.pub_wrap').addClass('active')
    }else {
      $('.pub_wrap').removeClass('active')
    }
  }
  fnScroll()
  $(window).scroll(function(){
    fnScroll()
  }).resize(function(){
    fnScroll()
  })

})