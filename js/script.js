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
  let offset
  function fnWebMotion() {
    offset = $('.portfolio_1_section').offset().top
    if (scry >= offset - winh * 0.5) {
      $('.portfolio_1_section').addClass('active')
    } else {
      $('.portfolio_1_section').removeClass('active')
    }//if else 

    offset = $('.portfolio_2_section').offset().top
    if (scry >= offset - winh * 0.5) {
      $('.portfolio_2_section').addClass('active')
    } else {
      $('.portfolio_2_section').removeClass('active')
    }//if else 
  }//fn

  fnWebMotion()
  $(window).scroll(function () {
    fnWebMotion()
  }).resize(function () {
    fnWebMotion()
  })

})