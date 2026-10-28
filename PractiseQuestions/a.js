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

// console.log(firstNonRepeatingChar('GeeksForGeeks'));

let num = 453;

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumDigits(num));

function occupiedByRow(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
}

// console.log(occupiedByRow([[1,0,1],[0,0],[1]]))

function balancesAfterChanges(starting, changes) {
  let currentBalance = starting;
  let newArr = [];

  for (let i = 0; i < changes.length; i++) {
    currentBalance += changes[i]; // Correctly adds positive or negative numbers
    newArr.push(currentBalance);
  }

  return newArr;
}

// console.log(balancesAfterChanges(10, [5, -3, 2])); // [15,12,14]

function scoreInsertPosition(scores, new_score) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= new_score) {
      return i;
    }
  }
  return scores.length;
}

// console.log(scoreInsertPosition([2, 4, 4, 7], 4)); // 1

function fileFits(capacity, used, size) {
  return capacity >= used + size;
}

// console.log(fileFits(100, 70, 30));

function meetingFits(available, meeting) {
  let startSlot = available[0];
  let endSlot = available[available.length - 1];

  let metStartSlot = meeting[0];
  let metEndSlot = meeting[meeting.length - 1];

  if (metStartSlot >= startSlot && metEndSlot <= endSlot) return true;
  return false;
}

// console.log(meetingFits([9, 12], [10, 11])); // true

function binarySearch(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < numbers[mid]) {
      end = mid - 1;
    } else if (target > numbers[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 8], 5));
