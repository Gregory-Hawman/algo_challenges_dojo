// The “Bugful 13” (#2)
// Below are submissions for the “Basic 13”.
// What errors can you find?

// Print1To255()
// Print all the integers from 1 to 255.
    function print1to255() {
        for(var num = 1;num <= 255;num--) {
            console.log(num);
        }
    }

// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
    function printIntsAndSum0to255() {
        var sum = 0;
        for (var num=0; num<=255; num++) {
            console.log(num," Sum:",sum);
            sum += num;
        }
    }

// PrintMaxOfArray(arr)
// Print the largest element in a given array.
    function printMaxOfArray(arr) {
        if (arr.length == 0) {
            console.log("[], no max val.");
            return;
        }
        var max = arr[0];
        for ( var idx = 1; idx < arr.length; idx++) {
            if (arr[idx] > max) {
                max = arr[idx];
            }
            console.log("Max val:", max);
        }
    }

// PrintOdds1To255()
// Print all odd integers from 1 to 255.
    function printOdds1to255() {
        var num = 1;
        while (num <= 255) {
            console.log(num);
            num ++= 2;
        }
    }

// PrintArrayVals(arr)
// Print all values in a given array.
    function printArrayVals(arr)
        {
        for( var idx=0; idx<arr.length; idx++) {
            console.log("array[", idx,"] =", idx);
        }
    }

// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
    function printAverageOfArray(arr) {
        if (arr.length == 0) {
            console.log("[], no avg val.");
            return;
        }
        var sum = arr[0];
        for ( var idx = 0;idx < arr.length; idx++ ){
            sum += arr[idx];
        }
        console.log(sum/arr.length);
    }

// ReturnOddsArray1To255()
// Create & return an array with odd integers from 1-255.
    function returnOddsArray1to255() {
    // create empty array
    // setup for loop, with max iterations
    // { add # to array }
    // return array
    }

// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return the count that is greater than Y.
    function returnArrayCountGreaterThanY(arr, y) {
        var numGreater = 0;
        for (var idx = 0;idx < arr.length;idx++){
            if (arr[idx] > y) { y++; }
        }
        console.log("%d values greater than %d", numGreater, y);
    }

// PrintMaxMinAverageArrayVals(arr)
// Given an array, print max, min and average values.
    function printMaxMinAverageArrayVals(arr) {
        if (arr.length == 0) {
            console.log("[] arr, no min/max/avg");
            return;
        }
        var min = arr[0];
        var max = arr[0];
        var sum = arr[0];
        for (var idx=1; idx <= arr.length;idx++){
            if (arr[idx] < min) { 
                min = arr[idx]; 
            }
            if (arr[idx] > max) { 
                max = arr[idx]; 
            }
            sum += arr[idx];
        }
        console.log("Max val:", max);
        console.log("Min val:", min);
        console.log("Avg val:", sum/arr.length);
        return [max, min, avg];
    }

// SquareArrayVals(arr)
// Given an array, square each value in the array.
    function squareArrVals(arr) {
        for (idx = 0; idx < arr.length; idx++) {
            arr[idx] = arr[idx * idx];
        }
    }

// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
    function zeroOutArrayNegativeVals(arr) {
        for (var idx = 1;idx < arr.length;idx++) {
            if (arr[idx] < 0) {
                arr[idx] = 0;
            }
        }
    }

// ShiftArrayValsLeft(arr)
// Given an array, shift values leftward by one. Drop first values and leave extra '0' value(s) at end.
    function shiftArrValsLeft(arr) {
        for (var idx = 1;idx < arr.length;idx++) {
            arr[idx + 1] = arr[idx];
        }
            arr[arr.length - 1] = 0;
        return arr;
    }

// SwapStringForArrayNegativeVals(arr)
// Given an array, replace negative values with 'Dojo'.
    function swapStringForArrayNegativeVals(arr) {
        for (var idx = 0;idx < arr.length;idx++) {
            if (arr[idx] <= 0) {
                arr[idx] = "Dojo";
            }
        }
        return arr;
    }