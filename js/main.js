console.log("JavaScript is connected");
//Variable
const theButtons = document.querySelectorAll("#buttonHolder img");

const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
let dragPiece;

//function
function changeBGImage(event) {
  console.log("changeBGImage called");
  //Method 1
  //console.log(this.id);
  //background-image: url('../images/backGround0.jpg');
  // puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg')`;

  //Method 2
  console.log(event.currentTarget.id);
  puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;
}

function handlestartDrag() {
  console.log("started dragging");
  dragPiece = this;
}

function handleOver(e) {
  console.log("dragging over dropZone");
  e.preventDefault();
}

function dropped() {
  // Method 1 check is there any image before the first puzzle drop
  // if (this.children.length < 1) {
  // this.appendChild(dragPiece);
  //}

  //Method 2 check is there any image after the first puzzle drop
  if (this.children.length >= 1) {
    return;
  }
  this.appendChild(dragPiece);
}

//event

theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handlestartDrag)
);
dropZones.forEach((zone) => zone.addEventListener("dragover", handleOver));
dropZones.forEach((zone) => zone.addEventListener("drop", dropped));
