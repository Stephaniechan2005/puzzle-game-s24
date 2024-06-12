console.log("JavaScript is connected");
//Variable
const theButtons = document.querySelectorAll("#buttonHolder img");

const puzzleBoard = document.querySelector(".puzzle-board");

//function
function changeBGImage(event) {
  console.log("changeBGImage called");
  //Method 1
  //console.log(this.id);
  //background-image: url('../images/backGround0.jpg');
  // puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg')`;

  //Method 1
  console.log(event.currentTarget.id);
  puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;
}

//event

theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
