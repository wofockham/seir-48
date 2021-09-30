const thumbnailify = function ($link) {
  const href = $link.attr('href'); // getter: returns a string
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $image = $('<img>'); // detached jQuery object
  $image.attr('src', thumbnailURL); // setter: sets 'src' to some value.

  $link.prepend($image);

  $link.on('click', function (event) {
    event.preventDefault(); // Don't let the browser "follow" the link.
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#player').hide().html(embedHTML).fadeIn(5000); // chaining: fluent interface
  });
};

const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // equivalent to $links[i] BUT the DOM node will still be jQuery powered
  thumbnailify($link);
}
