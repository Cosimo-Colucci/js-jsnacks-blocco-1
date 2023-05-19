NumberList = []

for (let i = 0 ; i < 10 ; i++){
    const userNumbers = parseInt  (prompt ("insert a numrer"));
    NumberList.push (userNumbers);
    //console.log(NumberList);
} 

console.log (NumberList[0] + NumberList[1] + NumberList[2] + NumberList[3] + NumberList[4] + NumberList[5] + NumberList[6] + NumberList[7] + NumberList[8] + NumberList[9]);
//problema con la mia soluzione è che se devo aumentare le volte che domando di inserire un numero devo aggiungere anche esso a somma della lista!

//metodo secondo riccardo

let sum = 0;

for (let i = 0; i < 10; i++) {

    sum += parseInt (prompt ("insert a number"));
}

console.log(sum);

//metodo più generico che mi permette di modificare il ciclo senza dover modificare altre righe di codice