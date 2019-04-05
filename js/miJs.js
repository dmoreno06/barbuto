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
