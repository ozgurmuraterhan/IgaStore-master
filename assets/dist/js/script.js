$(document).ready(function () {
  $('.mainBanner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9999,
  });
  $("#dropdownCategory").parent('.dropdown').hover(
    function () {
      $('#dropdownCategoryMenu').collapse('show');
    }
  );
  $("#dropdownCategory").parent('.dropdown').hover(
    function () {
      $('#dropdownCategoryMenu').collapse('show');
    }
  );
  $("#dropdownCategoryMenu").hover(
    function () {
      $('#dropdownCategoryMenu').collapse('show');
    }
  );
  $("#dropdownCategoryMenu").mouseleave(
    function () {
      $('#dropdownCategoryMenu').collapse('hide');
    }
  );
  $("#dropdownJourneyBtn").parent('.dropdown').hover(
    function () {
      $('#dropdownJourneyMenu').collapse('show');
    }
  );
  $("#dropdownJourneyMenu").hover(
    function () {
      $('#dropdownJourneyMenu').collapse('show');

    }
  );
  $("#dropdownJourneyMenu").mouseleave(
    function () {
      $('#dropdownJourneyMenu').collapse('hide');
    }
  );
  $("#header").hover(
    function () {
      $('#dropdownCategoryMenu').collapse('hide');
    }
  );
  $("#dropdownJourneyBtn").mouseenter(
    function () {
      $('#dropdownContainerMenu').collapse('hide');
    }
  );
  $("#deneme").hover(
    function () {
      $('#dropdownContainerMenu').collapse('hide');
    }
  );
  $('.nav-pills > a').mouseenter(function () {
    $(this).tab('show');
    $(".tabpane").tab("hide");
  });



  $('.singleSlider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.categorySlider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.filterContainer').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {

        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.dingleSlider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $.mobile.autoInitializePage = false;
  $('.detailSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    nav: false,
    dots: false,
    asNavFor: '.detailSliderNav',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 1,
        dots: true,
        nav: true
      }
    }]
  });
  $('.detailSliderNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.detailSlider',
    dots: false,
    nav: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 1152,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '00px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 3
      }
    }]
  });
  $('.dingleSlider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(".sliderThumbnail").click(function () {
    var thumbImage = $('img', this).attr("src");
    $('.sliderMain > img').attr("src", thumbImage);
    $(".sliderThumbnail.current").removeClass("current");
    $(this).addClass("current");
  });



  $(".count-up").click(function () {
    var number = parseInt($(".countNumber > span").text());
    number = number + 1;
    $(".countNumber > span").text(number++);
  });
  $(".count-down").click(function () {
    var number = parseInt($(".countNumber > span").text());
    if (number > 0) {
      number = number - 1;
      $(".countNumber > span").text(number);
    }
  });
  $(document).ready(function () {
    $(".sliderThumbnail").eq(0).addClass("current");

  });

  $("#btn-down").click(function () {
    var lengthofthumbs = $(".sliderThumbnail").length;
    parseInt(lengthofthumbs);
    lengthofthumbs = lengthofthumbs - 1;
    if ($(".sliderThumbnail").eq(lengthofthumbs).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() + 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").next().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }


    // $(".sliderThumbnail.current").removeClass("current");

  });
  $("#btn-up").click(function () {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() - 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").prev().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }


  });
  // $("#thumbnailDiv").scroll(function(){
  //   $('#thumbnailDiv').animate({scrollTop:$('#thumbnailDiv').scrollTop() - 162}, 500, 'swing');
  // });
  document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('thumbnailDiv');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      // const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      // ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
  });

  $(".sliderMain").on("swiperight", function (event) {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() - 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").prev().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }
  });

  $(".sliderMain").on("swipeleft", function (event) {
    var lengthofthumbs = $(".sliderThumbnail").length;
    parseInt(lengthofthumbs);
    lengthofthumbs = lengthofthumbs - 1;
    if ($(".sliderThumbnail").eq(lengthofthumbs).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() + 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").next().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }
  });


  $.mobile.autoInitializePage = false;
  $('.detailSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    nav: false,
    dots: false,
    asNavFor: '.detailSliderNav',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 1,
        dots: true,
        nav: true
      }
    }]
  });
  $('.detailSliderNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.detailSlider',
    dots: false,
    nav: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 1152,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '00px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '00px',
        slidesToShow: 3
      }
    }]
  });
  $('.dingleSlider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(".sliderThumbnail").click(function () {
    var thumbImage = $('img', this).attr("src");
    $('.sliderMain > img').attr("src", thumbImage);
    $(".sliderThumbnail.current").removeClass("current");
    $(this).addClass("current");
  });



  $(".count-up").click(function () {
    var number = parseInt($(".countNumber > span").text());
    number = number + 1;
    $(".countNumber > span").text(number++);
  });
  $(".count-down").click(function () {
    var number = parseInt($(".countNumber > span").text());
    if (number > 0) {
      number = number - 1;
      $(".countNumber > span").text(number);
    }
  });
  $(document).ready(function () {
    $(".sliderThumbnail").eq(0).addClass("current");

  });

  $("#btn-down").click(function () {
    var lengthofthumbs = $(".sliderThumbnail").length;
    parseInt(lengthofthumbs);
    lengthofthumbs = lengthofthumbs - 1;
    if ($(".sliderThumbnail").eq(lengthofthumbs).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() + 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").next().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }


    // $(".sliderThumbnail.current").removeClass("current");

  });
  $("#btn-up").click(function () {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() - 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").prev().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }


  });
  // $("#thumbnailDiv").scroll(function(){
  //   $('#thumbnailDiv').animate({scrollTop:$('#thumbnailDiv').scrollTop() - 162}, 500, 'swing');
  // });
  document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('thumbnailDiv');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      // const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      // ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
  });

  $(".sliderMain").on("swiperight", function (event) {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() - 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").prev().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }
  });

  $(".sliderMain").on("swipeleft", function (event) {
    var lengthofthumbs = $(".sliderThumbnail").length;
    parseInt(lengthofthumbs);
    lengthofthumbs = lengthofthumbs - 1;
    if ($(".sliderThumbnail").eq(lengthofthumbs).hasClass("current")) {
    }
    else {
      // $('#thumbnailDiv').stop();
      $('#thumbnailDiv').animate({ scrollTop: $('#thumbnailDiv').scrollTop() + 162 }, 500, 'swing');
      var current = $(".sliderThumbnail.current");
      $(".sliderThumbnail.current").next().addClass('current');
      current.removeClass('current');
      var srcCurrent = $("img", ".sliderThumbnail.current").attr("src")
      $('.sliderMain > img').attr("src", srcCurrent);

    }
  });

  $('.dingleSlider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(document).ready(function () {

    var length = $(".form-check-input").length;
    var i = 0;
    while (i < length) {
      const checkBoxId = $(".form-check-input").eq(i).next().text().trim()
      $(".form-check-input").eq(i).attr("id", "cb" + i);
      i++;
    }
    $(".changeble").css('margin-bottom', '40px');
  });

  var sayac = 0;
  $(".form-check-input").click(function () {
    $(".resetfilterslong").css('display', 'flex')
    const topTitle = $(this).attr("id");
    const text = $(this).next().text().trim();
    const topId = topTitle.replace("cb", "");
    console.log(topId);

    if ($(this).is(':checked')) {
      sayac = sayac + 1;




      $("#longrow").append(' <div class="d-flex flex-row filteredlabels" id="ns' + topId + '"><div class="d-flex flex-column col-9"><div class="text1">' + text + '</div><div class=text2>Lorem</div> </div><div style="border-left: solid 0.5px #c9c9c9;"><a style="cursor: pointer;" id="ns' + topId + '"  onclick="myFunction(\'' + "ns" + topId + '\')"><img style="" src="./assets/closeitem.svg" alt=""></a> </div></div>');

      $(this).prop("checked", true);
    }

    else {
      $("#ns" + topId).remove();
      sayac = sayac - 1;
      var a = $(".filteredlabels").length
      console.log("a nin degeri ", a)
      if (a == 0) {
        $(".resetfilterslong").css('display', 'none')
      }
    }
  });



  $(" #resetfilterbutton").click(function () {
    $(".resetfilterslong").css('display', 'none')
    $(".filteredlabels").remove();
    $(".form-check-input").prop('checked', false);
  });

  function myFunction(getid) {
    var a = $(".filteredlabels").length
    console.log("a nin degeri ", a)
    if (a == 1) {
      $(".resetfilterslong").css('display', 'none')
    }

    console.log(getid);
    $("#" + getid).remove();
    const minus = getid.replace("ns", "");
    console.log("Minus = " + minus);
    const uncheckedInput = $("#cb" + minus + "");
    console.log(uncheckedInput.prev());
    uncheckedInput.prop('checked', false);

    uncheckedInput.css("color", "red");
  }
  $(".gridthree").click(function () {
    $(this).attr("src", "./assets/gridthreeenable.svg");
    $(".gridfour").attr("src", "./assets/gridfourdisable.svg");
    $(".changeble ").removeClass("col-md-3");
    $(".changeble ").addClass("col-md-4");
    $(".changeble ").css('transform', 'scale(' + 1.2 + ')');
    $(".changeble ").css('margin-bottom', '100px');
  });
  $(".gridfour").click(function () {
    $(this).attr("src", "./assets/gridfour.svg");
    $(".gridthree").attr("src", "./assets/gridthreedisable.svg");
    $(".changeble").removeClass("col-md-4");
    $(".changeble").addClass("col-md-3");
    $(".changeble").css('transform', 'scale(' + 1.0 + ')');
    $(".changeble").css('margin-bottom', '40px');
  });
  $(".scaleProduct").hover(
    function () {
      $(this).css('transition-duration', '0.3s');
      $(this).css('transform', 'scale(' + 1.1 + ')');

    }, function () {
      $(this).css('transition-duration', '0.3s');
      $(this).css('transform', 'scale(' + 1.0 + ')');

    }
  );
  var i = 0;
  $(".typeBrand").keyup(function () {

    var typeBrandText = document.getElementsByClassName("typeBrand")[0].value;

    console.log(typeBrandText[i]);
    i = i + 1;
    control();
  }
  );
  function control() {
    var typeBrandText = document.getElementsByClassName("typeBrand")[0].value;
    for (var i = 0; i < typeBrandText.length; i++) {
      var arama = $(".form-check-label.checkboxTop").eq(i).text().trim();
      console.log(typeBrandText[i]);
      console.log(arama[i]);
      if (typeBrandText[i] == arama[i]) {
        console.log("deneme " + arama);
      }
    }
  }

  $(".checkedboxes").click(function () {
    if ($(this).find("#icceper").hasClass("d-none")) {
      $(".checkedboxes").find("#icceper").removeClass("d-flex");
      $(".checkedboxes").find("#icceper").addClass("d-none");
      $(".checkedboxes").css("background-color", "unset")
      $(this).find("#icceper").removeClass("d-none");
      $(this).find("#icceper").addClass("d-flex");
      $(this).find("#icceper").addClass("checked");
      $("#exampleModalCenter").modal('hide');
      $(this).find("#icceper").addClass("d-flex");
      $(this).css("background-color", "#dedede");

      // $("#exampleModalCenter").removeClass("show");
      // $("#exampleModalCenter").css("display","none");
      // $("#exampleModalCenter").removeAttr("aria-modal");
      // $("#exampleModalCenter").attr("aria-hidden","true");

    }
    else {

    }


  });
  $("#changemobile").click(function () {
    console.log("enes");
    if ($(".changeble ").hasClass("col-6")) {
      $(".changeble ").removeClass("col-6");
      $(".changeble ").addClass("col-12");
      $(".changeble ").css('transform', 'scale(' + 1.2 + ')');
      $(".changeble ").css('margin-bottom', '10px');
    }
    else {
      $(".changeble ").removeClass("col-12");
      $(".changeble ").addClass("col-6");
      $(".changeble").css('transform', 'scale(' + 1.0 + ')');
      $(".changeble").css('margin-bottom', '3px');
    }
  });
});
