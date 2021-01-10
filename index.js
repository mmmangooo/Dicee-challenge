var randomNumber1=Math.floor(Math.random()*6)+1; // Generates random number 1-6

document.getElementById("img1").setAttribute("src", `images/dice${randomNumber1}.png`); // Changes img1 to random image dice1.png - dice6.png

var randomNumber2=Math.floor(Math.random()*6)+1; //Generates random number 1-6

document.getElementById("img2").setAttribute("src", `images/dice${randomNumber2}.png`); //Changes img2 to random image dice1.png -dice6.png

function changeHeader() {   // Function changing content of the header element
    if (randomNumber1 > randomNumber2) {
        document.getElementById("header").innerHTML="Player 1 wins!";  //If player 1 wins
    }
    else if (randomNumber2 > randomNumber1) {
        document.getElementById("header").innerHTML="Player 2 wins!";  // If player 2 wins
    }
    else {
        document.getElementById("header").innerHTML="It's a tie!";  // If both dices show the same value
    }
}

changeHeader();