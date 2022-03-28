let counter = 0;
$(function () {
  // let globalThis = this;
  console.log('This is working as well');
  $('p').click(function () {
    $(this).hide();
  });
  $('button').click(function () {
    $('img').hide();
    counter++;
    console.log(counter);
    if (counter > 0) {
      counter--;
      $('img').show()
    }
  });
});
