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
});
// end of doc ready function
