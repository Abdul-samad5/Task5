// Task 1
// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
console.log(fahrenheitToCelsius(200))

// Task 2
// Create a function that will calculate the average of numbers in an array.
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
  }
console.log(calculateAverage([2,3,4,5,5,6,7,3]))  

// Task 3
// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function Divisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  console.log(Divisible(9,6,3));
  
//   Task 4
//   Create a function that will output the first 100 prime numbers.
function originalPrime(count) {
    let primes = [];
    let number = 2;
  
    while (primes.length < count) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
  
    return primes;
  }
  
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }
console.log(originalPrime(100));

// Task 5
// Create a function that will return a boolean specifying if a number is a prime number.
function prime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
console.log(prime(9));  

// Task 6
// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function getPositiveNums(numbers) {
    let positiveNums = numbers.filter(function(number) {
      return number > 0;
    });
    return positiveNums;
  }
  console.log(getPositiveNums([2,-4,6,,-7,-8,7,6,6,-7]));
  
    // Task 7
    // Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }

// Task 8
// The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.

function genHashtag(input) {
    if (!input || input.trim() === "") {
      return false;
    }
  
    let words = input.trim().split(/\s+/);
    let hashtag = "#";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      hashtag += word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  console.log(genHashtag("I am one of the best dev !!!!"));