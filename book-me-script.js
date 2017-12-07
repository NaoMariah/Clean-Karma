"use strict";

//-------------------------------------------------
//VARIABLES 
//-------------------------------------------------

let progressContainer = document.getElementById("progressContainer");


let contactDropDown =   document.getElementById("contactDropDown");

let scheduleDropDown = document.getElementById("scheduleDropDown");

let paymentDropDown = document.getElementById("paymentDropDown");


let contactFieldset = document.getElementById("contactFieldset")

let scheduleFieldset = document.getElementById("scheduleFieldset");

let paymentFieldset = document.getElementById("paymentFieldset");

let bookMeForm = document.forms.bookMeForm;

let firstName = bookMeForm.firstName.value;

let lastName = bookMeForm.lastName.value;

let phoneNumber = bookMeForm.phoneNumber.value;

let email = bookMeForm.email.value;

//-------------------------------------------------
//FUNCTIONS
//-------------------------------------------------



//-------------------------------------------------
//...ACTION!
//-------------------------------------------------

//open form areas when clicked
contactDropDown.onclick = function (){
    
   if (contactFieldset.style.display == "none") {
        contactFieldset.style.display = "grid";
       scheduleFieldset.style.display = "none";
        paymentFieldset.style.display = "none";
       
   }else {
       contactFieldset.style.display = "none";
   }
}

paymentDropDown.onclick = function (){
    
   if (paymentFieldset.style.display == "none") {
        paymentFieldset.style.display = "grid";
       contactFieldset.style.display = "none";
       scheduleFieldset.style.display = "none";
   }else {
       paymentFieldset.style.display = "none";
   }
}

scheduleDropDown.onclick = function (){
    
   if (scheduleFieldset.style.display == "none") {
        scheduleFieldset.style.display = "grid";
       contactFieldset.style.display = "none";
       paymentFieldset.style.display = "none";
   }else {
       scheduleFieldset.style.display = "none";
   }
}

