$(function () {
  const mainVisual = $(".main_visual_wrap");

  function adjustSlideWidth() {
    let visualWidth = mainVisual.width();
    mainVisual.find("ul").css({ width: visualWidth * 3 });
    mainVisual.find("li").css({ width: visualWidth });
  }

  adjustSlideWidth(); // 초기 슬라이드 너비 설정

  $(window).resize(function () {
    adjustSlideWidth(); // 창 크기 변경 시 슬라이드 너비 다시 계산
  });

  mainVisual.find(".prev").click(function () {
    let visualWidth = mainVisual.width();
    mainVisual.find("ul").css({ "margin-left": -visualWidth });
    mainVisual
      .find("li:last-child")
      .insertBefore(mainVisual.find("li:first-child"));
    mainVisual.find("ul").animate({ "margin-left": 0 });
  });

  mainVisual.find(".next").click(function () {
    let visualWidth = mainVisual.width();
    mainVisual.find("ul").animate({ "margin-left": -visualWidth }, function () {
      mainVisual.find("ul").css({ "margin-left": 0 });
      mainVisual
        .find("li:first-child")
        .insertAfter(mainVisual.find("li:last-child"));
    });
  });

  $(".center_list .tabs li").click(function () {
    let n = $(this).index(); /*0 ~ 3*/

    $(".center_list .tabs li").not(this).removeClass();
    $(this).addClass("center" + (n + 1));

    $(".business6 .content").hide();
    $(".business6 .content").eq(n).show();
  });

  // $('.business6 .center_btns a').mouseenter(function() {
  //   $(this).removeClass('btn_view')
  // })
  // $('.business6 .center_btns a').mouseleave(function() {
  //   $(this).addClass('btn_view')
  // })
  $(".business6 .center_btns a:first-child").hover(
    function () {
      $(this).removeClass("btn_view");
    },
    function () {
      $(this).addClass("btn_view");
    }
  );
});
