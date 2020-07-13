// using the devide and conquer method

const mergeSort = (leftArray, rightArry) => {
  let resultArray = [];

  while (leftArray.length && rightArry.length) {
    if (leftArray[0] < rightArry[0]) {
      resultArray.push(leftArray.shift());
    } else {
      resultArray.push(rightArry.shift());
    }
  }

  return resultArray.concat(leftArray.slice().concat(rightArry.slice()));
};

const doMergeSort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    const middle = array.length / 2;
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return mergeSort(doMergeSort(leftArray), doMergeSort(rightArray));
  }
};

console.log(doMergeSort([5,9,1,3,3,9,-1]));

//console.log(mergeSort([5,-1],[-1]));



