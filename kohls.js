let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
document.getElementsByTagName("head")[0].appendChild(script);
//creates script element

$(document).ready(() => {
  const shoppingCart = () => {
    $(".tr_phase2_headerPanel.tr_phase2_headerPanel_ghr.sliderInitDone").show();
    let numItems = $(".number-items.boss-number-items.nonzero-items").text();
    let subtotal = $(".subtotal").text();

    let hiddenPanel = $(
      ".tr_phase2_headerPanel.tr_phase2_headerPanel_ghr.sliderInitDone"
    );
    console.log("hiddenPanel.... ", hiddenPanel);

    let images = [...$(".kas-newpb-product-image")].map((el) => el.src);
    console.log(
      "items: ",
      numItems,
      "subtotal: ",
      subtotal,
      "images: ",
      images
    );
  };

  const popup = () => {
    const popupDiv = $('<div id="popup"> </div>');

    popupDiv.prependTo($("#overlay")).css({
      position: "fixed",
      height: "300px",
      width: "600px",
      background: "yellow",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });
    console.log("hello from popup()");

    // const itemsQty = $('<div id="itemsQty">Items in Cart: ${numItems} </div>')
    // $('#popup').appendTo(itemsQty)
    // $( ".inner" ).append( "<p>Test</p>" )
  };

  shoppingCart();

  const overlay = () => {
    const overlayDiv = $('<div id="overlay"> </div>').css({
      position: "relative",
      height: "100%",
      width: "100%",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      background: "black",
      display: "none",
      opacity: ".97",
    });

    overlayDiv.appendTo(document.body);
    $(".hp2-creative").hide();
    $("#header").hide();
    $("#open-drawer").hide();
    $("#overlay").fadeIn();
  };
  $(window).scroll(() => {
    if (
      $(window).scrollTop() / ($(document).height() - $(window).height()) >=
      0.9
    ) {
      //                 alert('window scrolled!')
      //$('#container').css('background', 'green')

      overlay();

      popup();
    }
  });
});

/* available = $(document).height();
    percentage_of_page = 0.5;
    half_screen = available * percentage_of_page;
    height = $(window).scrollTop();
    if ( height > half_screen ) {

var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
					var scrollPercentRounded = Math.round(scrollPercent*100)
    */
