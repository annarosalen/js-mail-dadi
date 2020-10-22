// ESERCIZIO Mail

// Chiedi all’utente la sua email,
var email = prompt("inserisci la tua email");

// creo la lista di chi può accedere,

var listaemail = ["anna@gmail.com","giacomo@gmail.com","giovanna@gmail.com","davide@gmail.com"];

// creo una variabile di verifica
var controllo = "";

for (var i=0; i < listaemail.length; i++){

  if (email === listaemail[i]) {
    controllo = true;
  } 

}

// stampa un messaggio appropriato sull’esito del controllo.

var output = document.getElementById('login');

if (controllo === true) {
    output.innerHTML = "Benvenuto/a " + email;
} else {
    output.innerHTML = "Email non corretta";
}
