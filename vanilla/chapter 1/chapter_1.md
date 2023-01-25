Chapter 1 – Fundamentals

1. [] Settings and Swapping
2. [] Print -52 to 1066
3. [] Don't Worry, Be Happy
4. [] Multiples of Three - but Not All
5. [] Printing Integers with While
6. [] You Say It's Your Birthday
7. [] Leap Year
8. [] Print and Count
9. [] Multiples of Six
10. [] Counting, the Dojo Way
11. [] What Do You Know?
12. [] Whoa, That Sucker's Huge
13. [] Countdown by Four
14. [] Flexible Countdown
15. [] The Final Countdown

Return Values
Parameters give functions a lot more flexibility. However, sometimes you don’t want a function to do all the work; maybe you just want it to give you information so that then your code can do something based on the answer it gives you. This is when you would use the return value for a function.

Functions have names (usually). They (often) have parameters. They have code that will run when the function is executed. They generally have a return value as well, which is simply a value that is returned to the caller when the function finishes executing. Not all functions have return values, and looking at source code you might think that not all functions have a return statement. However, they indeed do, because if there is nothing stated, an implicit return is added automatically at the end of the function.

In JavaScript, if a caller “listens” to a function that ends with return, the caller receives undefined. If we want to be more helpful, we can explicitly return a value (for example, a variable or a literal). In other words, our function could return myNewName; or could return "Zaphod";. In either case, once the return statement runs, any subsequent lines of code in our function will not be executed. When program execution encounters a return, it exits the current function immediately.

If functions can return values, to tell us the answer, then whoever calls those functions must listen for that answer. It is easy enough to execute a function (greetSomeone(nameStr), below) that has no return. If a function does return a value, then to actually receive that value the caller should save the result into a var, or otherwise “listen” to what it says (tellMeAGoodJoke(), below after):

    // Calling a function that
    // does NOT return a value
    greetSomeone("Claire");
    // This one DOES return a value
    var aJoke = tellMeAGoodJoke();
    console.log(aJoke);

Above, tellMeAGoodJoke() returns a string which we copy into aJoke and display. See below for how to declare that function, but beware the function’s sequel!

    function tellMeAGoodJoke() {
        var jokeStr = "Have you heard about corduroy pillowcases?";
        jokeStr = jokeStr + " .... They're making headlines!";
        return jokeStr;
        jokeStr += "Thanks, I'm here all week..."; // this will never run!
    }

    // It may be a good joke, but it's a BAD FUNCTION. You only return once!

    function tellMeAnotherOne() {
        var joke = "How many surrealists does it take to screw in a lightbulb?";
        return joke;

        return " .... A fish."; // Wha? Oh I get it...but JavaScript won't.
    } 
    // Remember: you can’t return twice!


Arrays
An array is like a cabinet with multiple drawers, where each drawer stores a number, string, or even another array. In JavaScript, arrays are created by code like this:

    var arr = [2, 4, 6, 8]; // create array with four distinct values

In our example, we created an array called arr. This array arr is like a file cabinet with three drawers. To look into one of these file cabinets, we have to specify which one. Each drawer is numbered, starting at the number 0 (not 1). The first drawer, drawer 0, has a value of 2; the second drawer, labeled 1, has a value of 4; the next drawer, which we call drawer 2, has a value of 6. In our code, we reference the different locations in an array by specifying the ‘drawer number’, which is really the offset from the beginning of our array. Specifically, we read an array value by putting its offset between square-brackets, as follows:

    console.log(arr[1]); // "4" (Not 2 - this is at arr[0])

Arrays have three important built-in properties: push, pop and length. We add a value to the end of our array (which lengthens it by one) with push:

    arr.push(777); // arr was [2,4,6,8], is now [2,4,6,8,777]

This pushes a new value onto the end of the array, so arr has a new value and is slightly longer – it is now [2,4,6,8,777].

Similarly, we remove (and return) the value at the end of the array (and we shorten our array by one) by using the pop function:

    var last = arr.pop(); // arr was [2,4,6,8,777], is now [2,4,6,8]
    console.log(last); // "777" - this is what pop() returned

