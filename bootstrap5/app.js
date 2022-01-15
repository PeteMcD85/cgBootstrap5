$(document).ready(function() {
  let viewport = $('meta[name="viewport"]'),
    windowWidth = $(window).width();
  console.log("viewport");
  console.log(viewport);

  $("#mobileVersion").click(resizeMobile);
  // document.getElementById("mobileVersion").addEventListener("click", resizeMobile);
  $("#desktopVersion").click(resize);
  // document.getElementById("desktopVersion").addEventListener("click", resize);

  $(window).resize(function() {
    windowWidth = $(window).width();
    console.log("windowWidth");
    console.log(windowWidth);
    if (windowWidth >= 576) {
      console.log("greater thatn 576");
      $(".middle-bottom-accordion").removeClass('border').addClass('border-none');
      $(".middle-bottom-accordion").removeClass('border-1');
      $(".middle-bottom-accordion").removeClass('border-dark');
    } else {
      $(".middle-bottom-accordion").addClass('border');
      $(".middle-bottom-accordion").addClass('border-1');
      $(".middle-bottom-accordion").addClass('border-dark');
    }
  });

  //Resize window
  function resize() {
    if (windowWidth <= 576) {
      // viewport.setAttribute("content", content = "width = 1060px, maximum - scale = 1.0, User-scalable=yes");
      viewport.attr("content", "width = 1060px, maximum - scale = 1.0, User-scalable=yes")
      $('.desktop-row').removeClass('row').addClass('column');
    }
    // end of ifStatement
  }
  // end of resize()

  function resizeMobile() {
    viewport.attr("content", content = "width=device-width, initial-scale=1");
    $('.desktop-row').removeClass('column').addClass('row');
  }
  // end of resizeMobile()


  function borderNone() {
    if (windowWidth >= 576) {
      // $(".middle-bottom-accordion").removeClass('border');
      // $(".middle-bottom-accordion").removeClass('border-1');
      // $(".middle-bottom-accordion").removeClass('border-dark');
      console.log("greater than 576");
    }
  }

});
// end of doc ready function
