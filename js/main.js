// mainSliderBg
$(document).ready(function () {
  $(".mainSlider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    prevArrow: $("#mainPrev"),
    nextArrow: $("#mainNext"),
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      //FYI just have a look at the object to find aviable information
      //press f12 to access the console
      //you could also debug or look in the source
      console.log(slider);
      return i + 1 + "/" + slider.slideCount;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        },
      },
    ], //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
  });
});

// mainRow2
$(document).ready(function () {
  $(".row2Slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnDotsFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ], //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
  });
});
