const state = {
  page: 1,
  lastPage: false,
  requestInProgress: false
};

const searchFlickr = function (keywords) {
  if (state.lastPage || state.requestInProgress) return;
  console.log('Searching Flickr for', keywords);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  state.requestInProgress = true;
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    page: state.page++,
    format: 'json'
  }).done(showImages).done(function (info) {
    state.requestInProgress = false;
    if (info.photos.page >= info.photos.pages) {
      state.lastPage = true;
    }
    console.log(info);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};


$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form from being submitted to the server.

    state.page = 1;
    state.lastPage = false;
    $('#images').empty();

    const searchTerm = $('#query').val();
    searchFlickr( searchTerm );
  });

  // Twitchy!
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

    if (scrollBottom < 700) { // TODO: adjust the conditional to suit your taste
      const searchTerm = $('#query').val();
      searchFlickr( searchTerm );
    }
  });
});
