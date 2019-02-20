$(document).ready(function () {
  // Materialize initialization for parallax
  $('.parallax').parallax();
});

// Footer effect
$(window).scroll(function (event) {
  function footer() {
    var scroll = $(window).scrollTop();
    if (scroll > 50 ) {
      $(".page-footer").fadeOut("slow").addClass("show");
    } else {
      $(".page-footer").fadeIn("slow").removeClass("show");
    }

    clearTimeout($.data(this, 'scrollTimer'));

    $.data(this, 'scrollTimer', setTimeout(function () {
      if ($('.page-footer').is(':hover')) {
        footer();
      } else {
        $(".page-footer").fadeIn("slow");
      }
    }, 2000));
  }
  footer();
});

// Nav Bar Contact
$("#nav-contact").on("click", function() {
  var contact = $("#contact-icon");
  contact.attr("class", "btn-floating cyan pulse");
})

$("#contact-icon").on("click", function() {
  $("#contact-icon").removeAttr("class","btn-floating cyan pulse");
})