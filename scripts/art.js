var imageData;
const sortButton = document.querySelectorAll(".sortButton");
const artDisplay = document.querySelector(".artDisplay");
var twentyThreeList = [];
var twentyTwoList = [];
var utauList = [];
var splatoonList = [];
var otherList = [];

addEventListener("load", populate);
sortButton[0].addEventListener("click", twentyThreeSort);
sortButton[1].addEventListener("click", twentyTwoSort);
sortButton[2].addEventListener("click", utauSort);
sortButton[3].addEventListener("click", splatoonSort);
sortButton[4].addEventListener("click", otherSort);

function twentyThreeSort() {
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData.art[i].tags[year]) == 23) {
            //imageData["art"[i]]["tags"]["year"]
            temp = imageData["art"[i]].index;
            temp = newLength = twentyThreeList.push(temp);
        }
    }
}
function twentyTwoSort() {
    
}

function utauSort() {
    
}
function splatoonSort() {
    
}
function otherSort() {
    
}

async function populate() {
    const requestURL = 
      "https://worm-b0y16.github.io/scripts/artData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    imageData = await response.json();
}
