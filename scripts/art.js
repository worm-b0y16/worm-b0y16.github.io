var imageData;
const sortButton = document.querySelectorAll(".sortButton");
const artDisplay = document.querySelector(".artDisplay");
var 23List = [];
var 24List = [];
var utauSort[];
var splatoonSort[];
var otherSort[];

addEventListener("load", populate);
sortButton[0].addEventListener("click", 23Sort);
sortButton[1].addEventListener("click", 24Sort);
sortButton[2].addEventListener("click", utauSort);
sortButton[3].addEventListener("click", splatoonSort);
sortButton[4].addEventListener("click", otherSort);

function 23Sort() {
    var temp;
    for(i = 0; i < (imageData["art"].length); i++) {
        if ((imageData["art"][i]["tags"]."year") == 23) {
            temp = ["art"][i].index;
            temp = newLength = 23List.push(temp);
        }
    }
}
function 24Sort() {
    
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
