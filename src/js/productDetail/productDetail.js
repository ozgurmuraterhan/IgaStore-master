$(".dingleSlider").slick({
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
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

$(".filterMobileOpen").click(function () {
    $("#mobileOpenFilter").toggle("slow").focus();
});
$(document).ready(function () {
    var header = document.querySelector("#headerProductFilterFixedMobil");

    var headroom = new Headroom(header, {
        tolerance: {
            down: 5,
            up: 5,
        },
        offset: 300,
    });
    headroom.init();

    var length = $(".form-check-input").length;
    var i = 0;
    while (i < length) {
        const checkBoxId = $(".form-check-input").eq(i).next().text().trim();
        $(".form-check-input")
            .eq(i)
            .attr("id", "cb" + i);
        i++;
    }
    $(".changeble").css("margin-bottom", "40px");
});

var sayac = 0;

$(".pricebutton").click(function () {
    $(".resetfilterslong").css("display", "flex");
    const topTitle = $(this).attr("id");
    const category = $(this).attr("for");
    const whyCat = $(this).attr("name");

    let text = $(this).attr("val");
    const topId = topTitle.replace("cb", "");
    let addClassAmount = "";

    const valmin = $("#minPrice").val();
    const valmax = $("#maxPrice").val();
    text = valmin + " - " + valmax + " TL";

    $(".amountCheckTopBar").remove();
    $(".amountCheck").prop("checked", false);
    addClassAmount = "amountCheckTopBar";

    $("#longrow").append(
        ' <div class="d-flex flex-row filteredlabels ' +
            addClassAmount +
            '" id="ns' +
            topId +
            '"><div class="d-flex flex-column p-3 justify-content-center"><div class="text1" >' +
            category +
            "</div> <div class=text2>" +
            text +
            '</div> </div><div style="border-left: solid 0.5px #c9c9c9;"><a style="cursor: pointer;" class="close-icon" id="ns' +
            topId +
            '"  onclick="myFunction(\'' +
            "ns" +
            topId +
            '\')"><i class="fas fa-times-circle"></i></a> </div></div>'
    );
});

$(".form-check-input").click(function () {
    $(".resetfilterslong").css("display", "flex");
    const topTitle = $(this).attr("id");
    const category = $(this).attr("for");
    const whyCat = $(this).attr("name");

    let text = $(this).attr("val");
    const topId = topTitle.replace("cb", "");
    let addClassAmount = "";

    // name="amount"  for="Fiyat"  valmin="0" valmax="25"

    if ($(this).is(":checked")) {
        if (whyCat == "amount") {
            const valmin = $(this).attr("valmin");
            const valmax = $(this).attr("valmax");
            text = valmin + " - " + valmax + " TL";
            $("#minPrice").val(valmin);
            $("#maxPrice").val(valmax);

            $(".amountCheckTopBar").remove();
            $(".amountCheck").prop("checked", false);
            addClassAmount = "amountCheckTopBar";
        }
        if (whyCat == "starrate") {
            const val = $(this).attr("val");
            text = val;

            $(".starCheckTopBar").remove();

            $(".starCheck").prop("checked", false);
            $(this).prop("checked", true);

            addClassAmount = "starCheckTopBar";
        }

        sayac = sayac + 1;
        $("#longrow").append(
            ' <div class="d-flex flex-row filteredlabels ' +
                addClassAmount +
                '" id="ns' +
                topId +
                '"><div class="d-flex flex-column p-3 justify-content-center"><div class="text1" >' +
                category +
                "</div> <div class=text2>" +
                text +
                '</div> </div><div style="border-left: solid 0.5px #c9c9c9;"><a style="cursor: pointer;" class="close-icon" id="ns' +
                topId +
                '"  onclick="myFunction(\'' +
                "ns" +
                topId +
                '\')"><i class="fas fa-times-circle"></i></a> </div></div>'
        );

        $(this).prop("checked", true);
    } else {
        console.log("sdsd");
        $("#ns" + topId).remove();
        sayac = sayac - 1;
        var a = $(".filteredlabels").length;
        console.log("a nin degeri ", a);
        if (a == 0) {
            $(".resetfilterslong").css("display", "none");
        }
    }
});

$(" #resetfilterbutton").click(function () {
    $(".resetfilterslong").css("display", "none");
    $(".filteredlabels").remove();
    $(".form-check-input").prop("checked", false);
});

function myFunction(getid) {
    var a = $(".filteredlabels").length;
    console.log("a nin degeri ", a);
    if (a == 1) {
        $(".resetfilterslong").css("display", "none");
    }

    console.log(getid);
    $("#" + getid).remove();
    const minus = getid.replace("ns", "");
    console.log("Minus = " + minus);
    const uncheckedInput = $("#cb" + minus + "");
    console.log(uncheckedInput.prev());
    uncheckedInput.prop("checked", false);

    uncheckedInput.css("color", "red");
}
$(".gridthree").click(function () {
    $(".gridfour ").removeClass("active");
    $(".gridthree ").addClass("active");
    $(".changeble ").removeClass("col-lg-3");
    $(".changeble ").addClass("col-lg-4");
    $(".changeble ").css("margin-bottom", "20px");
    $(".changeble ").css("margin-top", "50px");
});
$(".gridfour").click(function () {
    $(".gridthree").removeClass("active");
    $(".gridfour").addClass("active");
    $(".changeble").removeClass("col-lg-4");
    $(".changeble").addClass("col-lg-3");
    $(".changeble").css("transform", "scale(" + 1.0 + ")");
    $(".changeble").css("margin-bottom", "40px");
});
$(".scaleProduct").hover(
    function () {
        $(this).css("transition-duration", "0.3s");
        $(this).css("transform", "scale(" + 1.1 + ")");
    },
    function () {
        $(this).css("transition-duration", "0.3s");
        $(this).css("transform", "scale(" + 1.0 + ")");
    }
);
var i = 0;

$(".typeBrand").keyup(function () {
    var filter = $(this).val(),
        count = 0;
    $(".element-holder .checkboxTop").each(function () {
        var current = $(".checkboxTop").attr("val");
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();
        } else {
            $(this).show();
            count++;
        }
    });
});

$(".checkedboxes").click(function () {
    if ($(this).find("#icceper").hasClass("d-none")) {
        $(".checkedboxes").find("#icceper").removeClass("d-flex");
        $(".checkedboxes").find("#icceper").addClass("d-none");
        $(".checkedboxes").css("background-color", "unset");
        $(this).find("#icceper").removeClass("d-none");
        $(this).find("#icceper").addClass("d-flex");
        $(this).find("#icceper").addClass("checked");
        $("#exampleModalCenter").modal("hide");
        $(this).find("#icceper").addClass("d-flex");
        $(this).css("background-color", "#dedede");

        // $("#exampleModalCenter").removeClass("show");
        // $("#exampleModalCenter").css("display","none");
        // $("#exampleModalCenter").removeAttr("aria-modal");
        // $("#exampleModalCenter").attr("aria-hidden","true");
    } else {
    }
});
$("#changemobile").click(function () {
    if ($(".changeble ").hasClass("col-6")) {
        $(".changeble ").removeClass("col-6");
        $(".changeble ").addClass("col-12");
        $(".changeble ").css("transform", "scale(" + 1.2 + ")");
        $(".changeble ").css("margin-bottom", "10px");
    } else {
        $(".changeble ").removeClass("col-12");
        $(".changeble ").addClass("col-6");
        $(".changeble").css("transform", "scale(" + 1.0 + ")");
        $(".changeble").css("margin-bottom", "3px");
    }
});

$(".detailSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    nav: false,
    dots: false,
    asNavFor: ".detailSliderNav",
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: "00px",
                slidesToShow: 1,
                dots: true,
                nav: true,
            },
        },
    ],
});
$(".detailSliderNav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".detailSlider",
    dots: false,
    nav: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "00px",
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1152,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: "00px",
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "00px",
                slidesToShow: 3,
            },
        },
    ],
});
$(".dingleSlider").slick({
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
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

$(".sliderThumbnail").click(function () {
    var thumbImage = $("img", this).attr("data-img");
    $(".sliderMain a.productIMG > img").attr("src", thumbImage);
    $(".sliderMain a.productIMG  ").attr("href", thumbImage);
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
    } else {
        // $('#thumbnailDiv').stop();
        $("#thumbnailDiv").animate(
            { scrollTop: $("#thumbnailDiv").scrollTop() + 162 },
            500,
            "swing"
        );
        var current = $(".sliderThumbnail.current");
        $(".sliderThumbnail.current").next().addClass("current");
        current.removeClass("current");
        var srcCurrent = $("img", ".sliderThumbnail.current").attr("data-img");
        $(".sliderMain a.productIMG ").attr("href", srcCurrent);
        $(".sliderMain a.productIMG > img").attr("src", srcCurrent);
    }

    // $(".sliderThumbnail.current").removeClass("current");
});
$("#btn-up").click(function () {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    } else {
        // $('#thumbnailDiv').stop();
        $("#thumbnailDiv").animate(
            { scrollTop: $("#thumbnailDiv").scrollTop() - 162 },
            500,
            "swing"
        );
        var current = $(".sliderThumbnail.current");
        $(".sliderThumbnail.current").prev().addClass("current");
        current.removeClass("current");

        var srcCurrent = $("img", ".sliderThumbnail.current").attr("data-img");
        $(".sliderMain a.productIMG ").attr("href", srcCurrent);
        $(".sliderMain a.productIMG > img").attr("src", srcCurrent);
    }
});
// $("#thumbnailDiv").scroll(function(){
//   $('#thumbnailDiv').animate({scrollTop:$('#thumbnailDiv').scrollTop() - 162}, 500, 'swing');
// });
document.addEventListener("DOMContentLoaded", function () {
    const ele = document.getElementById("thumbnailDiv");
    if (ele) {
        ele.style.cursor = "grab";

        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e) {
            ele.style.cursor = "grabbing";
            ele.style.userSelect = "none";

            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
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
            ele.style.cursor = "grab";
            ele.style.removeProperty("user-select");

            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        // Attach the handler
        ele.addEventListener("mousedown", mouseDownHandler);
    }
});

