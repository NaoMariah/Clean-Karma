"use strict"; 

//--------------------------------------------------
//GLOBAL VARIABLES
//--------------------------------------------------

//grab sliders and outputs

    let bedSlider = document.getElementById("bedSlider"); //bedroom slider
    let bedOutput = document.getElementById("bedOutput"); //bedroom output
    let bathSlider = document.getElementById("bathSlider"); //bath slider
    let bathOutput = document.getElementById("bathOutput"); //bath output

//set bed value
    let bedDollarValue; //bedroom number value

//set bath value
    let bathDollarValue = 0; //bathroom value

//grab clean types
    let routineClean = document.getElementById("routineClean"); 
    let moveOutClean = document.getElementById("moveOutClean");
    let deepClean = document.getElementById("deepClean");


//set clean value
    let cleanTypeDollarValue = 0; //clean type value

//grab add on 1 - 6
    let addOnOne = document.getElementById("addOnOne");
    let addOnTwo = document.getElementById("addOnTwo");
    let addOnThree = document.getElementById("addOnThree");
    let addOnFour = document.getElementById("addOnFour");
    let addOnFive = document.getElementById("addOnFive");
    let addOnSix = document.getElementById("addOnSix");

//set add on dollar value
    let addOnDollarValue = 0; //add on value

//grab total box
    let total = document.getElementById("totalValue");

//grab form 
    let form = document.getElementsByTagName("form")[0];

let totalDollarValue;

let bookMeLink = document.getElementById("bookMeLink");

//services

let moveCleanInfo = document.getElementById("moveCleanInfo");

let routineCleanInfo = document.getElementById("routineCleanInfo");
    
let deepCleanInfo = document.getElementById("deepCleanInfo");

let moveout = document.getElementsByClassName("moveout");

let routine = document.getElementsByClassName("routine");

let deep = document.getElementsByClassName("deep");

let moveDescripStyle = document.getElementById("moveIncluded").style.display;

let routineDescripStyle = document.getElementById("routineIncluded").style.display;

let deepDescripStyle = document.getElementById("deepIncluded").style.display;



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
            bedDollarValue = 60; 
            break;
        case 2:
            bedDollarValue = 70;
            break;
        case 3:
            bedDollarValue = 80;
            break;
        case 4:
            bedDollarValue = 90;
            break;
        case 5:
        bedDollarValue = 100;
            break;
        case 6:
        bedDollarValue = 120;
            break;     
        default:
        console.log("This is default");
        }   
    console.log(bedDollarValue);
}

//get clean type dollar value

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

//get add on dollar value

function getAddOnDollarValues(){
    addOnDollarValue = 0;
     if(addOnOne.checked == true){
        addOnDollarValue += 10;
    }
     if(addOnTwo.checked == true){
        addOnDollarValue += 10;
    }
    
     if(addOnThree.checked == true){
        addOnDollarValue += 10;
    }
     if(addOnFour.checked == true){
        addOnDollarValue += 10;
    }
     if(addOnFive.checked == true){
        addOnDollarValue += 10;
    }
     if(addOnSix.checked == true){
        addOnDollarValue += 10;
    }
    
}

//get total

function getTotal (){
    getSliderOutputs();
    getBedDollarValue();
    getCleanTypeDollarValue();
    getAddOnDollarValues();
    
    totalDollarValue = (bedDollarValue + cleanTypeDollarValue + addOnDollarValue);
    
    total.innerHTML = "$" + totalDollarValue;
}

//services 





//--------------------------------------------------
//AND...ACTION!
//--------------------------------------------------

//initialize values and total

getTotal();


//change total dollar value on form input...

form.oninput = function (){
    getTotal();
}



moveCleanInfo.onmouseover = function (){
    
    document.getElementById("routineIncluded").style.display = "none";
    
    for (var i = 0; i < routine.length; i++){
       
         routine[i].style.backgroundColor = "#F6F6F6";
    }
    
    document.getElementById("deepIncluded").style.display = "none";
    
     for (var i = 0; i < deep.length; i++){
       
         deep[i].style.backgroundColor = "#F6F6F6";
    }
    
    document.getElementById("moveIncluded").style.visibility = "visible";
    
    document.getElementById("moveIncluded").style.display = "grid";
    
       
    for (var i = 0; i < moveout.length; i++){
       
        moveout[i].style.backgroundColor = "#FFF3A6";
    }
}

//moveCleanInfo.onmouseout = function(){
//     
//    for (var i = 0; i < moveout.length; i++){
//       
//         moveout[i].style.backgroundColor = "#F6F6F6";
//    }
//
//}

//moveCleanInfo.onclick = function (){ 
//    moveout[0].style.backgroundColor = "pink";
//    
//     moveout[1].style.backgroundColor = "pink";
//    
//    moveout[2].style.backgroundColor = "pink";
//}

routineCleanInfo.onmouseover = function (){
    
    document.getElementById("deepIncluded").style.display = "none";
    
      for (var i = 0; i < deep.length; i++){
       
         deep[i].style.backgroundColor = "#F6F6F6";
    }
    
    document.getElementById("moveIncluded").style.display = "none";
    
      for (var i = 0; i < moveout.length; i++){
       
         moveout[i].style.backgroundColor = "#F6F6F6";
    }
    
    document.getElementById("routineIncluded").style.display = "grid";
    
    for (var i = 0; i < routine.length; i++){
        routine[i].style.backgroundColor = "#FFF3A6";
    }
}

//routineCleanInfo.onmouseout = function (){
//    
//    for (var i = 0; i < routine.length; i++){
//       
//         routine[i].style.backgroundColor = "#F6F6F6";
//    }
//}
//
//routineCleanInfo.onclick = function (){ 
//    
//}


deepCleanInfo.onmouseover = function (){

    document.getElementById("moveIncluded").style.display = "none";
    
        for (var i = 0; i < moveout.length; i++){
       
         moveout[i].style.backgroundColor = "#F6F6F6";
    }
    
    
    document.getElementById("routineIncluded").style.display = "none";
    
     for (var i = 0; i < routine.length; i++){
       
         routine[i].style.backgroundColor = "#F6F6F6";
    }
    
    
    document.getElementById("deepIncluded").style.display = "grid";
    
    for (var i = 0; i < deep.length; i++){
        deep[i].style.backgroundColor = "#FFF3A6";
    }
}

//deepCleanInfo.onmouseout = function (){
//    
//    for (var i = 0; i < deep.length; i++){
//       
//         deep[i].style.backgroundColor = "#F6F6F6";
//    }
//}

//deepCleanInfo.onclick = function (){ 
//    
//}








