let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
document.getElementsByTagName("head")[0].appendChild(script);
//creates script element

$(document).ready(() => {

//triggers shopping cart link in order to have access to images in cart
    $("#tr_phase2_ShoppingBg").trigger("click")

console.log('h2 ', $("h2"))
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
    console.log('subtotal... ', subtotal)

    popupDiv.append(`<div> ${numItems} </div>`)
    popupDiv.append(`<div> ${subtotal} </div>`)
    console.log('image.... ',images[0] )
    popupDiv.append(`<img src="${images[0]}" width=25% height=25%/>`)


  };


  const overlay = () => {
    const overlayDiv = $('<div id="overlay"> </div>').css({
      position: "fixed",
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

      overlay();
      popup();
    }
  });
});


