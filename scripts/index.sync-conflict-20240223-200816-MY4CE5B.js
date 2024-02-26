const dogImageButton = document.querySelector(".dogImageButton");
const newImageButton = document.querySelector(".dogImageButton");
var dogImage = document.querySelector(".dogImageContainer");
var isShown = 1;
var imageIndex = getRandomIndex(29);

addEventListener("load", toggleDogImage);
addEventListener("load", populate);
dogImageButton.addEventListener("click", toggleDogImage);
newImageButton.addEventListener("click", newImage);

function toggleDogImage() {
    if (isShown == 0) {
        dogImage.style.display = ("block");
        isShown = 1;
    } else {
        dogImage.style.display = ("none");
		isShown = 0;
    }
}
function newImage() {

}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

async function populate() {
    const requestURL =
      "https://worm-b0y.neocities.org/scripts/dogImageData.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const dogImages = await response.json();
  
    populateImageData(dogImages);
  }
  