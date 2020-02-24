const width = $(".field").width() - 100;

const height = () => {
  const randomHeight = $(".field").height() - 100;
  return 1 + Math.floor(Math.random() * randomHeight);
};

$(".ball").click(function() {
  debugger;
  let heightPos = height();
  let widthPos = width;
  if ($(".ball").css("left") == width.toString() + "px") {
    widthPos = 0;
  }
  $(".ball").animate({ left: widthPos, top: heightPos }, 500, function() {
    var gatesHeight = $(".field").height() / 2;
    var minGatesHeight = gatesHeight - $(".ball").height();
    var maxGatesHeight = gatesHeight + $(".ball").height();
    if (
      heightPos >= minGatesHeight &&
      heightPos + $(".ball").height() <= maxGatesHeight
    ) {
      $("h1").addClass("goal");
      if (widthPos > 0) {
        scoreLeft();
      } else {
        scoreRight();
      }
    } else {
      $("h1").removeClass("goal");
    }
  });
});
function scoreLeft() {
  let i = $(".left-score").text();
  i++;
  $(".left-score").text(i);
}
function scoreRight() {
  let i = $(".right-score").text();
  i++;
  $(".right-score").text(i);
}
