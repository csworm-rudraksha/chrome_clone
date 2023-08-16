const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', e => {
  e.preventDefault();
  const searchTerm = searchBox.value;
  const url = `https://www.google.com/search?q=${searchTerm}`;
  window.location.href = url;
});
