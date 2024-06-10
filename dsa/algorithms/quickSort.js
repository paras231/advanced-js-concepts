/**
 * implement quick sort algo
 * this is a sorting algo which works on divide and conquer technique
 * follow below article for more information
 * https://www.geeksforgeeks.org/javascript-program-for-quick-sort/
 */

/**
 * it takes a pivot element and partitions the array
 * it then swaps the array elements
 */

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high - 1; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // Increment index of smaller element
      i++;
      // swipe elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // Swap pivot to its correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1; // Return the partition index
}


// complete the quick sort..
