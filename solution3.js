const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,15,17];
function getPrimeNumbers(numbers) {  
    function isPrime(nums) {      
        if (nums <= 1) return false;   // returns false because there are no prime numbers below or is 1
        if (nums === 2) return true;   // returns true because 2 is a prime number
        if (nums % 2 === 0) return false;  // returns false because the are no prime numbers which when divided by 2 has a remainder of 0
        for (let i = 3; i <= Math.sqrt(nums); i += 2) { // the iteration starts at 3, if the number entered is less than 
                                                        //or its square is equal to 3, it increments by 2

            if (nums % i === 0) return false;   
        }
        return true;
    }
    return numbers.filter(nums => isPrime(nums)); // filters the numbers entered
  }
  const primeNumbers = getPrimeNumbers(numbers);
  console.log(primeNumbers); 