"use strict"; 

//--------------------------------------------------
//GLOBAL VARIABLES
//--------------------------------------------------

//grab sliders and outputs

    let bedSlider = document.getElementsByClassName("bedSlider")[0]; 

    let bedOutput = document.getElementsByClassName("bedOutput")[0]; 

    let bathSlider = document.getElementsByClassName("bathSlider")[0]; 

    let bathOutput = document.getElementsByClassName("bathOutput")[0]; 


//set bed value
    let bedDollarValue; //bedroom number value

//set bath value
    let bathDollarValue = 0; //bathroom value

//grab clean types
    let cleanContainer = document.getElementById("cleanContainer");

    let routineClean = document.getElementById("routineClean"); 
    let moveOutClean = document.getElementById("moveOutClean");
    let deepClean = document.getElementById("deepClean");


//set clean value
    let cleanTypeDollarValue = 0; //clean type value

//grab total box
    let total = document.getElementById("totalValue");

//grab quote form 
    let form = document.getElementsByTagName("form")[0];

let totalDollarValue;

let bookMeLink = document.getElementById("bookMeLink");

//services

let moveIncluded = document.getElementById("moveIncluded");

let routineIncluded = document.getElementById("routineIncluded");

let deepIncluded = document.getElementById("deepIncluded");

//where we serve - zip verification

let zip = document.getElementById("zip");

let zipSubmit = document.getElementById("zipSubmit");

let validZips = [84006,84009,84020,84044,84047,84065,84070,84081,84084,84088,84090,84091,84092,84093,84094,84095,84096,84101,84102,84103,84104,84105,84106,84107,84108,84109,84110,84111,84112,84113,84114,84115,84116,84117,84118,84119,84120,84121,84122,84123,84124,84125,84126,84127,84128,84129,84130,84131,84132,84133,84134,84136,84138,84139,84141,84143,84144,84145,84147,84148,84150,84151,84152,84157,84158,84165,84170,84171,84180,84184,84189,84190,84199];


//--------------------------------------------------
//FUNCTIONS
//--------------------------------------------------

//changes slider outputs 

    
 function getSliderOutputs(){
     
     bedOutput.innerHTML = Number(bedSlider.value); 

        if (bedOutput.innerHTML == 6){
            bedOutput.innerHTML = "6+"; 
        }
   
     bathOutput.innerHTML = Number(bathSlider.value);

 		if (bathOutput.innerHTML == 4){
        	bathOutput.innerHTML = "4+";
    }
}

//change bed dollar value based on slider value

function getBedDollarValue(){
   
 switch (Number(bedSlider.value)){
           
        case 1:
            bedDollarValue = 75; 
            break;
        case 2:
            bedDollarValue = 90;
            break;
        case 3:
            bedDollarValue = 105;
            break;
        case 4:
            bedDollarValue = 120;
            break;
        case 5:
        bedDollarValue = 135;
            break;
        case 6:
        bedDollarValue = 150;
            break;     
        default:
        console.log("This is default");
        }   
    console.log(bedDollarValue);
}

function getCleanTypeDollarValue(){
        
    if(routineClean.checked == true){
        cleanTypeDollarValue = 0;
    }else if(moveOutClean.checked == true ){
        cleanTypeDollarValue = 50;
    }else if (deepClean.checked == true){
        cleanTypeDollarValue= 35;
    }else{
        cleanTypeDollarValue = 0;
    }   
}

function displayCleanTypeIncluded(){
        
    if(routineClean.checked == true){
        deepIncluded.style.display = "none";
         moveIncluded.style.display = "none";
        routineIncluded.style.display = "inline";
    }else if(moveOutClean.checked == true ){
        deepIncluded.style.display = "none";
        routineIncluded.style.display = "none";
        moveIncluded.style.display = "inline";
    }else if (deepClean.checked == true){
         moveIncluded.style.display = "none";
        routineIncluded.style.display = "none";
        deepIncluded.style.display = "inline";
    }else{
    
    }   
}

function getTotal (){
    getSliderOutputs();
    getBedDollarValue();
    getCleanTypeDollarValue();
    displayCleanTypeIncluded();
    
    totalDollarValue = (bedDollarValue + cleanTypeDollarValue);
    
    total.innerHTML = "$" + totalDollarValue;
}


//--------------------------------------------------
//AND...ACTION!
//--------------------------------------------------

//initialize values and total

getTotal();

displayCleanTypeIncluded();


//change total dollar value on form input...

form.oninput = function (){
    getTotal();
    displayCleanTypeIncluded();
}

form.onchange = function (){
    getTotal();
    displayCleanTypeIncluded();
}

zipSubmit.onclick = function (){
    
    var zipIsValid = false;
    
    for (var i = 0; i <= validZips.length; i++ ) {
        
        if (zip.value == validZips[i]) {
            zipIsValid = true;
        } 
    }
    
    if (zipIsValid == true) {
        document.getElementById("alertInvalidZip").style.display = "none";
        document.getElementById("alertValidZip").style.display = "inline";
        
    } else {
        
        document.getElementById("alertValidZip").style.display = "none";
        document.getElementById("alertInvalidZip").style.display = "inline";
    }
}











