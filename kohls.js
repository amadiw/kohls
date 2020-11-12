((kohlsCart) => {
  $("#tr_phase2_ShoppingBg").trigger("click");

  let numItems = $(".number-items.boss-number-items.nonzero-items").text();
  let subtotal = $(".subtotal").text();
  let images = [...$(".kas-newpb-product-image")].map((el) => el.src);

  //popup modal
  const popup = () => {
    const popupDiv = $('<div id="popup"> </div>');
    popupDiv.append('<button type="button" id="close"> X </button>');
    popupDiv.append('<button id="redirectBtn" > Go to cart </button>');
    popupDiv.append(`<div id="numItems" class="text"> SHOPPING CART (${numItems})</div>`);
    popupDiv.append(`<div id="subtotal" class="text"> SUBTOTAL:  ${subtotal} </div>`);

    popupDiv.prependTo($("#overlay")).css({
      position: "fixed",
      height: "370px",
      width: "560px",
      overflow: "scroll",
      background: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "10px solid #157D9A"
    });

    $('.text').css({
      fontfamily: "verdana,helvetica,arial,sans-serif",
      fontSize: "18px",
      color: "black",
      marginLeft: "20px",
      marginBottom: "10px"
    })

    $("#close").css({
      float: "right",
      backgroundColor: "rgba(255, 255, 255)",
      fontSize: '22px',
      font: 'arial',
      margin: '20px'

    });

    $("#redirectBtn").css({
       backgroundColor: "#008000",
       fontfamily: "verdana,helvetica,arial,sans-serif",
       fontSize: '18px',
       color: 'white',
       margin: '20px',
       height: '40px',
       width: '200px'
       });

    //Renders cart images in popup div
    $.map(images, (el) => {
      popupDiv.append(
        `<img class="cartImage" src="${el}" width='180px' height='180px'/>`
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

    $("#redirectBtn").click(() => {
      $(location).attr(
        "href",
        "https://www.kohls.com/checkout/shopping_cart.jsp"
      );
    });
  };

  //Opaque overlay
  const overlay = () => {
     $("#container").append('<div id="overlay"> </div>')

     $("#overlay").css({
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
    if ($(window).scrollTop() / ($(document).height() - $(window).height()) >= 0.9) {
      overlay();
      popup();
    }
  });
})();
