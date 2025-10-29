const img = document.querySelector("img");
const changePhotoBtn = document.getElementById("change-photo-btn");
const API_KEY = "IwgMnFuKTWxb0LTPFsyL0xf8nboRvqUY";

function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 404) throw new Error("GIF not found!");
    if (response.status === 401) throw new Error("Unauthorized API key!");
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function randomPhoto() {
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=cats`)
    .then(handleResponse)
    .then((data) => (img.src = data.data.images.original.url))
    .catch((err) => {
      console.error(`Fetch failed: ${err}`);
    });
}

randomPhoto();
changePhotoBtn.addEventListener("click", randomPhoto);

function findPhoto(keyword) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`
  )
    .then(handleResponse)
    .then((data) => (img.src = data.data.images.original.url))
    .catch((err) => console.error(`Fetch failed: ${err}`));
}

const searchBox = document.getElementById("search-box");
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const keyword = searchBox.value.trim();
    if (keyword) findPhoto(keyword);
  }
});
