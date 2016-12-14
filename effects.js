$( document ).ready(function() {
  $(".project4").hover(
    function(){
      $(this).filter(':not(:animated)').animate({
        marginLeft:'9px'
      },'slow');
      // This only fires if the row is not undergoing an animation when you mouseover it
    },
    function() {
      $(this).animate({
        marginLeft:'0px'
      },'slow');
    });
  });
});
