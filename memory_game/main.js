console.log("Up and running!");





cards= ["queen", "queen","king","king"]

cardsInPlay= []

cardOne= cards[0]

cardsInPlay.push(cardOne)

console.log("user flipped queen")

cardTwo= cards[2]
cardsInPlay.push(cardTwo)

console.log("user fipped king")

if (cardsInPlay[0]=== cardsInPlay[1]){
	alert("You found a match!")

} else {
	alert("Sorry, try again")
}