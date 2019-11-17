let arr1 = [0, 3, 1, 0, -2];
let arr2 = [4, 2, 1, 5];

function zerosToRight(arr) {
  arr.forEach((item, index) => {
    if (item === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
  });

  return arr;
}

console.log(zerosToRight(arr1));
