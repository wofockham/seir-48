const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

const $ul = $('<ul></ul>');

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const $li = $(`<li>${ book.title } by ${ book.author }</li>`);

  if (book.alreadyRead) {
    $li.addClass('already-read');
  }

  $ul.append($li);
}

$ul.appendTo('body');
