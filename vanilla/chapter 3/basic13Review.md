“Basic 13” Review
Solutions for the “Basic 13” algorithm challenges.

1. Print 1-255
Print all the integers from 1 to 255.
    function print1to255() {
        var num = 1;
        while (num <= 255) {
            console.log(num);
            num = num + 1;
        }
    }

2. Print Ints and Sum 0-255
Print integers from 0 to 255, and the sum so far.
    function printIntsAndSum0to255() {
        var sum = 0;
        for (var num = 0; num <= 255; num++) {
            sum += num;
            console.log("New number:" + num + "Sum:" + sum);
        }
    }

3. Print Max of Array
Print the largest element in a given array, by iterating through it and comparing values.
    function printMaxOfArray(arr) {
        if (arr.length == 0) {
            console.log("Empty array, no max value.");
            return;
        }
        var max = arr[0];
        for (var idx = 1; idx < arr.length; idx++) {
            if (arr[idx] > max) {
            max = arr[idx];
            }
        }
        console.log("Max value is:" + max);
    }

4. Print Odds 1-255
Print all odd integers from 1 to 255.
    function printOdds1to255() {
        var num = 1;
        while (num <= 255) {
            console.log(num);
            num = num + 2;
        }
    }

5. Return Odds Array 1-255
Create an array with odd integers from 1-255.
    function returnOddsArray1to255() {
        var oddArray = [];
        for (var num = 1;num <= 255;num += 2) {
            oddArray.push(num);
        }
        return oddArray;
    }

6. Print Array Values
Print all values in a given array by iterating through it.
    function printArrayValues(arr) {
        for (var index = 0; index < arr.length; index++) {
            console.log("array[" + index + "] is equal to" + arr[index]);
        }
    }

7. Print Average of Array
Analyze an array’s values and print the average.
    function printAverageOfArray(arr) {
        if (arr.length == 0) {
            console.log("Empty arr, no average val");
            return;
        }
        var sum = arr[0];
        for (var idx = 1; idx < arr.length; idx++) {
            sum += arr[idx];
        }
        console.log("Average value is:" + sum / arr.length);
    }

8. Greater than Y
Count and print the number of array values less than a given Y.
    function numGreaterThanY(arr, y) {
        var numGreater = 0;
        for (var idx = 0; idx < arr.length; idx++) {
            if (arr[idx] > y) { 
                numGreater++; 
            }
        }
        console.log("%d values are greater than %d", numGreater, y);
    }

9. Print Max, Min, Average Array Values
Given an array, print max, min and average values.
    function printMaxMinAverageArrayVals(arr) {
        if (arr.length == 0) {
            console.log("Null arr, no min/max/avg");
            return;
        }
        var min = arr[0];
        var max = arr[0];
        var sum = arr[0];
        for (var idx = 1; idx < arr.length; idx++) {
            if (arr[idx] < min) { 
                min = arr[idx]; 
            }
            if (arr[idx] > max) { 
                max = arr[idx]; 
            }
            sum += arr[idx];
        }
        console.log("Max:" + max + " Min:" + min);
        console.log("Avg value:" + sum / arr.length);
    }

10. Square Array Values
Given an array, square each value in the array.
    function squareArrVals(arr) {
        for (var idx = 0; idx < arr.length; idx++) {
            arr[idx] = arr[idx] * arr[idx];
        }
        return arr;
    }

11. Zero Out Array Negative Values
Set negative array values to zero.
    function zeroOutArrayNegativeVals(arr) {
        for (var idx = 0; idx < arr.length; idx++) {
            if (arr[idx] < 0) {
                arr[idx] = 0;
            }
        }
        return arr;
    }

12. Shift Array Values Left
Shift array values: drop the first and leave '0' at end.
    function shiftArrValsLeft(arr) {
        for (var idx = 1; idx < arr.length; idx++) {
            arr[idx - 1] = arr[idx];
        }
        arr[arr.length - 1] = 0;
        return arr;
    }

13. Swap String for Array Negative Values
Replace any negative array values with 'Dojo'.
    function swapStringForArrayNegativeVals(arr) {
        for (var idx = 0; idx < arr.length; idx++) {
            if (arr[idx] < 0){
                arr[idx] = "Dojo";
            }
        }
        return arr;
    }