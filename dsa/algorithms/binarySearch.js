/**
 * implement binary search algo using js
 * this technique works on divide and conquer method
 * there are two ways of doing binary search
 * 1. is recursive approach
 * 2. iterative approach
 * array should be sorted for this algorithm
 */

/**
 * real world appications of binary search algorithm
 * as binary search algorithm works for sorted data so it can be used in :
 * Database Management Systems  : indexing database
 * File Systems : search for files
 * Auto-completion and Search Features : many text editors use binary search for suggest auto-completion options
 * and there are other a more applications
 */

/**
 * to learn more about binary search follow these articles
 * https://www.geeksforgeeks.org/binary-search/
 * https://www.geeksforgeeks.org/binary-search-in-javascript/
 * 
 */

/**
 * recursive approach
 * x is the number which needs to be searched
 * start and end are the starting and ending positions of array
 */



export function recursiveApproach(arr, x, start, end) {
  //   base condition
  if (start > end) return false;

  let midPosition = Math.floor((start + end) / 2);
  if (arr[midPosition] == x) {
    return true;
  }
  //  if element at mid is greater than x
  // search on the left half of the mid
  if (arr[midPosition] > x) {
    return recursiveApproach(arr, x, start, midPosition - 1);
  } else {
    //  if element at mid is smaller than x
    // search on the right half of the mid
    return recursiveApproach(arr, x, midPosition + 1, end);
  }
}

/**
 * iterative approach
 * this approach uses a while loop
 * loop runs until it hits a base condition that is start become greater than end
 */

export function iterativeBinarySearcg(arr,x){
   let start = 0;
   let end = arr.length-1;
   // Iterate while start not meets end
   while(start < end){
    let mid =  Math.floor((start + end) / 2);

    if(arr[mid]==x){
        return true;
    }else if(arr[mid]>x){
        end =  mid-1;
    }else{
        start  = mid + 1;
    }

   }
   return false;
}