// The “Buggy 13” (#1)
// Below are submissions for the “Basic 13” challenges. Unfortunately, some of these contain errors. Which solutions have bugs, what are they, and how would you fix them?

// Print1To255()
// Print all the integers from 1 to 255.
    function print1to255() {
        var num = 1;
        while (num < 255) {
            console.log(num);
            num = num + 1;
        }
    }


// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
    function printIntsAndSum0to255() {
        var sum = 0;
        for(var num = 0;num <= 255;num++)
            { sum += num; }
        return sum;
    }


// PrintMaxOfArray(arr)
// Print the largest element in a given array.
    function printMaxOfArray(arr) {
        if (arr.length == 0) {
            console.log("[], no max val.");
            return;
        }
        var max = 0;
        for (var idx = 0;
            idx < arr.length; idx++) {
            if (arr[idx] > max)
            { max = arr[idx]; }
        }
        console.log("Max val is:", max);
    }


// PrintOdds1To255()
// Print all odd integers from 1 to 255.
    function printOdds1to255() {
        var num = 1;
        while (num <= 255) {
            console.log(num + 2);
        }
    }


// PrintArrayVals(arr)
// Print all values in a given array.
    function printArrayVals(arr) {
        for var idx = 0;idx < arr.length; arr++) {
            console.log("array[", idx, "] = ",arr[idx]);
        }
    }


// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
    arr = [1,4,7,2,5,8];
    if (arr.length == 0) {
        console.log("[ ], no avg val.");
    return;
    }

    var sum = arr[0];
    for (var idx=1;idx<arr.length;idx++) {
        sum += arr[idx];
    }

    console.log("Avg val:", sum/arr.length);


// ReturnOddsArray1To255()
// Create & return array with odd integers 1-255.
    function returnOddsArray1to255() {
        var oddArray = [];
        for (var num=1; num<=255; num+=2)
            { oddArray.push(num); }
    }


// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return count greater than Y.
    function countGreaterThanY(arr, y) {
        var numGreater = 0;
        for(var idx = 0;
            idx < arr.length; idx++) {
            if (arr[idx] > y)
            { numGreater++; }
        }
        return arr[y];
    }


// PrintMaxMinAverageArrayVals(arr)
// Print the max, min and average array values.
    function printMaxMinAverage(arr) {
        if (arr.length == 0) { 
            return; 
        }
        var min = arr[0];
        var max = arr[0];
        var sum = arr[0];
        for (var idx = 1; idx <= arr.length; idx++) {
            if (arr[idx] < min)
                { min = arr[idx]; }
            if (arr[idx] > max)
                { max = arr[idx]; }
            sum += arr[idx];
        }
        return min;
        return max;
        return avg;
    }


// SquareArrayVals(arr)
// Given an array, square each value in the array.
    function squareArrVals(arr) {
        for ( var idx = 0; idx < arr.length; idx++){
            arr[idx] = arr[idx] + arr[idx];
        }
    }


// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
    zeroOutArrayNegativeVals(arr) {
        for ( var idx=0; idx<arr.length; idx++){
            if (arr[idx]<0) { arr[idx]=0; }
        }
    }


// ShiftArrayValsLeft(arr)
// Shift array values forward, leaving '0' at end.
    function shiftArrayValsLeft(arr) {
        for(var ix=1;ix<arr.length;ix++){
            arr[ix - 1] = arr[ix];
        }
        arr.length--;
        return arr;
    }


// SwapStringForArrayNegativeVals(arr)
// Replace negative array values with 'Dojo'.
    function swapStringForArrNegs(arr){
        for (var idx = 0; idx<arr.length; idx++){
            if(idx < 0) { arr[idx]="Dojo" }
        }
        return arr;
    }