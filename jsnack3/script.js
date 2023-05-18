numberList = []

for (let i = 0 ; i < 6 ; i++){
    const userNumbers = parseInt  (prompt ("insert a numrer"));

    if (userNumbers % 2 === 0){
        numberList.push (userNumbers);
    }

} 
console.log (numberList);