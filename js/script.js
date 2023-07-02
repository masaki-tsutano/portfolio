// スムーススクロール
const scroll = new SmoothScroll('a[href*="#"]');

//ページトップへ戻る
var $pageTop = $('.page-top');
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});

$pageTop.on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 200);
  return false;
});
