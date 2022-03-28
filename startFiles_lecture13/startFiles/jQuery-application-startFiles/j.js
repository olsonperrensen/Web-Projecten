let counter = 1;
$(function () {
    $("p").hide();
    $('#iphonescreen').hide()
  $('.turnphoneon').click(function () {
    if (counter === 1) {
      $('#iphonescreen').fadeIn();
      counter--;
    }
  });
  $(".turnphoneoff").click(function(){
    if (counter === 0){
        $('#iphonescreen').fadeOut();
        counter++;
    }
  })
  $(".toggle").click(function(){
      $("p").slideToggle()
  })
});
