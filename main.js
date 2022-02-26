// Import Dice Images -> Array
let images = ["./src_images/dice-01.svg",
"./src_images/dice-02.svg",
"./src_images/dice-03.svg",
"./src_images/dice-04.svg",
"./src_images/dice-05.svg",
"./src_images/dice-06.svg"];

// Dice Variable For All Images
let leftDie = document.querySelectorAll("#die-1");
let rightDie = document.querySelectorAll("#die-2");


/*
*   Left Die Roll Function 
*
*
*/
function dieRoll_One() 
{
    // Add Shake To Left Die
    leftDie.forEach(function(die){
        die.classList.add("shake");
    });

    // Remove Shake To Right Die + Calc. Amount
    setTimeout(function(){
        leftDie.forEach(function(die){
            die.classList.remove("shake");
        });
        
        // Generate Random Die Roll (1-6)
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);

        // Update Die Image + Total
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#leftTotal").innerHTML = "Total: " + (dieOneValue +1);
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
function dieRoll_Two() 
{
    // Add Shake To Right Die
    rightDie.forEach(function(die){
        die.classList.add("shake");
    });

    // Remove Shake To Right Die + Calc. Amount
    setTimeout(function(){
        rightDie.forEach(function(die){
            die.classList.remove("shake");
        });

        // Generate Random Die Roll (1-6)
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieTwoValue);

        // Update Die Image + Total
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#rightTotal").innerHTML = "Total: " + (dieTwoValue + 1);
    },
    1000
    );
}
dieRoll_Two();