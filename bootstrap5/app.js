$(function() {
  let w = window.innerWidth,
    viewport = document.querySelector('meta[name="viewport"]');

  console.log(w);
  console.log(viewport);

  document.getElementById("desktopVersion").addEventListener("click", resize);
  document.getElementById("mobileVersion").addEventListener("click", resizeMobile);
  //Resize window
  function resize() {
    if (w <= 768) {
      viewport.setAttribute("content", content = "width = 1060px, maximum - scale = 1.0, User-scalable=yes");
      $('.desktop').removeClass('mx-md-1').addClass('mx-1');
      $('.desktop-row').removeClass('row').addClass('column');
    }
    // end of ifStatement
  }
  // end of resize()

  function resizeMobile() {
    viewport.setAttribute("content", content = "width=device-width, initial-scale=1");
    $('.desktop').removeClass(' mx-1').addClass('mx-md-1');
    $('.desktop-row').removeClass('column').addClass('row');
  }
  // end of resizeMobile()
});
// end of app.js function
