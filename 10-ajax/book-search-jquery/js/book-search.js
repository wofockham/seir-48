const fetchCover = function (event) {
  event.preventDefault(); // stay on this page
  const title = $('#title').val();

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (data) {
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  });
};

$('form').on('submit', fetchCover);
