const dogImageButton = document.querySelector(".dogImageButton");
const newImageButton = document.querySelector(".newImageButton");
const dogImage = document.querySelector(".dogImage");
const dogImageContainer = document.querySelector(".dogImageContainer");
const dogImageDesc = document.querySelector(".dogImageDesc");
var imageData;
var done = 0;
var imageIndex = getRandomIndex(30);
var isShown = 1;

addEventListener("load", toggleDogImage);
addEventListener("load", populate);
dogImageButton.addEventListener("click", toggleDogImage);
newImageButton.addEventListener("click", updateImage);

function toggleDogImage() {
    if (isShown == 0) {
      dogImageContainer.style.display = ("block");
      isShown = 1;
    } else {
      dogImageContainer.style.display = ("none");
		  isShown = 0;
    }
}

function updateImage() {
  imageIndex = getRandomIndex(30);
  var imgName = ("src=\"images/dog/dog" + imageIndex + "." + imageData["dogImages"][imageIndex].extension + "\"");
  var imgAlt = ("alt=\"" + imageData["dogImages"][imageIndex].alt + "\"");
  var imgDesc = imageData["dogImages"][imageIndex].desc;
  dogImage.innerHTML = "<img " + imgName + imgAlt + " class=\"dogImage\"/>";
  dogImageDesc.innerHTML = imgDesc;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

async function populate() {
    const requestURL = 
      "https://github.com/worm-b0y16/worm-b0y16.github.io/blob/30be28972024d6fa19c9d7d786ed093266e34fbc/scripts/dogImageData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    imageData = await response.json();
    updateImage();
}
  
