function vetor() {
    let num = [2,3,6,8,5];  
    num.push(11);
    num.sort((a, b) => a - b);
    
    for(let i in num) {
        console.log(`A posição ${i} tem o valor ${num[i]}`);
    };
    console.log(num.indexOf(11));
    
}

vetor();
