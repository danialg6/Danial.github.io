function primenine(n) {
    let i = n;
    for (i = n; i < 1000; i++) {
        if (n% i !== 0 && i % 10 === 9) {
           i=i;
 
        }
 
    }
    return i;
}
console.log(primenine(1000));