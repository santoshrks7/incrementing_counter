let twitter = document.querySelector(".twitterno");
let youtube = document.querySelector(".youtubeno");
let instagram = document.querySelector(".instagramno");

let index = 0;
let twitterfollowers = 1000;
let youtubefollowers = 1200;
let instagramfollowers = 1150;

let intervalOne = setInterval(myfunctionOne, 10);
let intervaltwo = setInterval(myfunctionTwo, 10);
let intervalthree = setInterval(myfunctionThree, 10);

function myfunctionOne() {
  index++;
  twitter.innerText = index;
  if (index == twitterfollowers) {
    clearInterval(intervalOne);
  }
}
function myfunctionTwo() {
  index++;
  youtube.innerText = index;
  if (index == youtubefollowers) {
    clearInterval(intervaltwo);
  }
}

function myfunctionThree() {
  index++;
  instagram.innerText = index;
  if (index == instagramfollowers) {
    clearInterval(intervalthree);
  }
}
