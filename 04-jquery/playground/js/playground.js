$(document).ready(function () {
  $('#name').on('keyup', function () {
    const name = $('#name').val();
    $('header h1').text('Welcome ' + name);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  $(window).on('mousemove', function (event) {
    const opacity = event.clientY / window.innerHeight;
    $('img').css('opacity', opacity); // 0..1.
  });
});
