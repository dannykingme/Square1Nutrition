(function() {
  var thirty_pc;

  thirty_pc = function() {
    var height, thirtypc;
    height = $(window).height();
    thirtypc = (105 * height) / 100;
    thirtypc = parseInt(thirtypc) + "px";
    $(".intro").css("height", thirtypc);
    return $(".contact").css("height", thirtypc);
  };

  $(document).ready(function() {
    thirty_pc();
    return $(window).bind("resize", thirty_pc);
  });

}).call(this);
