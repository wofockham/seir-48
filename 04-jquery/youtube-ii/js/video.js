const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // equivalent to $links[i] BUT the DOM node will still be jQuery powered
  const href = $link.attr('href'); // getter: returns a string
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $image = $('<img>'); // detached jQuery object
  $image.attr('src', thumbnailURL); // setter: sets 'src' to some value.

  $link.prepend($image);
}

// Goals: Aim for this
// $('a').each(function () {
//   const href = $(this).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnailURL).prependTo(this); // chaining
// });

// Too clever
// $('a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//   );
// });
