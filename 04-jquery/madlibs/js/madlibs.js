const makeMadLib = function () { // Global scope
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const name = $('#person').val();

  const story = `${ name } really likes ${ adjective } ${ noun }`;
  $('#story').prepend(`<p>${ story }</p>`);
};

// Javascript is asynchronous
$(document).ready(function () {
  $('#lib-button').on('click', makeMadLib);

  $('h1').funText(500, 'reverseCandy');
  $('li').funText(100, 'rainbow');
});