The examples we’ve used above have lengthened and shorted our array. We see this on the page by just looking at all the values, but how would we quickly do this in code? We would use a useful property on every array called length. This is attached to each array like pop and push are, but it is not a function, so you do not need parentheses when using it:

    console.log(arr); // "[2,4,6,8]"
    console.log(arr.length); // "4" - vals are stored at indices 0,1,2,3

Said another way, arr.length is always one greater than arr‘s highest populated index.


Writing Values into Arrays
In the previous example, our array arr had four (sometimes five) values. Each value in an array has its own space set aside for it, like the different drawers in a file cabinet.

    var arr = [2, 4, 6, 8]; // create array with four distinct values

The beginning drawer (at index 0) has a value of 2; the second drawer (index 1) has a value of 4; the third drawer (index 2) has a value of 6. We change values within an array in the same way that we reference its values when reading from it: we enclose the index in square brackets, like this:

    arr[1] = 10; // arr was [2,4,6,8], is now [2,10,6,8].

This statement sets arr[1] to be 10. It puts value 10 into arr[1]: index (drawer) 1 within arr.

We often need to swap the values of two variables (this will be handy later, for algorithms such as “reverse an array”). We can treat the spaces in an array exactly the same. What if we tried swapping the value at index 1 with the value at index 3? We might try something like the below:

    // arr is currently [2,10,6,8]. We want to change it to [2,8,6,10]
    x[1] = x[3];
    x[3] = x[1];
    console.log(x); // ...but this code won't work quite right.
    // arr got messed up! It is now [2,8,6,8].

The code above wouldn’t quite work. For example, let’s talk through this code step by step.
Before starting, arr is equal to [2,10,6,8].
In line 2, we set arr[1] to be the value in arr[3], which is 8. Therefore, arr becomes [2,8,6,8].
When we run line 3, we set arr[3] to be the value in arr[1], which is now 8. Thus, we overwrite an 8 with an 8, and arr remains [2,8,6,8].

We can avoid this problem by creating a temporary variable to store the value of arr[1] before it is overwritten. To swap values (in an array or elsewhere), use a temporary variable. For example:

    arr = [2, 10, 6, 8];
    temp = arr[1]; // arr == [2,10,6,8], temp == 10
    arr[1] = arr[3]; // arr == [2,8,6,8], temp == 10
    arr[3] = temp; // arr == [2,8,6,10], temp == 10
    console.log(arr); // displays [2,8,6,10]

Success! Now, onward to algorithm challenges that use arrays.

16. [] Countdown
17. [] Print and Return
18. [] First Plus Length
19. [] Values Greater than Second
20. [] Values Greater than Second, Generalized
21. [] This Length, That Value
22. [] Fit the First Value
23. [] Fahrenheit to Celsius
24. [] Celsius to Fahrenheit

Combining Arrays and FOR Loops
In programming, it’s very common to loop through each array value. We can do this as follows:

    var nums = [1,3,5,7]; // set up our loop
    for (var idx = 0;idx < nums.length;idx++) // for each index in arr...
    {
        console.log(nums[idx]); // ...print the value
    }

This prints each value in the array, using a FOR loop that iterates once for each array value.

What if we wanted an array with multiples of 3 up to 99,999? We accomplish this with the code below:

    var arr = []; // create empty array
    for (var val = 3;val <= 99999;val += 3) // val will be 3,6,...99999
    {
        arr.push(val); // add each val to arr
    }
    console.log(arr); // [3,6,9,12,..., 99999]

You will frequently write loops that, at each iteration’s end, compare a variable (like idx) to the array’s .length. Note: push() and pop()change an array’s .length; if you need the original, save it off.

Here’s an example of code that does not work as the programmer intended:

// BADC0DE – intentionally buggy
function addEvenCount(arr) {
// Count array even values & add that number to end of array
    for (var idx = 0; idx < arr.length; idx++) {
        if (idx == 0) {
            arr.push(0); // First time, add 0 to end.
        }
        if (arr[idx] % 2 == 0) { // Then just add to it as we go.
            arr[arr.length - 1] += 1;
        }
        }
    } // Oops! We counted the "2" as well.

The problem, of course, is that if we push our zero to the end of the array, that increments arr.length, and now our FOR loop will run on the index we just added as well. Given [0,3,6,5], we want to change the array to [0,3,6,5,2], but would instead change it to [0,3,6,5,3].

