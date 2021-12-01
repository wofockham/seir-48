'use strict';

var state = {
  page: 1,
  lastPage: false
};

var searchFlickr = function searchFlickr(keywords) {
  if (state.lastPage) return;
  console.log('Searching Flickr for', keywords);
  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    page: state.page++,
    format: 'json'
  }).done(showImages).done(function (info) {
    if (info.photos.page >= info.photos.pages) {
      state.lastPage = true;
    }
    console.log(info);
  });
};

var showImages = function showImages(results) {
  _(results.photos.photo).each(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL });
    $img.appendTo('#images');
  });
};

var generateURL = function generateURL(p) {
  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form from being submitted to the server.

    state.page = 1;
    state.lastPage = false;
    $('#images').empty();

    var searchTerm = $('#query').val();
    searchFlickr(searchTerm);
  });

  // Higher Order Function:
  var relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true); // Leading edge: don't wait

  // Twitchy!
  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

    if (scrollBottom < 700) {
      // TODO: adjust the conditional to suit your taste
      var searchTerm = $('#query').val();
      relaxedSearchFlickr(searchTerm);
    }
  });
});