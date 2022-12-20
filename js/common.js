/* window information : 모든 script 페이지에서 정보를 호출하기 편하도록*/

function fnWinInfo() {
  window.scry = $(window).scrollTop() /* window. 으로 선언하면 전역변수 */
  window.scrx = $(window).scrollLeft()
  window.winh = $(window).innerHeight()
  window.winw = $(window).innerWidth()
}
fnWinInfo()
$(window).scroll(function () {
  fnWinInfo()
}).resize(function () {
  fnWinInfo()
})


/* smooth wheel --------------------------------------- */
var isMobile = false; 
var filter = "win16|win32|win64|mac";
if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
} //접속 환경이 모바일인지 확인하는 문법

var scrSpeed = 0

/* 바닐라 스크립트 */
window.addEventListener('mousewheel', function (e) {
  e.preventDefault()
  delta = e.wheelDeltaY / -120 /* 휠의 방향을 설정 */
  scrSpeed += 15 * delta
}, {
  passive: false
})

setInterval(function () {
  if(isMobile) return false // 모바일 환경에서는 스무스휠이 적용되면 안됨
  window.scrollTo({
    top: scry + scrSpeed
  })
  scrSpeed *= 0.9 /* 멈추려면 0에서 1사이 수를 사용 */
}, 20) /* 이 수치가 작을수록 스크롤이 부드럽게 움직임 */