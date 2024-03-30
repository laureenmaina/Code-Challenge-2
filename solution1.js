const swapCase = str =>[...str] //  using the spread operator (...) converts strings into an array of characters
.map(str => (str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase())) //if the argument entered is in lowercase,
                           //it converts it into upercase and viceversa by the help of a ternary operator (?)
                          // which determines the case of each character(str)
    .join('');      //we use .join() to combine the characters back into a string.

 console.log(swapCase('The Quick Brown Fox')); 
