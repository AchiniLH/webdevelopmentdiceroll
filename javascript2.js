function rolldice() {

    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    
    if (rollResult == 1) pic.setAttribute('dice-1.svg');
   else if (rollResult == 2) pic.setAttribute('src', 'dice-2.svg');
   else if (rollResult == 3) pic.setAttribute('src', 'dice-3.svg');
   else if (rollResult == 4) pic.setAttribute('src', 'dice-4.svg');
   else if (rollResult == 5) pic.setAttribute('src', 'dice-5.svg');
   else  pic.setAttribute('src', 'dice-6.svg');

    
    var status = document.getElementById("status");
    
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    
    var diceTotal = d1 + d2;
    
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    
    status.innerHTML = "You rolled " + diceTotal+".";
    if(d1 == d2) {
        status.innerHTML += "You Win: Try Again";
    } else if (d1 != d2 ) {

        "You didn't win: Try Again"
    }

}