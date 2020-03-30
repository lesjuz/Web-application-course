"use strict";

/*Exercise #1 - Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.*/
function max(a, b) {
    if  (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }

};


/*Exercise #2 - Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/
function maxOfThree(a, b, c) {

    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
};


/*Exercise #3 - Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function vowel(x) {
    if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        console.log(true);
    } else {
        console.log(false);
    }
};


/*Exercise #4 - Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/

function sum(x) {
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {sum = sum+x[i];}
    console.log(sum);
}


function multiply(x){
    let product=1;
    for(let i=0;i<arr.length;i++)
    {product +=x[i];}
    console.log(product);
}



/*Exercise #5 - Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".*/
function reverse(a) {
    let result="";
    for(let i=a.length-1;i<=0;i++)
    {result +=a.charAt(i);}
    console.log(result);

}

/*Exercise #6 - Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/
function findLongestWord (arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}
/*Exercise #7 - Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords (arr,num) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > num){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/*8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. */

function computeSumOfSquares(arr){
    const sum= arr.reduce(function (prev,element,i,arr) {
        return prev+element*element;
    });
    return sum;
}
/*9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.*/
function printOddNumbersOnly(arr){
    const odd= arr.filter(function (el,i,arr) {
        return el%2!==0;
    });
    return odd;
}
/*10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/
function computeSumOfSquaresOfEvensOnly(arr) {
    const even= arr.filter(function (el,i,arr) {
        return el%2===0;
    });
    const result= arr.reduce(function (prev,element,i,arr) {
        return prev+element;
    });
    return result;

}
//11.
function sum(x) {
    const sum=x.reduce(function(prev,el,i,array){
        return prev+el;
    });
    return sum;
}


function multiply(x){
    const product=x.reduce(function(prev,el,i,array){
        return prev*el;
    });
    return product;
}

/* 12 Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4*/
function findSecondBiggest(myArray) {
    const x= max(myArray);
    const y= myArray.indexOf(x);
    myArray.splice(y,1);
    const z = max(myArray);
    return z;
}
function max(arr){
    let result=arr[0];
    for(let i=1;i<=(arr.length-1);i++){
        if(arr[i]>result)
            result=arr[i];
    }
    return result;
}

//13
function printFibo(n,a,b) {
    if(n <= 2) {
        return 1;
    } else {
        return this.printFibo(n - 1) + this.printFibo(n - 2);
    }
}