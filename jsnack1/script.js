NumberList = []

for (let i = 0 ; i < 10 ; i++){
    const userNumbers = parseInt  (prompt ("insert a numrer"));
    NumberList.push (userNumbers);
    //console.log(NumberList);
} 

console.log (NumberList[0] + NumberList[1] + NumberList[2] + NumberList[3] + NumberList[4] + NumberList[5] + NumberList[6] + NumberList[7] + NumberList[8] + NumberList[9]);