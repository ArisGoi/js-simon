// genero 5 numeri casualmente e li metto in un'array.
var winNumbers = [];

for (i=0; i<5; i++){
    winNumbers.push(Math.floor(Math.random() * 100 + 1));
}
// creo un'alert che annuncia i numeri genrati
alert("i numeri da memorizzare sono: " + winNumbers[0] + " - " + winNumbers[1] + " - " + winNumbers[2] + " - " + winNumbers[3] + " - " + winNumbers[4]);

console.log(winNumbers);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.