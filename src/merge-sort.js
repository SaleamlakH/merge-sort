export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // sort the left half
  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // merge left and right
  return merge(left, right);
};

const merge = (left, right) => {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // anything left in either of the arrays
  // can be simply pushed into the sorted array
  sorted.push(...left.slice(leftIndex))
  sorted.push(...right.slice(rightIndex));

  return sorted;
};
