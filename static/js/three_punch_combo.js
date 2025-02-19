$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    $("#start").hide();
    $("#stop").show();
  }
});
$("#stop").click(function () {
  alert("这么挑剔？今天别看了！");
  $(this).hide();
  // $("#banner").show();
});
// $("#close_banner").click(function () {
//   $("#banner").hide();
// });