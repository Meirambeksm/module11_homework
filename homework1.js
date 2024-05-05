const array = [8, 10, 1, 0, 3, 7, 100, 645, true, null, undefined, 0];

let itemZero = 0;
let itemOdd = 0;
let itemEven = 0;

function sortArray() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) itemZero++;
    if (typeof array[i] === "number" && array[i] > 0) {
      if (array[i] % 2) itemOdd++;
      else itemEven++;
    }
  }

  console.log(
    `В массиве "array": нулей = ${itemZero}; нечетных = ${itemOdd}; и четных = ${itemEven}`
  );
}

sortArray();
