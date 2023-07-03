// スムーススクロール
const scroll = new SmoothScroll('a[href*="#"]');

//スクロールに応じてヘッダーにactiveクラスを付与
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('#header').addClass('header-active');
  } else {
    $('#header').removeClass('header-active');
  }
});
