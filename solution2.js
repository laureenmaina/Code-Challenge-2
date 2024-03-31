function Numbers(num1,num2) {   // allowed to enter two parameters, num1 and num2
    let newNum = [];            // The new number should be an array
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {   // num1 should be equal to i so that it starts iterating from the number.
                                               //if i is less than or equal to num2, it should increment
            newNum.push(i);                    // The i is then added in the newNum array
        }
    }else {
        for (let i = num1; i >= num2; i--) {  // num1 should be equal to i so that it starts iterating from the number
                                              //if i is greater than or equal to num2, it should decrement
            newNum.push(i);                   // The i is then added in the newNum array
        }
    }
    return newNum;                            //At the end it should return the newNum array
  }
  
  console.log(Numbers(4, 7));  // Result: [4, 5, 6, 7]
  console.log(Numbers(-4, 7)); // Result: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]