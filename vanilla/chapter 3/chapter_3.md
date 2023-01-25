Chapter 3 – Arrays

This chapter explores the array: reading, changing, as well as adding and removing elements (which change the array’s length). Before chapter’s end, we touch on associative arrays as well. At this point we expect you to quickly complete the 13 mandatory algorithm challenges. Building array-inspection functions such as min(arr), max(arr), sum(arr) and average(arr) should be easy and rapid.

Let’s review. Arrays store multiple values, which are accessed by specifying an index (offset from array front) in square brackets. This random-access makes arrays well-suited to be read in a different order than they were added. Arrays are less suitable (still common) in scenarios with many insertions and removals, if you need the array to stay in a particular sorted order. In that case, other values might need to be moved to create a space for inserting a new value (or, to fill a vacancy caused by removing a value). Arrays are not limited to one data type: one array can contain numbers, booleans, strings, etc.

Arrays are zero-based: an array’s first value is located at index 0. Accordingly, array attribute .length literally means “one more than the last populated index.” Like other interpreted languages, JavaScript arrays are not fixed-length; they automatically grow as values are set beyond the current length.

Tracking variables with T-diagrams can be very helpful when working with arrays. Use a T-diagram for this chapter’s challenges. Below are constructs we’ll use this chapter. Remember these building blocks!

Declaring a new array:
    var myArr = [];
    console.log(myArr.length); // -> "0"

Setting and accessing array values:
    myArr[0] = 42; // myArr == [42], length == 1
    console.log(myArr[0]); // -> "42"

Array.length is determined by largest index:
    myArr[1] = "hi"; // myArr == [42,"hi"], length == 2
    myArr[2] = true; // myArr == [42,"hi",true], length == 3

Arrays can be sparsely populated:
    myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
    console.log(myArr.length); // -> "5"

Overwriting array values:
    myArr[0] = 101; // myArr == [101,"hi",true,undefined,2]
    myArr[3] = "MG"; // myArr == [101,"hi",true,"MG",2]

Shorten arrays with pop(), lengthen with push():
    myArr.pop(); // myArr == [101,"hi",true,"MG"]
    console.log(myArr.length); // -> "4"
    myArr.push("dat"); // myArr == [101,"hi",true,"MG","dat"]
    console.log(myArr.length); // -> "5"

From your work with the Basic 13 challenges, we assume that you already know how to read from numerical arrays, and that you can easily create JavaScript functions to get the minimum or maximum value, the sum of all values in the array, or the average of all values in the array. If this is not the case, definitely review those implementations before continuing to today’s challenges.

Here is a list of concepts to consider; some or all will be used in this chapter. 

Array.pop() & Array.push()arrays grow: Array.length == lastIdx - 1 if-else statements for /while loopsarrays can contain different typesarrays are objects, passed by ref (ptr)

1. [] Array: Push Front
2. [] Array: Insert At
3. [] Array: Pop Front
4. [] Array: Remove At
5. [] Array: Swap Pairs
6. [] Array: Remove Duplicates

Array.length
Some programmers think of Array.length as the number of array elements. This is usually true, but certain things can cause it not to be the case. If you create and control an array (as opposed to working with an array received from some other code), then you can avoid these things, which will make your code less complex. Let’s explore .length, so that we can keep life simple, for you and your arrays.

The array property .length is defined as ‘one greater than the largest populated index’:

    var myArr == [42,"hi"]; // myArr.length == 2
    myArr.push(true); // myArr == [42,"hi",true] and length == 3

However, when directly setting values in arrays, we can add them at any (non-negative integer) index:

    myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
    console.log(myArr.length); // "5", although we set only 4 values
    myArr.pop(); // myArr == [42,"hi",true,undefined]
    console.log(myArr.length); // "4", although we never set myArr[3]

By setting an array value at an index beyond array’s end, we created an empty space in our array – you could call it ‘sparse’ rather than having entirely contiguous values. Sparseness can be useful – in fact with associative arrays (objects), they will always be sparse – but generally with numerical arrays it vastly simplifies things to avoid this. How would you do this?

When adding a value to an array, use the push() function, or directly add the value to array’s end (arr[arr.length]), or move another value there if you need the new value to be somewhere other than the array’s end. In other words, if you don’t use push(), make sure that arr[arr.length] is the next index in the array to be populated, rather than a larger index.

Likewise, when removing array values, use pop() or directly
decrement the length (arr.length--). This means that if you need to remove a value from the middle of your array, you need to move the last value in the array into that middle index. Even though you are removing a middle value, you won’t be removing that value’s “chair”. You’ll actually be removing the last “chair” in the array, so the value
currently there needs to be moved somewhere else!

Let’s try these techniques on a few challenges. Remember, solve them without creating new arrays.

7. [] Array: Min to Front

