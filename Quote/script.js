"use strict";
/*global document*/

//VARIABLES

    //grab slider and output 

    let slider = document.getElementById("bedValue");
    let output = document.getElementById("bedroomNumber");

    let slider2 = document.getElementById("bathValue");
    let output2 = document.getElementById("bathroomNumber");

    //grab total box

    let total = document.getElementById("totalValue");

    //
    let cleanValue = 0;

    //
    let routineClean = document.getElementById("routineClean");
    let moveOutClean = document.getElementById("moveOutClean");
    let deepClean = document.getElementById("deepClean");

//FUNCTIONS

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


   
    function getTotal(){
        let sliderValue = Number(slider.value);
        let slider2Value = Number(slider2.value); 
      total.innerHTML = (sliderValue + slider2Value + cleanValue);
    }
getCleanValue();
getTotal();


//initalize outputs to prevent refresh reset - slider value displays

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
    getCleanValue();
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
     getTotal();
}



moveOutClean.oninput = function(){
    moveOutClean.checked = true;
    getCleanValue();
    getTotal();
}



deepClean.oninput = function(){
    deepClean.checked = true;
    getCleanValue();
     getTotal();
}
//
//
//
//document.getElementById("radioContainer").oninput = function(){
////   getTotal();
//    
//}







//
//let updateTotal = (num1 + num2);
//let sliderValue = slider.value;
//let sliderValue2 = slider2.value;
//slider.oninput = function one() {
//    output.innerHTML = this.value;
//    
//    total.innerHTML = sliderValue + sliderValue2;
//}
//
//
//
//
//slider2.oninput = function two() {
//    output2.innerHTML = this.value;
//    total.innerHTML = sliderValue + sliderValue2;
//
//}




//var beds = slider.value;
//var baths = slider2.value;
//
//function value() {
//    var variable = (beds + baths);
//    console.log(variable);
//}

//function findValue(a,b){
//    var value = (a + b);
//    console.log(value);
//}
//
//findValue(1,2);
//findValue(slider.value , slider2.value);

//    
//function findValue(){
//    return output.innerHTML + output2.innerHTML = total.innerHTML;
//}
//
//var form = document.getElementById("quoteMe");
//
//form.oninput = findValue();