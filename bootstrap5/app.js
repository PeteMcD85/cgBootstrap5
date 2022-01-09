$(function() {
  let w = window.innerWidth,
    viewport = document.querySelector('meta[name="viewport"]');

  console.log(w);
  console.log(viewport);

  document.getElementById("desktopVersion").addEventListener("click", resize);
  //Resize window
  function resize() {
    if (w <= 768) {
      viewport.setAttribute("content", content = "width = 1060px, maximum - scale = 1.0, User-scalable=yes");
      $('.desktop').removeClass('mx-md-1').addClass('mx-1');
      $('.desktop-row').removeClass('row').addClass('column');;
    } else {
      viewport.setAttribute("content", content = "width=device-width, initial-scale=1");
    }
  }
  // end of resize()

});
// end of app.js function
