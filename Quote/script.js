"use strict";
/*global document*/

//VARIABLES

//grab slider and output 

    let slider = document.getElementById("bedValue");
    let output = document.getElementById("bedroomNumber");

    let slider2 = document.getElementById("bathValue");
    let output2 = document.getElementById("bathroomNumber");

 //set clean value
    let cleanValue = 0;

//set bed value
    let bedValue = 60;

//set bath value
    let bathValue = 0;

//get clean type
    let routineClean = document.getElementById("routineClean");
    let moveOutClean = document.getElementById("moveOutClean");
    let deepClean = document.getElementById("deepClean");

//set add on 
let addOnValue = 0;

//grab add on 1 - 6
let addOnOne = document.getElementById("addOnOne");
let addOnTwo = document.getElementById("addOnTwo");
let addOnThree = document.getElementById("addOnThree");
let addOnFour = document.getElementById("addOnFour");
let addOnFive = document.getElementById("addOnFive");
let addOnSix = document.getElementById("addOnSix");

//grab total box

    let total = document.getElementById("totalValue");

 



//FUNCTIONS

    function getBedValue(){
        bedValue = 60;
        if (slider.value == 1){
            bedValue = 60;
        }else if (slider.value == 2){
            bedValue += 10;
        }else if (slider.value == 3){
            bedValue += 20;
        }else if (slider.value == 4){
            bedValue += 30;
        }else if (slider.value == 5){
            bedValue += 40;
        }else if (slider.value == 6){
            bedValue += 60;
        }else{
            bedValue = 0;
        }
    }

    function getCleanValue(){
       cleanValue = 0;
        
        if(routineClean.checked == true){
            cleanValue = 0;
        }else if(moveOutClean.checked == true ){
            cleanValue += 50;
        }else if (deepClean.checked == true){
            cleanValue += 35;
        }
        return cleanValue;
    }

function addOns(){
    addOnValue = 0; 
    
    if(addOnOne.checked == true){
        addOnValue += 10;
    }
     if(addOnTwo.checked == true){
        addOnValue += 10;
    }
    
     if(addOnThree.checked == true){
        addOnValue += 10;
    }
     if(addOnFour.checked == true){
        addOnValue += 10;
    }
     if(addOnFive.checked == true){
        addOnValue += 10;
    }
     if(addOnSix.checked == true){
        addOnValue += 10;
    }
}


   
    function getTotal(){
      total.innerHTML = (bedValue + bathValue + cleanValue + addOnValue);
    }



getBedValue();
getCleanValue();
addOns();
getTotal();


//initalize bed and bath outputs

    output.innerHTML = Math.round(slider.value);

        if (output.innerHTML == 6){
            output.innerHTML = "6+";
        }



    output2.innerHTML = Math.round(slider2.value);

     if (output2.innerHTML == 4){
            output2.innerHTML = "4+";
        }

//change output and total when slider is touched



slider.oninput = function sliderUpdate(){
    getBedValue();
    getCleanValue();
    addOns();
    getTotal();
    
    output.innerHTML = this.value; //slider value .becomes output
    
    if (output.innerHTML == 6){
        output.innerHTML = "6+";
    }

}
slider2.oninput = function slider2update(){
    
    output2.innerHTML = this.value; //slider value becomes output
    
    if (output2.innerHTML == 4){
        output2.innerHTML = "4+";
    }
   getTotal();
}


//when clicked, radio buttons become checked

routineClean.oninput = function(){
    routineClean.checked = true;
    getCleanValue();
    addOns();
     getTotal();
}



moveOutClean.oninput = function(){
    moveOutClean.checked = true;
    getCleanValue();
    addOns();
    getTotal();
}



deepClean.oninput = function(){
    deepClean.checked = true;
    getCleanValue();
    addOns();
     getTotal();
}

addOnOne.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
addOnTwo.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
addOnThree.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
addOnFour.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
addOnFive.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
addOnSix.oninput = function(){
    getCleanValue();
    addOns();
     getTotal();
}
