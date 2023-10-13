// 1
const userText = prompt('please enter your 10digit number');

function validateISBN10(isbn) {
    
    if (isbn.length !== 10) {
      return false;
    }

    var sum = 0;
    for (let i = 0; i < 10; i++) {
      let digit = isbn[i];
      if (i === 9 && digit === 'X') {
        digit = 10;
      }

      if (isNaN(parseInt(digit))) {
        return false;
      }

      sum += parseInt(digit) * (i + 1);
    }

    return sum % 11 === 0;
  }

  console.log(
    validateISBN10(userText)
  );


// 2
function stripComments(text, markers) {
    var markers = markers.split(',').map(
        value=>value.trim()
        );
    let lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        
      for (let marker of markers) {
        let index = lines[i].indexOf(marker);
        if (index !== -1) {
          lines[i] = lines[i].substring(0, index).trim();
          break;
        }
      }
    }
    return lines.join('\\n');
  }


// 3
const time = prompt('please enter your time');

function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const units = [
    { unit: "year", duration: 365 * 24 * 60 * 60 },
    { unit: "day", duration: 24 * 60 * 60 },
    { unit: "hour", duration: 60 * 60 },
    { unit: "minute", duration: 60 },
    { unit: "second", duration: 1 },
  ];

  
  const result = [];
  units.forEach(({ unit, duration }) => {
    if (seconds >= duration) {
      const count = Math.floor(seconds / duration);
      seconds %= duration;
      result.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
    }
  });

  if (result.length > 1) {
    const last = result.pop();
    return result.join(", ") + " and " + last;
  } else {
    return result[0];
  }
}

console.log(formatDuration(time));


// 4
const userNumber = prompt('please enter your number with comma');
const givenNumber= userNumber.split(",")

function findMaxSumSubarray(arr) {
  if (arr.length === 0) return 0; 

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    
    currentSum = Math.max(currentSum, arr[i]);

    
    maxSum = Math.max(maxSum, currentSum);
  }

  
  if (maxSum < 0) return 0;

  return maxSum;
}

  console.log(maxSubarraySum(+givenNumber));

  
