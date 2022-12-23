$(function () {

  /* 컨텍트 모션, profile 페이지 모션 */
  function motion() {
    var y = $('.profile').offset().top
    if (matchMedia('screen and (min-width:1000px)').matches) {
      if (scry >= y) {
        $('.contact_section').css({
          'transform': `translateY(${y - scry}px)`
        })
      } else {
        $('.contact_section').css({
          'transform': `translateY(0)`
        })
      }
    } else {
      $('.contact_section').css({
        'transform': `translateY(0)`
      })
    }
    if (scry >= y - winh * 0.3) {
      $('.profile').addClass('active')
    } else {
      $('.profile').removeClass('active')
    }
  }//fn


  motion()
  fnHomeText()  
  $(window).scroll(function () {
    motion()
    fnHomeText()
  }).resize(function () {
    motion()
    fnHomeText()
  })

  /* home 화면 텍스트 모션 */
  function fnHomeText() {
    $('.home_section figcaption').addClass('active')
  }

  /* 퍼블리싱 상세 페이지 모션 */
  function fnPubMotion() {
    $('.pub_wrap').each(function () {
      var offset = $(this).offset().top
      if (scry >= offset - winh * 0.3) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }//if else 
    })//each    
  }//fn

  fnPubMotion()
  $(window).scroll(function () {
    fnPubMotion()
  }).resize(function () {
    fnPubMotion()
  })

})