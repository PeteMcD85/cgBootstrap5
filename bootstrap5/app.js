$(document).ready(function() {
  var viewport = $('meta[name="viewport"]'),
    windowWidth = $(window).width();
  // currentHTMLinsertAfter = $("#search-advance-potd").insertAfter($("#desktop-search-advance-potd")),
  // currentHTMLcontents = $("#search-advance-potd-content").contents($("#search-advance-potd")),
  // htmlFunction = $("#search-advance-potd").html(),
  // innerHtmlFunction = $("#search-advance-potd").innerHTML,
  // textFunction = $("#search-advance-potd").text();
  // var one = $('.a').innerHTML

  windowWidth = $(window).width(),
    currentHTMLinsertAfter = $("#get-search-advance-potd-content").insertAfter($("#desktop-search-advance-potd")),
    currentHTMLcontents = $("#get-search-advance-potd-content").contents($("#search-advance-potd")),
    htmlFunction = $("#search-advance-potd").html(),
    innerHtmlFunction = $("#search-advance-potd").innerHTML,
    textFunction = $("#search-advance-potd").text();

  console.log("viewport");
  console.log(viewport);
  console.log("currentHTMLinsertAfter");
  console.log(currentHTMLinsertAfter);
  console.log("currentHTMLcontents");
  console.log(currentHTMLcontents);
  console.log('htmlFunction');
  console.log(htmlFunction);
  console.log('innerHtmlFunction');
  console.log(innerHtmlFunction);
  console.log('textFunction');
  console.log(textFunction);

  $("#mobileVersion").click(resizeMobile);
  // document.getElementById("mobileVersion").addEventListener("click", resizeMobile);
  $("#desktopVersion").click(resize);
  // document.getElementById("desktopVersion").addEventListener("click", resize);

  $(window).resize(function() {
    windowWidth = $(window).width();
    console.log("windowWidth");
    console.log(windowWidth);
    if (windowWidth >= 576) {
      console.log("greater than 576");
      $(".middle-bottom-accordion").removeClass('border').addClass('border-none');
      $(".middle-bottom-accordion").removeClass('border-1');
      $(".middle-bottom-accordion").removeClass('border-dark');

      // $('#left-start-column').css('max-width', '190px');
      // $('#left-start-column').css('min-width', '190px');
      // // $('#mid-middle-column').css('width', '');
      // $('#right-end-column').css('width', '190px');

      // var currentHTML = $("#search-advance-potd").html();
      // console.log('currentHTML');
      // console.log(currentHTML);
      // $("#desktop-search-advance-potd").html(currentHTMLinsertAfter);
      // $("#search-advance-potd").html(currentHTML);
      // $(".columns-one-order").removeClass('order-2').addClass('order-1');
      // $(".columns-two-order").removeClass('order-1').addClass('order-2');
      // $(".columns-three-order").removeClass('order-3').addClass('order-3');
    } else {
      $(".middle-bottom-accordion").addClass('border');
      $(".middle-bottom-accordion").addClass('border-1');
      $(".middle-bottom-accordion").addClass('border-dark');
      // $(".columns-one-order").removeClass('order-1').addClass('order-2');
      // $(".columns-two-order").removeClass('order-2').addClass('order-1');
      // $(".columns-three-order").removeClass('order-3').addClass('order-3');
    }
  });

  //Resize window
  function resize() {
    if (windowWidth <= 576) {
      // viewport.setAttribute("content", content = "width = 1060px, maximum - scale = 1.0, User-scalable=yes");
      viewport.attr("content", "width = 1060px, maximum - scale = 1.0, User-scalable=yes")
      $('.desktop-row').removeClass('row').addClass('column');
      $('.desktop').removeClass('row').addClass('column');

    }
    // end of ifStatement
  }
  // end of resize()

  function resizeMobile() {
    viewport.attr("content", content = "width=device-width, initial-scale=1");
    $('.desktop-row').removeClass('column').addClass('row');
    $('.desktop').removeClass('column').addClass('row');
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
