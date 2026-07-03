let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl= document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player ={
    name: "Aditya",
    chips: "20,000"
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": ₹" + player.chips

function startGame()
{
    cards = []
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard()
{
    let randNum = Math.floor(Math.random()*13) + 1

    if(randNum > 10){
        return 10
    }

    else if( randNum < 2){
        return 11
    }
    
    return randNum
    
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 

    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 

    else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard()
{
    if(isAlive && hasBlackJack === false)
    {
        let cardNew = getRandomCard()
        sum += cardNew
        cards.push(cardNew)
        renderGame()
    }
}
