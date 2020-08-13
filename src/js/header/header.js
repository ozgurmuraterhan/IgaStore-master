$(document).ready(function () {
    $(".mainBanner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 9999,
    });
    $("#dropdownCategory")
        .parent(".dropdown")
        .hover(function () {
            $("#dropdownCategoryMenu").collapse("show");
        });
    $("#dropdownCategory")
        .parent(".dropdown")
        .hover(function () {
            $("#dropdownCategoryMenu").collapse("show");
        });
    $("#dropdownCategoryMenu").hover(function () {
        $("#dropdownCategoryMenu").collapse("show");
    });
    $("#dropdownCategoryMenu").mouseleave(function () {
        $("#dropdownCategoryMenu").collapse("hide");
    });

    $("#dropdownJourneyBtn")
        .parent(".dropdown")
        .hover(function () {
            $("#dropdownJourneyMenu").collapse("show");
        });
    $("#dropdownJourneyMenu").hover(function () {
        $("#dropdownJourneyMenu").collapse("show");
    });
    $("#dropdownJourneyMenu").mouseleave(function () {
        $("#dropdownJourneyMenu").collapse("hide");
    });
    $("#header").hover(function () {
        $("#dropdownCategoryMenu").collapse("hide");
    });
    $("#dropdownJourneyBtn").mouseenter(function () {
        $("#dropdownContainerMenu").collapse("hide");
    });
    $("#deneme").hover(function () {
        $("#dropdownContainerMenu").collapse("hide");
    });
    $(".nav-pills > a").mouseenter(function () {
        $(this).tab("show");
        $(".tabpane").tab("hide");
    });

    $("#openMobileCategoryTab").on("click", () => {
        $(".mobile-fixed-category-menu-div").toggle();
    });
});
