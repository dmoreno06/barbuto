 // function abrir(elemento) {
 //      document.getElementById("modal").src = elemento.src;
 //  }

var email 	= require("./path/to/emailjs/email");
var server 	= email.server.connect({
   user:    "username",
   password:"password",
   host:    "smtp.your-email.com",
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works",
   from:    "mordiana1506@gmail.com",
   to:      "mordiana1506@gmail.com, another mordiana1506@gmail.com",
   cc:      "else <mordiana1506@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }