function checkGameStatus(board) {
    // Check for horizontal wins
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return board[row][0];
      }
    }
  
    // Check for vertical wins
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }
  
    // Check for diagonal wins
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
      return board[1][1];
    }
  
    // Check for cat's game
    let isGameFinished = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === 0) {
          isGameFinished = false;
          break;
        }
      }
    }
    if (isGameFinished) {
      return 0;
    }
  
    // Game is still ongoing
    return -1;
  }


//   exmple
  const board = [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
  ];
  
  const result = checkGameStatus(board);
  console.log(result);


// -----------------------
// 2

function solution(nums) {
    let result = [];
    let i = 0;
    while (i < nums.length) {
      let start = nums[i];
      let end = start;
      while (i + 1 < nums.length && nums[i + 1] === end + 1) {
        end += 1;
        i += 1;
      }
      if (end - start >= 2) {
        result.push(start + "-" + end);
      } else if (end - start === 1) {
        result.push(start + "," + end);
      } else {
        result.push(start.toString());
      }
      i += 1;
    }
    return result.join(",");
  }
  
//   exmp
  let nums = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
  console.log(solution(nums));
//   -10--8,-6,-3-1,3-5,7-11,14,15,17-20