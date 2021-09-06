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
setTimeout(
    function(){
        let playerNum = [];
        let input;

        // chiedo per 5 volte di inserire i numeri visti in precedenza
        for (i=0; i<5; i++){
            do{
                input = parseInt(prompt('inserisci il ' + (i + 1) + '° numero mostrato in precedenza (non può essere 0)'));
            } while(isNaN(input) || input == "");

            // controllo se il numero non sia già stato inserito
            if (playerNum.includes(input)){
                do{
                    input = parseInt(prompt('HAI GIA\' INSERITO QUESTO NUMERO!! Inserisci il ' + (i + 1) + '° numero mostrato in precedenza'));
                } while(isNaN(input) || input == "" || playerNum.includes(input));
            };

            // controllo che il numero inserito sia uno di quelli corretti
            if (winNumbers.includes(input)){
            // se il numero è corretto faccio un push in array del numero inserito
                playerNum.push(input)
            };
        };


        console.log(playerNum);
    }
, 2 * 1000); //timer di 30 secondi