$(".sliderMain").on("swiperight", function (event) {
    if ($(".sliderThumbnail").eq(0).hasClass("current")) {
    } else {
        // $('#thumbnailDiv').stop();
        $("#thumbnailDiv").animate(
            { scrollTop: $("#thumbnailDiv").scrollTop() - 162 },
            500,
            "swing"
        );
        var current = $(".sliderThumbnail.current");
        $(".sliderThumbnail.current").prev().addClass("current");
        current.removeClass("current");
        var srcCurrent = $("img", ".sliderThumbnail.current").attr("src");
        $(".sliderMain > img").attr("src", srcCurrent);
    }
});

$(".sliderMain").on("swipeleft", function (event) {
    var lengthofthumbs = $(".sliderThumbnail").length;
    parseInt(lengthofthumbs);
    lengthofthumbs = lengthofthumbs - 1;
    if ($(".sliderThumbnail").eq(lengthofthumbs).hasClass("current")) {
    } else {
        // $('#thumbnailDiv').stop();
        $("#thumbnailDiv").animate(
            { scrollTop: $("#thumbnailDiv").scrollTop() + 162 },
            500,
            "swing"
        );
        var current = $(".sliderThumbnail.current");
        $(".sliderThumbnail.current").next().addClass("current");
        current.removeClass("current");
        var srcCurrent = $("img", ".sliderThumbnail.current").attr("src");
        $(".sliderMain > img").attr("src", srcCurrent);
    }
});

$("#closeMobileAllDiv").click(function () {
    $(".mobile-fixed-category-menu-div").hide();
});
