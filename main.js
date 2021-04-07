$(function () {
  $("#hamburger").click(function () {

    $(".panel").fadeToggle();

    $("#hamburger").toggleClass("active");
  });


  // $('.slider').slick();

  $('.slider').slick({
    dots: true,
    // dotsClass: 'slide-dots',
     customPaging: function(slick,index) {
        // スライダーのインデックス番号に対応した画像のsrcを取得
        var targetImage = slick.$slides.eq(index).find('img').attr('src');
        // slick-dots > li　の中に上記で取得した画像を設定
        return '<img src=" ' + targetImage + ' "/>';
    }
   }); 

  $(function() {
     $('.thumb-item').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.thumb-item-nav' ,
          revArrow: '<button class="slide-arrow prev-arrow"></button>',
          nextArrow: '<button class="slide-arrow next-arrow"></button>'
     });
     $('.thumb-item-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.thumb-item',
          focusOnSelect: true,

     });
});
 

})