Passing By Reference
Arrays are passed by reference. This means that when an array is sent as an argument, a pointer is sent. For this reason, even though parameters are always copies of the originals, with arrays (and all objects) a pointer is copied, resulting in caller and callee both having a copy of the same pointer. Hence both are looking at the same location in memory, and both will reference the same array. When we pass an array to another function, the array is passed “live” – changes the callee makes in that array are reflected when we return to the caller, regardless of whether the called function returns that array.

8. [] Array: Reverse
9. [] Array: Rotate
10. [] Array: Filter Range
11. [] Array: Concat
12. [] Skyline Heights

Another T-Diagram (Loops)
When working through a set of looping instructions with an array, a T-diagram can be especially useful. Let’s do exactly that, with the following code and input array.

    var arr = [42,68,7,21,243,512];
    for (var x = arr.length-2; x > 1; x--) {
        arr[x - 1] = arr[x + 1];
    }

    console.log(arr);
    console.log(x);// Does x exist out here?

As we enter the loop for the firstvtime, here is our T-diagram: We enter the loop (because x > 1) then set arr[x–1] (or arr[3], which is currently 21) to become arr[x+1] (arr[5], or 512). Accordingly, within our diagram in the line for arr, we change the 21 to 512. Then x decrements, so we change that value in our diagram as well, from 4 to 3. Because we see that we will reference arr[x+1] repeatedly, we add that to our T-diagram as well, with a current value of 243. We need to remember to update this, each time we change x. Our updated T-diagram is as follows, as we return to loop’s beginning, to evaluate whether to reenter:

Because x > 1, we indeed reenter the loop. We now set arr[x-1] (arr[2], currently 7) to become arr[x+1], which is already in our diagram (243). Then x decrements to 2, so we must update our arr[x+1] reference: it is arr[3], which is 512. We now return to the FOR loop’s beginning. To the right is our updated T-diagram, as we check whether to reenter the loop:

You can probably complete the exercise on your own at this point, but we’ll continue onward for completeness. Again x > 1, so we do in fact reenter. Again, we set arr[x-1] (arr[1], currently 68) to become arr[x+1] (512 in our diagram). We decrement x to 1 and update our arr[x+1] reference to 243 (although ultimately we won’t need this). Returning to our FOR loop’s beginning, here is our updated T-diagram at this point:

Looking now at x, we see we will not reenter the FOR. We will console.log both arr and x. The final value of arr is [42,512,243,512,243,512]. Yes, x has meaning outside the FOR: a value of 1. 

We hope this second walkthrough shows the clarity that T-diagrams can bring when iterating arrays.

Here are the concepts/methods we’ve discussed; some or all will be used in this chapter’s challenges. As always, don’t use built-in array methods.

for / while loopsArray.pop() & push()avoid sparseness
    arrays grow: arr.length == lastIdx-1if / else statements
can contain different data types in JSarrays are objects, passed by reference (ptr)

13. [] Array: Remove Negatives
14. [] Array: Second-to-Last
15. [] Array: Nth-to-Last
16. [] Array: Second-Largest
17. [] Array: Nth-Largest
18. [] Credit Card Validation

“Truthy” and “Falsy”
JavaScript is well known for its ‘loose’ treatment of data types. In actuality, JavaScript considers almost everything an object, since almost every possible value has a set of methods attached (valueOf, toString, etc). That said, typeof returns six possible values, suggesting that there are six top-level data types: boolean, number, string, object, function, and undefined. (A seventh, introduced in ES6, is left as an exercise for the reader.) JavaScript converts values between data types, as needed. For example, if()converts any value to a boolean, to decide which way to branch.

Most values are considered something and if converted to a boolean, equate to true. Only six values are considered nothing: false, 0, NaN, "", null, undefined; these six are “falsy”, because when converted to a boolean, they equate to false. All other values are “truthy”, including all functions, objects, non-0 numbers (e.g.: - Infinity) and non-empty strings (e.g.: "0" or "false").

19. [] Array: Shuffle
20. [] Array: Remove Range
21. [] Intermediate Sums 
22. [] Double Trouble 
23. [] Zip It
24. [] Short Answer Questions: Arrays
25. [] Weekend Challenge: Arrays

Arrays Review
This chapter covered JavaScript arrays in more depth. We showed how to declare and initialize arrays, how to read from specific indices, and how to write values into arrays – both overwriting existing values, as well as writing into new index locations that likely extend an array’s length. We made significant use of the property.length that is present in every array, and we discussed how this property is usually (but not always) equal to the number of elements present in the array. Specifically, we mentioned that arrays can be sparse, which means we can configure an array so that certain index locations have not yet been written with any value (and hence contain undefined). We rehearsed numerous times the iteration of an array, using a FOR loop. We touched on the subject of function parameters that are passed by reference, and how that changes a function from purely returning advisory information to making permanent changes in the array (or another parameter). We did an exhaustive walkthrough of debugging FOR loops with arrays. Finally, we built on our new understanding of JavaScript data types, and discussed the values that (across type conversion) all equate to false – the six “falsy” values.