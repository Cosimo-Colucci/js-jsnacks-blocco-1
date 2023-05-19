//const userNumber = parseInt  (prompt ("insert a numrer with 4 digits"));
//const numberSomma = 
//console.log (numberSomma);

//correzione di Riccardo
let userNumber = prompt("insert a numrer with 4 digits");
if (!(userNumber > 999 && userNumber < 9999)) {
    userNumber = prompt ("insert a numrer with 4 digits");
}
let sum = 0;

for (let i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber.charAt(i));
    
}
console.log (sum);

// in questo metodo chiediamo all'utente di inserire un numero conpreso tra 999 e 9999 questo ci permettere di avere un numero di 4 cifre le quali sommeremo poi nel ciclo for prendendo le singole cifre di sommarmi selezionandole con .chartAt