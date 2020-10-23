// ESERCIZIO Gioco dei dadi


//dico al giocatore di tirare i dadi
var button = alert("tira i dadi");

// Generare un numero random da 1  a 6, sia per il giocatore
var randomgiocatore = Math.floor(Math.random()*6 +1);
console.log("numero giocatore", randomgiocatore);

// sia per il computer
var randompc = Math.floor(Math.random()*6 +1);
console.log("numero pc", randompc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var output = document.getElementById('risultato');

if (randomgiocatore > randompc) {
  output.innerHTML = "Hai vinto";
}else if (randompc > randomgiocatore) {
  output.innerHTML = "Hai perso";
}else {
  output.innerHTML = "Pari";
}
