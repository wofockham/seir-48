

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'cheesecake, <em>butterflies</em>, hotdogs';
document.getElementById('hometown').innerHTML = 'Sydney';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const image = document.createElement('img'); // detached DOM node
image.src = 'http://www.fillmurray.com/250/400';
document.body.appendChild(image);            // attach the DOM node to make it visible
