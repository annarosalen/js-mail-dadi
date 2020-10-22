// ESERCIZIO Mail

// Chiedi all’utente la sua email,
var email = prompt("inserisci la tua email");

// controlla che sia nella lista di chi può accedere,

var listaemail = ["anna@gmail.com","giacomo@gmail.com","giovanna@gmail.com","davide@gmail.com"];

var output = document.getElementById('login');

for (var i=0; i < listaemail.length; i++){

  if (email == listaemail[i]) {
    output.innerHTML = "Benvenuto/a " + listaemail[i];
  }else {
    output.innerHTML = "Email non corretta";
  }

}

// stampa un messaggio appropriato sull’esito del controllo.