25. [] Biggie Size
26. [] Print Low, Return High
27. [] Print One, Return Another
28. [] Double Vision
29. [] Count Positives
30. [] Evens and Odds
31. [] Increment the Seconds
32. [] Previous Lengths
33. [] Add Seven to Most
34. [] Reverse Array
35. [] Outlook: Negative
36. [] Always Hungry
37. [] Swap Toward the Center
38. [] Scale the Array

Using a T-Diagram

When trying to decipher complex code, particularly if someone else wrote it, T-diagrams can prove valuable. Eventually you may not need them, but while you are early in the journey to become a selfsufficient developer, you should use them frequently. Here’s how they work:

T-diagrams record the state of local variables, including arrays and their indices. After each assignment in your code, update the diagram. Before a conditional (IF/ELSE, or each time through a WHILE or FOR loop) check variable values in a T-diagram to predict how code will behave. Let’s try a short function.

Here’s the code we will trace through. No sweat, right?
    1. var arr = [1,3,5];
    2. var idx = arr[1];
    3. arr[idx] = arr[0];
    4. idx--;
    5. arr.push(arr[idx]);
    6. idx = arr.length - arr[idx];
    7. console.log(idx + arr[idx]);

Lines 1-2: following these lines, we have T-diagram A. We reflect that idx has been set to 3, so the following line refers to arr[3].
Line 3: in this line, we set arr[3] to become 1, which is reflected in T-diagram B.
Line 4: afterdecrementing idx, we have T-diagram C,including the arr[idx] (which is arr[2]) needed by line 5.
Line 5: we push 5 to array’s end. T-diagram D now represents our state (including the updated arr.length).
Line 6: this updates idx. T-diagram E reflects this value (5-5, or 0), and our updated arr[idx].
Line 7: this line sums the two values (0 + 1), to determine what will be printed by console.log. T-diagram E makes it obvious: 1.

We hope this quick walkthrough shows how T-diagrams can clarify even fairly complicated code.

39. [] Only Keep the Last Few
40. [] Math Help
41. [] Poor Kenny
42. [] What Really Happened?
43. [] Soaring IQ
44. [] Letter Grade
45. [] More Accurate Grades

Comments

Source code containing good comments is a joy to work with. You don’t spend as much time trying to figure it out, because the creator cared enough to spend just a few moments ahead of time to explain it. There are two ways to write comments in JavaScript source code.

One option is //. After a double-slash, the rest of that line is a comment. Your code might look like this:

// This is a very friendly function, if I do say so myself.
    function greetSomeone(person) {
        if (person == "Martin") // Check whether it is Martin...
        {  
            console.log("Yo dawg, howz it goin?");
        }
        else // if not, probably some normal human.
        {
            console.log("Greetings Earthling!");
        }
    }

Another option is /* ... */ . These /* and */ bookends can span multiple lines, and everything between them is considered a nonsource-code comment. This style would look like this:

    /*
        Simple function that responds directly if the person is Martin, otherwise it provides a more generic salutation. No return value.
    */
    function greetSomeone(person)
    {
        if (person == "Martin") {
            console.log("Yo dawg, howz it goin?");
        } else {
            console.log("Greetings Earthling!"); /* no clue who this is... */
        }
    }

Both are commonly used. Quick comments sprinkled throughout your code are usually //; larger comment blocks are often /* ... */. The main thing is simply to add a few comments. The next person to work with the code (perhaps a future YOU when you have forgotten details) will appreciate it.

Now that you have been introduced to the foundation concepts of source code execution, variables, conditionals, loops, arrays, functions, parameters, return values and comments, you are ready to continue onward to the rest of the algorithm materials. Enjoy!

46. [] Short Answer Questions: Fundamentals
47. [] Weekend Challenge: Fundamentals

Fundamentals Review

This chapter covered a number of very important topics. Most importantly, we introduced you to the creation, reading, and changing of arrays, including using arrays in conjunction with FOR loops. We also showed how functions can not only accept input values (parameters), but also output a value back to the caller as well (return values). We gave our first example of how to use a Tdiagram (there will be more of these), to make sense of a piece of source code. Finally, we demonstrated two ways to add comments to your source code, after talking about the importance of good commenting.

48. [] Basic 13