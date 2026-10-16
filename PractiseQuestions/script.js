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
// var arr = [-5, -1, -9];

// function max(arr) {
//   var max = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }

// max(arr);

// Second Max
var arr = [4, 7, 2, 9, 8, 1];

function max(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function secondMax(arr) {
  var maximum = max(arr);
  var secondMax = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] !== maximum) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
}

function findSecondMax(arr) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
}

// secondMax(arr);
// findSecondMax(arr);

// Q10
// With Inbuilt Method
// function isPalindrome (str) {
//   var newStr = str.toLowerCase().replaceAll(" ", "");
//   return newStr === newStr.split('').reverse().join('');
// }

// Without Inbuilt Methods
function isPalindrome(str) {
  var newStr = str.toLowerCase().replaceAll(" ", "");

  var i = 0;
  var j = newStr.length - 1;

  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("never odd or even"));

// Q11
function multiplicationTable(n) {
  for (var i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}

// multiplicationTable(3)

// Q12
function countWords(str) {
  var trimmedStr = str.trim();

  var count = 0;
  for (var i = 0; i < trimmedStr.length; i++) {
    if (trimmedStr[i] === " " && trimmedStr[i + 1] === " ") {
      continue;
    }
    if (trimmedStr[i] === " ") {
      count++;
    }
  }
  console.log(count + 1);
}

// countWords("I love       JavaScript");

// Q13
function removeDuplicates(arr) {}

// Q14
function CharFrequency(str) {
  var obj = {};

  for (const char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj);
}

// CharFrequency("banana");

// Q15
function isAnagram(str1, str2) {
  var newStr1 = str1.toLowerCase();
  var newStr2 = str2.toLowerCase();
  if (newStr1.length !== newStr2.length) return false;
  else {
    var count = new Array(26).fill(0);
    // .charCodeAt() it gives ascii value
    for (var i = 0; i < newStr1.length; i++) {
      count[newStr1.charCodeAt(i) - 97]++;
    }
    for (var i = 0; i < newStr2.length; i++) {
      count[newStr2.charCodeAt(i) - 97]--;
    }
    for (var i = 0; i < count.length; i++) {
      if (count[i] !== 0) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isAnagram("Listen", "Silent"));

// Q16
function fibonacciSeries(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  var series = [0, 1];

  for (var i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

// console.log(fibonacciSeries(8));

// Q18
function capatilize(str) {
  var strArr = str.split(" ");

  for (var i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }

  console.log(strArr.join(" "));
}

// capatilize("learn javascript every day");

// Q19
var arr = [1, 2, 4, 5, 6];

function findMissing(arr) {
  var n = arr.length + 1;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  var tsum = (n * (n + 1)) / 2;
  console.log(tsum - sum);
}

// findMissing(arr);

// Q20
function chunkArray(arr, n) {
  var resArr = [];
  for (var i = 0; i < arr.length; i += n) {
    resArr.push(arr.slice(i, i + n));
  }
  console.log(resArr);
}

chunkArray([1, 2, 3, 4, 5, 6, 7], 3);

// Q21
function reverse(arr, start, end) {
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

function rotateArray(arr, n) {
  n = n % arr.length;

  var a = reverse(arr, 0, arr.length - n - 1);
  var b = reverse(arr, arr.length - n, arr.length - 1);
  var ans = reverse(arr, 0, arr.length - 1);

  console.log(ans);
}

// rotateArray([1, 2, 3, 4, 5], 2);

// Q22
function twoSum(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSum([3, 2, 4], 6));
