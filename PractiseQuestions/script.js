// Q1
function evenOrOdd(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// console.log(evenOrOdd(4));
// console.log(evenOrOdd(5));

// Q2
function Largest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) console.log(num1);
  else if (num2 > num1 && num2 > num3) console.log(num2);
  else console.log(num3);
}

// Largest(4, 19, 7);
// Largest(-2, -8, -1);

// Q3
function sumOfDigits(n) {
  var sum = 0;

  while (n > 0) {
    var lastDigit = n % 10;
    sum += lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(sum);
}
// sumOfDigits(4512);
// sumOfDigits(1);

function countDigits(n) {
  var sum = 0;

  while (n > 0) {
    var lastDigit = n % 10;
    sum = sum * 10 + lastDigit;
    n = ~~(n / 10);
    // ~~ "Double Not" is also used to convert Integer
  }
  console.log(sum);
}
// countDigits(512);

// Q4
function reverseString(str) {
  var revStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr);
}

// reverseString("hello");
// reverseString("JavaScript")

// Q5
function countVowels(str) {
  var count = 0;
  var newStr = str.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < newStr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (newStr[i] === vowels[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

// countVowels("Programming");
// countVowels("AEIOU xyz");

// Q6
function factorialOptimized(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// console.log(factorial(5));

// Q7
function isPrime(n) {
  if (n <= 1) {
    console.log(false);
    return;
  }
  var isPrime = true;
  for (var i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}

// isPrime(21);

// Q8
function fizzBuzz(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("BUzz");
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}

// fizzBuzz(15);

// Q9
var arr = [-5, -1, -9];

function max(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

max(arr);
