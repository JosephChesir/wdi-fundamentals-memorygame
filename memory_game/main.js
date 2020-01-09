console.log("Up and running!");





cards= ["queen", "queen","king","king"]
cardsInPlay = []

function checkForMatch(){

if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}


const flipCard = (cardId) => {
  console.log("user flipped" + cards[cardId])
  if (cardsInPlay[0] === cardsInPlay[1]){
  	alert("You found a match!")
  } else {
  	alert("Sorry, try again")
  }
}
flipCard(0)
flipCard(2)