function printNumbers(startNum, endNum) {
  let currNum = startNum;

  function count() {
    console.log(currNum);
  }

  let intervalId = setInterval(function () {
    count();
    currNum++;

    if (currNum === endNum + 1) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printNumbers(3, 9);
