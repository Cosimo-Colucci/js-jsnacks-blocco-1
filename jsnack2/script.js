numberList = ["Giuseppe", "Antonio", "Francesca", "Fabiola", "Colosso"]

const userName = prompt("Insert your name! (the firt letter must be uppercase) ");
let isNameFound = false;

for (let i = 0; i < numberList.length ; i++) {
    if  ( numberList [i] === userName ){
        isNameFound = true;
    }
}

if ( isNameFound === true){
    console.log ("Enjoi the party");
} else {
    console.log ("Get away from here");
}


//console.log (userName);

//correzione di Riccardo uguale al nostro esercizio