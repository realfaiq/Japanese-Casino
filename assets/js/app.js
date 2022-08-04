$(document).ready(() => {
  $(".hamburger").on("click", () => {
    $(".sidebar")
      .css({ opacity: "0.0", visibility: "visible" })
      .animate({ opacity: "1.0" });
  });
  $(".cross").on("click", () => {
    $(".sidebar")
      .css({ opacity: "1.0", visibility: "visible" })
      .animate({ opacity: "0" }, 200);
  });

  //Jquery Slider
  var speed = 400; //Fade Speed
  var auto_switch = true; //AutoSwitch-Slider
  var auto_switch_speed = 4000; //Auto Speed Slider
  $(".slide").first().addClass("active");
  $(".slide").hide();
  $(".active").show();
  $("#next").on("click", nextSlide);
  $("#prev").on("click", prevSlide);
  if (auto_switch == true) {
    setInterval(nextSlide, auto_switch_speed);
  }
  function nextSlide() {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":last-child")) {
      $(".slide").first().addClass("active");
    } else {
      $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }
  function prevSlide() {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":first-child")) {
      $(".slide").last().addClass("active");
    } else {
      $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }

  $(".nav-link").on("click", () => {
    $(".sidebar").css({ visibility: "hidden" });
  });

  // Smooth Scrolling
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });
});
