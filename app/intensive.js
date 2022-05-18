// Créditos: https://www.tutorialspoint.com/using-sieve-of-eratosthenes-to-find-primes-javascript
function eratosthenes_sieve(num=1000000) {
    const numArr = new Array(num + 1);
    numArr.fill(true);
    numArr[0] = numArr[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
       for (let j = 2; i * j <= num; j++){
           numArr[i * j] = false;
       }
    }
    console.log(numArr);
    return numArr.reduce((acc, val, ind) => {
       if(val){
          return acc.concat(ind);
       }else{
          return acc;
       };
    },[]);
}

module.exports = { eratosthenes_sieve };