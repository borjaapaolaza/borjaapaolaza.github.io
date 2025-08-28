$(document).ready(function() {

  // Write the page footer
  $("#page-footer").load("footer.html", function() {
    $(document).tooltip({
      selector: '[data-toggle="tooltip"]'
    });

    console.log("Footer loaded.");
    // Add the current year to copyright
    const thisYear = new Date().getFullYear();
    $("#footer-year").text(thisYear);
  });

  // Scroll to top button ---------------------------------------------
  window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  };

  // Navbar visibility toggle on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("page-navbar");
    if (window.scrollY === 0) {
      navbar.classList.remove("visible"); // Hide navbar when at the top
    } else {
      navbar.classList.add("visible"); // Show navbar when scrolling
    }
  });

  // Scroll to top
  $('#back-to-top').on("click", function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, function() {
          var $target = $(target);
          $target.focus();
          if (!$target.is(":focus")) {
            $target.attr('tabindex', '-1');
            $target.focus();
          }
        });
      }
    }
  });

  // Initially hide the read more div
  $("#read-more").css("display", "none");

  // Show more on click
  $("#badge-more").on("click", function() {
    $("#read-more").slideToggle();
    if ($("#badge-more").text() == "More") {
      $("#badge-more").empty().append("Less");
    } else {
      $("#badge-more").empty().append("More");
    }
  });

  // Open all accordion panels for possible printing or close ----------- 
  $(".expander").on("click", function() {
    if ($(".expander").text() === "show all") {
      $(".expander").text("hide all");
      $("#wrapper .collapse").collapse('show');
      $("#teaching-section .btn").prev().find("i").addClass("fa-rotate-45");
    } else {
      $(".expander").text("show all");
      $("#wrapper .collapse").collapse('hide');
      $("#teaching-section .btn").prev().find("i").removeClass("fa-rotate-45");
    }
  });

});
// document ready