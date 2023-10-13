// 1
let userText = prompt ('Please enter your text');

function countVowels(text) {
    let vowelCount = 0;
    let vowels = ['a','e','o','u','i'];
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
    
        if (vowels.includes(text[i])) {
            
            vowelCount++;
        }
    }

    return vowelCount;
};

console.log(countVowels(userText));

// 2
let number = prompt('Please enter your number');

function PowerNumber(num) {
  let powArray = [];
  for (let i = 0; i < num.length; i++) {
    let powNum = Math.pow(num[i], 2);
    powArray.push(powNum);
  }
  return powArray;
};

console.log(PowerNumber(number).join(''));

// 3
let number = prompt('Please enter a list of numbers separated by commas:');
let numArray = number.split(",");


function PositiveNumber(num) {
      let numArray = [];
      let sum = 0;
      for (let i = 0; i < num.length; i++) {
        let positiveNum = parseInt(num[i]);
        if(positiveNum > 0){
            sum += positiveNum;
        }
        
      }
      return sum;
    };
    
    console.log(PositiveNumber(numArray));


// 4
let userText = prompt ('Please enter your text');

 function isogram(word){
    word = word.toLowerCase();
    let letterCount = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letterCount[letter]) {
            return false;
        }
        letterCount[letter] = true; 
        
    }

return true;
 };

 console.log(isogram(userText));


// 5
const userText = prompt('please enter your text');
const countOfRepeat = prompt('please enter the number of repeat');

function Iterate(text, repeat) {
    let result = '';
    for (let i = 1; i <= repeat; i++) {
        result += text;

    }

    return result
};

console.log(
    Iterate(userText, countOfRepeat)
);

// 6
let fibo = parseInt(prompt('Please enter your number'));

function calculateFibonacci(number) {
    let fibSeq = []; 
    
    let num1 = 0; 
    let num2 = 1; 
  
    while (num1 <= number) {
      fibSeq.push(num1); 
      let nextNum = num1 + num2; 
      num1 = num2; 
      num2 = nextNum; 
  
    }
  
    return fibSeq;
  };
  

  console.log(
      calculateFibonacci(fibo)
 );



//  1-emtiazi
const userText = prompt('please enter your text with dash');

function toCamelCase(str) {
    let words = str.split("-");
    let result = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0) {
        result += word;
      } else {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        result += capitalizedWord;
      }
    }
  
    return result;
  };
console.log(toCamelCase(userText));


// 2-emtiazi
let userNumber = prompt('Please enter your number');  

function isNarcissisticNumber(number) {
    
    let strNumber = number.toString();
    let numDigits = strNumber.length;
  
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(strNumber[i]);
      sum += Math.pow(digit, numDigits);
      
    };

    return sum == number;
  };
  
  console.log(isNarcissisticNumber(userNumber)); 


  


