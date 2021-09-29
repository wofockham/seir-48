const button = document.getElementById('lib-button');

const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;

  const story = `${ name } really likes ${ adjective } ${ noun }.`;
  document.getElementById('story').innerText = story; // NB: only <input>s have .value
}

button.addEventListener('click', makeMadLib);
