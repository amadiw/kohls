((kohls) => {
  $("#tr_phase2_ShoppingBg").trigger("click");

  let numItems = $(".number-items.boss-number-items.nonzero-items").text();
  let subtotal = $(".subtotal").text();
  let images = [...$(".kas-newpb-product-image")].map((el) => el.src);

  console.log("items: ", numItems, "subtotal: ", subtotal, "images: ", images);

  //popup modal
  const popup = () => {
    const popupDiv = $('<div id="popup"> </div>');

    popupDiv.prependTo($("#overlay")).css({
      position: "fixed",
      height: "300px",
      width: "600px",
      background: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });

    popupDiv.append('<button type="button" id="close"> X </button>');
    //      dismiss button action
    $("#close").css("float", "right");
    popupDiv.append('<button id="redirectCart"> Go to cart </button>');
    $("#redirectCart").css("background-color", "#008000");

    popupDiv.append(`<div id="numItems"> Items in cart:  ${numItems} </div>`);
    popupDiv.append(`<div id="subtotal"> Subtotal:  ${subtotal} </div>`);

    //renders cart images in popup div
    $.map(images, (el) => {
      popupDiv.append(
        `<img id="cartImage" src="${el}" width=25% height=25% />`
      );
    });

    $("#close").click(() => {
      $("#close").data("clicked", true);
      $("#overlay").hide();
      setTimeout(() => {
        if ($("#close").data("clicked")) {
          $("#overlay").show();
        }
      }, 300);
    });

    $("#redirectCart").click(() => {
      $(location).attr(
        "href",
        "https://www.kohls.com/checkout/shopping_cart.jsp"
      );
    });
  };

  //opaque overlay
  const overlay = () => {
    const overlayDiv = $('<div id="overlay"> </div>').css({
      position: "fixed",
      height: "100%",
      width: "100%",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      background: "rgba(0,0,0,.9)",
      display: "none",
    });

    overlayDiv.appendTo($("#container"));

    //hides banners
    $(".hp2-creative").hide();
    $("#header").hide();
    $("#open-drawer").hide();
    $(".slick-track").hide();
    $("#tce-hp-ml-1").hide();
    $("#oo_tab").hide();

    $("#overlay").show();
  };

  //trigger when user scrolls >=90% of page
  $(window).scroll(() => {
    //console.log('window.scrollTop: ', $(window).scrollTop) //515
    //console.log('document.height: ', $(document).height()) //1519
    //console.log('window.height', $(window).height()) //946
    if (
      $(window).scrollTop() / ($(document).height() - $(window).height()) >=
      0.9
    ) {
      overlay();
      popup();
    }
  });
})();
