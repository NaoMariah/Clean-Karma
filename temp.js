"use strict";

let email = document.getElementsByClassName("email")[0];

let confirmCopy = document.getElementsByClassName("copied")[0];

email.onclick = function() {
    document.execCommand("copy");
}

email.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", email.textContent);
        
        console.log(event.clipboardData.getData("text"))
        
        confirmCopy.style.display = "block";
    }

});