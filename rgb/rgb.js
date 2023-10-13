// 1
const userText = prompt('please enter your words with their number');
function sortStringByNumbers(str) {
    if (str === "") {
      return "";
    }
    const words = str.split(" ");
    const sortedWords = Array(words.length);
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const position = Number(word.match(/\d/)[0]) - 1;
      sortedWords[position] = word;
    }
  
    return sortedWords.join(" ");
  }

  console.log(sortStringByNumbers(userText));

// 2
const usertTime = prompt('please enter your number');
function formatTimes(second){
    if(second > 359999){
        return "Invalid input. Maximum time exceeded.";
    }
    let hours = Math.floor(second / 3600);
    let minutes = Math.floor((second / 60) % 60);
    let sec = second % 60;
  
    return (
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + sec).slice(-2)
    );

    return
}
console.log(
    formatTimes(userTime)
);

// 3
const rgbNumber = prompt('please enter your rgb-number');

function rgb(r, g, b) {
    
    r  = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    let hex_r = (r.toString(16).padStart(2, '0').toUpperCase());
    let hex_g = (g.toString(16).padStart(2, '0').toUpperCase());
    let hex_b = (b.toString(16).padStart(2, '0').toUpperCase());
  
    return hex_r + hex_g + hex_b;
  }

  console.log(rgb(...rgbNumber.split(",")));


// 4
const userNumber = prompt('please enter your text and at the end your number');

function incrementString(str) {
    let numericPart = str.match(/\d+$/); 
    if (numericPart) {
      let num = parseInt(numericPart[0]); 
      num++; 
      let numStr = num.toString(); 
      let paddedNumStr = numStr.padStart(numericPart[0].length, '0'); 
      return str.replace(/\d+$/, paddedNumStr); 
    } else {
      return str + '1'; 
    }
  }

  console.log(incrementString(userNumber));
