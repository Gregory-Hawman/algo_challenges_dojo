// [] Array: Buffer Copy
// Create arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVal s) to copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc. Do not lengthen destArr, nor read off the end of sourceArr.

// Second: if you reach either array’s end, wraparound to continue writing/reading at beginning of array.

// Third: if numVals > destArr.length, only copy the minimum needed amount.

// Fourth: sourceArr can now be the same array as destArr! Only handle the non-wrap case. That is, you can assume that you won’t need to read beyond arr.length. You can extend the array on writes.

// Fifth: if you made it this far, good job! Now for a real challenge: handle all possible cases where sourceArr and destArr are the same array, including wraparound, not overwriting original array data prematurely, nor extending it, but copying all data in-place. If arr.length is 100, how would you handle significant wraparound and overwriting, such as arrBufferCopy(arr,arr,30,80,95)?

