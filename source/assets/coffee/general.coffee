thirty_pc = ->
  height = $(window).height()
  thirtypc = (105 * height) / 100
  thirtypc = parseInt(thirtypc) + "px"
  $(".intro").css "height", thirtypc
  $(".contact").css "height", thirtypc
$(document).ready ->
  thirty_pc()
  $(window).bind "resize", thirty_pc