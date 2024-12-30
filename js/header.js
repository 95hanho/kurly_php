(function ($, window, document) {
  const Kurly = {
    init: function () {
      this.header();
    },
    header: function () {
      const $document = $(document);
      const $window = $(window);
      const $header = $("#header");
      const $headerMapBtn = $("#header .map-btn");
      const $headerHeartBtn = $("#header .heart-btn");
      const $headerCartBtn = $("#header .cart-btn");
      const $headerHamBarBtn = $("#header .ham-bar-btn");
      const $headerPath = $("#header .map-btn")
        .children()
        .attr("src")
        .split("/img/")[0];

      // 윈도우 객체 스크롤 이벤트
      // 스크롤이 발생하면 이벤트 발생
      $window.scroll(function () {
        //스클롤 발생하면
        //현재 윈도우 스크롤 탑값을 콘솔에 찍는다
        // console.log( $(this).scrollTop() );

        if ($(this).scrollTop() >= 142) {
          $header.addClass("on");
        } else {
          $header.removeClass("on");
        }
      });

      // 2행 아이콘 버튼 이벤트
      // on() off()
      $headerMapBtn.on({
        mouseover: function () {
          $(this)
            .children()
            .attr("src", $headerPath + "/img/map_hover.svg");
        },
        mouseout: function () {
          $(this)
            .children()
            .attr("src", $headerPath + "/img/map.svg");
        },
      });

      $headerHeartBtn.on({
        mouseenter: function () {
          $(this)
            .find("img")
            .attr("src", $headerPath + "/img/heart_hover.svg");
        },
        mouseleave: function () {
          $(this)
            .find("img")
            .attr("src", $headerPath + "/img/heart.svg");
        },
      });

      $headerCartBtn.on({
        mouseenter: function () {
          $(this)
            .find("img")
            .prop("src", $headerPath + "/img/cart_hover.svg");
        },
        mouseleave: function () {
          $(this)
            .find("img")
            .prop("src", $headerPath + "/img/cart.svg");
        },
      });

      $headerHamBarBtn.on({
        mouseenter: function () {
          $(this)
            .find("img")
            .attr("src", $headerPath + "/img/menu_ba_hoverr.svg");
        },
        mouseleave: function () {
          $(this)
            .find("img")
            .attr("src", $headerPath + "/img/menu_bar.svg");
        },
      });
    },
  };

  Kurly.init();
})(jQuery, window, document);
