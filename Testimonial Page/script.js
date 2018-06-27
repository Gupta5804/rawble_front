$('#right-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "+=200px"
  }, "slow");
});

 $('#left-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "-=200px"
  }, "slow");
});

$('#right-button2').click(function() {
  event.preventDefault();
  $('#content2').animate({
    scrollLeft: "+=200px"
  }, "slow");
});

 $('#left-button2').click(function() {
  event.preventDefault();
  $('#content2').animate({
    scrollLeft: "-=200px"
  }, "slow");
});