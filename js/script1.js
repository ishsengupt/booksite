$(".card-1").click(function() {
  if ($(".inverted-info").css("opacity") == "0") {
    $(".inverted-info").css({
      transform: "translate(-12px, -50px)"
    });
    $(".toggle-card-on-info").css({
      width: "275px"
    });
    $(".card-1").css({
      width: "120px",
      height: "180px"
    });
    $(".inverted-info").animate(
      {
        opacity: 1
      },
      300
    );
    $(".text-dissapear").animate(
      {
        opacity: 0
      },
      300
    );
  } else {
    $(".inverted-info").css({
      transform: "translate(-12px, -50px)"
    });
    $(".toggle-card-on-info").css({
      width: "100px"
    });
    $(".card-1").css({
      width: "100px",
      height: "150px"
    });
    $(".inverted-info").animate(
      {
        opacity: 0
      },
      300
    );
    $(".text-dissapear").animate(
      {
        opacity: 1
      },
      300
    );
  }
});
