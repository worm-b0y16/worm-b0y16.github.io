var imageData;
const sortButton = document.querySelectorAll(".sortButton");
const artDisplay = document.querySelector(".artDisplay");
const sourceList = ["utau", "splatoon"];
var twentyThreeList = [];
var twentyFourList = [];
var utauList = [];
var splatoonList = [];
var otherList = [];

addEventListener("load", populate);
sortButton[0].addEventListener("click", twentyThreeSort);
sortButton[1].addEventListener("click", twentyFourSort);
sortButton[2].addEventListener("click", utauSort);
sortButton[3].addEventListener("click", splatoonSort);
sortButton[4].addEventListener("click", otherSort);

function twentyThreeSort() {
    twentyThreeList = [];
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData.art[i].tags.year) == 23) {
            temp = imageData.art[i].index;
            temp = newLength = twentyThreeList.push(temp);
        }
    }
    update (twentyThreeList);
}
function twentyFourSort() {
    twentyFourList = [];
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData.art[i].tags.year) == 24) {
            temp = imageData.art[i].index;
            temp = newLength = twentyFourList.push(temp);
        }
    }
    update (twentyFourList);
}

function utauSort() {
    utauList = [];
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData.art[i].tags.source) == "utau") {
            temp = imageData.art[i].index;
            temp = newLength = utauList.push(temp);
        }
    }
    update (utauList);
}
function splatoonSort() {
    splatoonList = [];
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData.art[i].tags.source) == "splatoon") {
            temp = imageData.art[i].index;
            temp = newLength = splatoonList.push(temp);
        }
    }
    update (splatoonSort);
}
function otherSort() {
    otherList = [];
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if (((imageData.art[i].tags.source) != "splatoon") && ((imageData.art[i].tags.source) != "utau")) {
            temp = imageData.art[i].index;
            temp = newLength = otherList.push(temp);
        }
    }
    update(otherSort);
}

async function populate() {
  try {
    const requestURL = 
      "https://worm-b0y16.github.io/scripts/artData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    imageData = await response.json();
    updateImage();
  } catch (error) {
    const sort = document.querySelector(".sort");
    sort.style.display = ("none");
  }
}

function update (list) {
    imageDisplay.innerHtml = [];
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    for (var i = 0; i < list.length; i++){
        const newImageContainer = document.createElement("div");
        newImageContainer.setAttribute("class", "drawing");
        const newImage = document.createElement("img");
        temp1 = list[i]
        temp2 = "images/art/" + imageData.art[temp1].name;
        temp3 = imageData.art[temp1].alt;
        temp4 = imageData.art[temp1].date;
        newImage.setAttribute("src", temp2);
        newImage.setAttribute("alt", temp3);
    }
}
