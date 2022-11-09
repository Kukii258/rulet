
let balance = 1000;
console.log("Your balance is: ",balance,"kn");

// Rulet function random number and decide which color
function rulet(){

     number = Math.floor(Math.random() * 36) + 1;

    if(number%2==0) {
        color = "red";
    }else if(number%2!=0){
        color = "black";
    }else if(number == 0){
        color = "green";
    } 
}

// Player funcion ask for number or color, check balance if is number or too high
// Calculate results whith players choice and balance
function player(){
    let bet = 0;
    let x = 0;
    x = prompt("What do you want to bet red, black, green or number 1 to 36 ");
    
    if(x=="red" || x=="black" || x=="green" || (x>1 && x<37)){ 
        bet = +prompt("How much do you want to bet? ");

        while(Number.isNaN(bet) == true|| typeof bet == "string" || bet>balance){
            bet = +prompt("You don't have that much balance, bet less");
        }
    
        rulet()
        console.log("Number is ",number,", color is ",color);
        console.log("You bet: ", bet, " on: ", x);
    
        if (typeof x == 'string'){
            balance = (x==color) ? balance=balance + bet : balance=balance-bet;
        }else if(x==number){
            balance = balance + bet*37;
        }else balance = balance - bet;
    
        console.log("Your balance is: ",balance,"kn");
    }
    else{ player();
    }

}

player();

//Ask to play again and check if your balance is empty
let again = "yes";
while (again == "yes" && balance>0){
    again = prompt("Do you want to play again? ");
    if(again=="yes"){
        player();
    }else if(again == "no"){
        console.log("okay pussy");
    }else again="yes";
    }
if(balance==0){  
    console.log("Withdraw to continue playing. ");
}
