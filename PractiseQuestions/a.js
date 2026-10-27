function reverse(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
// console.log(reverse("hello"));

function isPallindrome(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr === str;
}
// console.log(isPallindrome("naman"));

function findLargest(arr) {
  return Math.max(...arr);
}
// console.log(findLargest([99, 5, 3, 100, 1]));

function countChar(str, char) {
  return str.split(char).length - 1;
}

// console.log(countChar("GeeksForGeeks", "G"));

// Frequency Count
function freqCount(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  console.log(freq);
}

// freqCount([1, 1, 2, 3, 3, 4]);

function firstNonRepeatingChar(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  for (let char of arr) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar('GeeksForGeeks'));