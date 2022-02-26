// Import Dice Images -> Array
let images = ["./src_images/dice-01.svg",
"./src_images/dice-02.svg",
"./src_images/dice-03.svg",
"./src_images/dice-04.svg",
"./src_images/dice-05.svg",
"./src_images/dice-06.svg"];

// Dice Variable For All Images
let dice = document.querySelectorAll("img");

/*
*   Left Die Roll Function 
*
*
*/
function dieRoll_One() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
    },
    1000
    );
}
dieRoll_One();


/*
*   Right Die Roll Function
*
*
*/
function dieRoll_Two() {

}
dieRoll_Two();