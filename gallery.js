$(function () {
    function sumSection() {
        return $(".container").height();
    }
    function setDimensionBar() {
        $(".bar").css({
            "height": ($(window).height() / sumSection()) * 100 + "%"
        });
    }
    function setSection() {
        $.each($("section"), function (i, element) {
            $(element).css({
                "min-height": $(window).height()
            });
        });
    }
    function addBehaviours() {
        var sections = $("section");
        $.each($(".node"), function (i, element) {
            $(element).on("click", function (e) {
                e.preventDefault();
                var scroll = $(sections[i]).offset().top;
                $('html, body').animate({
                    scrollTop: scroll
                }, 500);
            });
        });
    }
    function arrangeNodes() {
        $(".node").remove();
        $.each($("section"), function (i, element) {
            var name = $(element).data("name");
            var node = $("<li class='node'><span>" + name + "</span></li>");
            $(".timeline").append(node);
            $(node).css({
                "top": ($(".timeline").height() / $(document).height()) * $(element).offset().top
            });
        });
        addBehaviours();
    }
    $(window).on("scroll", function () {
        var top = (window.scrollY / sumSection()) * 100;
        $(".bar").css({
            "top": top + "%"
        });
    });
    $(window).on("resize", function () {
        setSection();
        arrangeNodes();
        setDimensionBar();
    });
    setTimeout(function () {
        setSection();
        arrangeNodes();
        setDimensionBar();
    }, 200);
});
console.log("1234")
$( ".img-wrapper" ).hover(
  function() {
    $(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');


$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

$overlay.hide();

$(".img-overlay").click(function(event) {

  event.preventDefault();

  var imageLocation = $(this).prev().attr("href");

  $image.attr("src", imageLocation);

  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

$nextButton.click(function(event) {
  $("#overlay img").hide();
  var $currentImgSrc = $("#overlay img").attr("src");
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  var $images = $("#image-gallery img");
  if ($nextImg.length > 0) { 
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  event.stopPropagation();
});

$prevButton.click(function(event) {
  $("#overlay img").hide();
  var $currentImgSrc = $("#overlay img").attr("src");
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  event.stopPropagation();
});

$exitButton.click(function() {
  $("#overlay").fadeOut("slow");
});