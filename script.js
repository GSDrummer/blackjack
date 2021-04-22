let deck = [1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
            1,2,3,4,5,6,7,8,9,10,10,10,10,
];

let playerHand;
let dealerHand;

function drawCards(deck){
    let randomCard = Math.floor(deck.length * Math.random());
    return deck[randomCard]
}

function startGame(){
    document.getElementById("playAgain").innerHTML = ``;
    playerHand = [drawCards(deck), drawCards(deck)]
    dealerHand = [drawCards(deck), drawCards(deck)]
    document.getElementById("dealerHand").innerHTML = `Dealers Hand: ${dealerHand}`;
    document.getElementById("dealerTotal").innerHTML = `Dealer Total:  ${getHandTotal(dealerHand)}`;
    document.getElementById("playerHand").innerHTML = `Players Hand: ${playerHand}`;
    document.getElementById("playerTotal").innerHTML = `Player Total:  ${getHandTotal(playerHand)}`;
    
}

function getHandTotal(hand){
    let total = 0;
    for(let i = 0; i < hand.length; i++){
        total += hand[i];
    }
    return total;
}

function hit(){
    playerHand.push(drawCards(deck));
    if(getHandTotal(playerHand) > 21){
        document.getElementById("playerHand").innerHTML = `Players Hand: ${playerHand}`;
        document.getElementById("playerTotal").innerHTML = `Player Total:  ${getHandTotal(playerHand)}`;;
        alert("Bust! You Lose!");
        document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
    }else{
        document.getElementById("playerHand").innerHTML = `Players Hand: ${playerHand}`;
        document.getElementById("playerTotal").innerHTML = `Player Total:  ${getHandTotal(playerHand)}`;
        document.getElementById("dealerHand").innerHTML = `Dealers Hand: ${dealerHand}`;
        document.getElementById("dealerTotal").innerHTML = `Dealer Total:  ${getHandTotal(dealerHand)}`;
    }
}

function stand(){
    if (getHandTotal(dealerHand) > 17 && getHandTotal(dealerHand) > getHandTotal(playerHand)){
        alert("Dealer wins!")
        document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
    }
    else if(getHandTotal(dealerHand) < 17){
        dealerHand.push(drawCards(deck))
        document.getElementById("playerHand").innerHTML = `Players Hand: ${playerHand}`;
        document.getElementById("playerTotal").innerHTML = `Player Total:  ${getHandTotal(playerHand)}`;
        document.getElementById("dealerHand").innerHTML = `Dealers Hand: ${dealerHand}`;
        document.getElementById("dealerTotal").innerHTML = `Dealer Total:  ${getHandTotal(dealerHand)}`;
        if(getHandTotal(dealerHand) > 21){
            alert("Dealer Bust!")
            document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
        }
    }
    else if (getHandTotal(dealerHand) > 17 && getHandTotal(dealerHand) === getHandTotal(playerHand)){
        alert("It's a Tie!")
        document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
    }
    else if(getHandTotal(playerHand) === 21){
        alert("You Win!")
        document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
    }
    else{
        dealerHand.push(drawCards(deck))
        document.getElementById("playerHand").innerHTML = `Players Hand: ${playerHand}`;
        document.getElementById("playerTotal").innerHTML = `Player Total:  ${getHandTotal(playerHand)}`;
        document.getElementById("dealerHand").innerHTML = `Dealers Hand: ${dealerHand}`;
        document.getElementById("dealerTotal").innerHTML = `Dealer Total:  ${getHandTotal(dealerHand)}`;
        if(getHandTotal(dealerHand) > 21){
            document.getElementById("dealerHand").innerHTML = `Dealers Hand: ${dealerHand}`;
            document.getElementById("dealerTotal").innerHTML = `Dealer Total:  ${getHandTotal(dealerHand)}`;
            alert(`Dealer Bust! You Win!`)
            document.getElementById("playAgain").innerHTML = `Press Deal to Play Again!`;
        }
    }   
}


document.getElementById("deal").addEventListener("click", () =>{
    startGame()
})

document.getElementById("hit").addEventListener("click", () =>{
    hit()
})

document.getElementById("stand").addEventListener("click", () =>{
    stand()
})


