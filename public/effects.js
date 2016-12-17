$(document).ready(function() {
  $('.row1').mouseenter(function() {
    $(this).animate({
      height: '+=50px',
    });
  });
  $('.row1').mouseleave(function() {
    $(this).animate({
      height: '-=50px'
    });
  });
});
