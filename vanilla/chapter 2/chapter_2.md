Chapter 2 – Fundamentals, Part II

This chapter, we will review basic blocks of programming: conditionals, logic operators, loops and a few techniques. All of the following concepts are used in this chapter:

Variablesfunctionsfor loopswhile loopsconditional (if-else) statements
    console.logparametersreturn valuesMath.random | Math.ceil |
Math.floor | Math.trunc

Review: define variable. Think of it as simply an empty container with a label. Once you put a value into the container, you can refer to this value by the label. We put a value into a variable using singleequals, which you read as “is set to a value of”. In other words, var name = "Zaphod" can be read as Variable labeled "name" is set to a value of "Zaphod". After this line of code, when you refer to "name", you get a value of "Zaphod". If you are still getting used to the idea of variables, don’t panic.

1. [] Sigma
2. [] Factorial
3. [] Star Art
4. [] Character Art

It is imperative at this point in the bootcamp that you can rapidly complete the mandatory coding challenges from the Algorithm Platform. If you have not yet correctly answered each of them in under two minutes, then revisit the Algorithm Platform, “Reset All Challenges”, and see how speedily you can complete them. Repeat until you can reliably finish each of them in less than two minutes.

Modulo Operator
So far you have learned about basic arithmetic operators to add (+), subtract (-), multiply (*) and divide (/). You may also have realized that JavaScript uses the + operator to concatenate strings as well! Now we want to introduce you to another operator, called modulo (%). Modulo is a companion operator to divide – think of it as “remainder”. Given two numbers, modulo divides the second number into the first number an integer number of times, and returns the remainder. Examples: (34 % 6) is 4 because 34 integer-divides into 6 five times (30), leaving a remainder of 4. Modulo is great for determining if a number is even/odd: (16 % 2) is 0: it is even. Is 42 a multiple of ten? (42 % 10) is 2: no, it is not.

5. [] Threes and Fives
6. [] Generate Coin Change
7. [] Messy Math Mashup
8. [] Twelve-Bar Blues
9. [] Fibonacci
10. [] Sum to One Digit
11. [] Clock Hand Angles
12. [] Is Prime

Being able to write a T-diagram to keep track of your variables while you write out an algorithm by hand is extremely beneficial. You should use a T-diagram for algorithm challenges this chapter.

Math Library
A library is a related set of functions and values that have been grouped together under a common name. Traditionally this is done for less common functions, so they can be excluded from certain minimized versions of a language (e.g.: if we want a micro- JavaScript for some future Apple Ring™). Looking back now, it seems incredible that a language without math functions would be useful. Nonetheless JavaScript has grouped certain numerical functions and values into the Math library. When using these, put Math. before it (just like when using log()from console library!). Note that libraries are not limited to just functions. They can also include values such as Math.PI. Right now, however, we will focus on four functions in this library: random(), floor(), ceil() and trunc().

The first, Math.random, returns a randomly generated decimal number between 0 and 1. It can theoretically return zero, but it cannot return one; for this reason, you can think of it as returning some number between zero and ‘almost-one’. The other three functions are related: they accept a decimal number and return an integer. Given an integer, all three leave it unchanged. Otherwise, floor is a pessimist, ceil is an optimist, and trunc is a simplifier. Math.floor makes negative numbers more negative, and positives less positive. Conversely, Math.ceil makes positives more positive, and negatives less negative. Math.trunc drops any fraction, moving the number toward zero.

    Math.floor(2.718) and Math.trunc(2.718) both return 2, but
    Math.ceil(2.718) returns 3. Math.floor(-3.1416) is -4; both
    Math.trunc(-3.1416) and Math.ceil(-3.1416) are -3.

Naturally, Math.ceil(42) == Math.trunc(42) == Math.floor(42) == 42.

One last idea. What if you want a random integer as low as 51 and as high as 100? Math.random() is “from 0 to almost-one”.

Math.random()*50, then, is “from 0 to almost-50”. Let’s turn those decimal ranges into integers: Math.trunc(Math.random()*50) is “50 possible integers from 0 to 49”. Let’s add an offset, so we start at 51: Math.trunc(Math.random()*50)+51 is perfect. Whew!

13. [] Rockin' the Dojo Sweatshirt
14. [] Clock Hand Angles, Revisited

Using Modulo to Extract a Digit
If variable myBigNum contained a big number, how would you get the value of the ‘hundreds’ digit? (To review, the hundreds digit of 32768 is ‘7’, since it is thirty-two thousand, seven hundred sixtyeight.) First, you might myBigNum = myBigNum / 100, to shift the decimal point to exactly where you want (result: 327.68). Then, Math.floor(myBigNum) could remove any decimal leftovers (result: 327). Finally, you could use % to extract only the ‘ones’ digit. What is % and how does it work?

The % (modulo) operator often goes with / (divide). Basically, % divides first number evenly by second, and returns remainder. Example: 255 % 20 is 15, and 16 % 2 is 0. And … 327 % 10 becomes
the 7 we want. Putting it all together, we print the ‘hundreds’ digit like this:

    console.log(Math.floor(myBigNum / 100) % 10);

Let’s decode this. Formulas are computed inside out, so start with the division inside the parentheses. Once we’ve done that, our formula is simplified:

    console.log(Math.floor(327.68) % 10);

Then comes the floor call. After evaluating that, our formula is:

    console.log(327 % 10);

And finally comes the modulo operation, after which we have this! console.log(7);

15. [] Extract-o-matic
16. [] Most Significant Digit

Variables that Live Longer than a Single Function Call
If you declare a var within a function, it is created when entering, and destroyed when exiting that function. For a var to stay alive after you leave, you must declare it outside. That declaration will be called only once, when the file is loaded – including any initialization done on that variable. This can be useful if you want functions to “remember” values between successive calls to them. You should contain variables within a function when possible, but you can declare them outside if needed.

17. [] Gaming Fun(damentals)
18. [] Statistics Until Doubles
19. [] Claire is Where?
20. [] Date, on a Deserted Island
21. [] Short Answer Questions: Fundamentals, Part II
22. [] Weekend Challenge: Funamentals, Part II

Fundamentals Part II Review
The two chapters prior to this one rapidly introduced you to many important concepts that underlie all of computing. These include source code, programming languages, code flow, variables and data types (such as numbers, booleans and strings), conditionals, operators (such as =, ==, ===, &&, ||, !, +=, ++, -=, -- and %), loops (including FOR, WHILE, BREAK, CONTINUE), creating and executing your own functions (including input parameters and the return value), arrays, T-diagrams and comments.

This chapter added numerical tools to our palettes: including the floor, ceil, round, trunc and random functions from the Math library. We learned about the % operator, which is invaluable for determining remainders, or for extracting digits or fractional values from a compound number. We also were introduced to the concept of scope: a variable declared within a function is not visible outside it, but a variable declared outside a function can be visible inside it.

You are now fully equipped to solve a very broad number of basic computing challenges! There are still many more concepts for you to learn, so don’t be discouraged if you go looking for interesting algorithm problems only to find that many of them are confusing or too difficult. Over time, with more repetition and practice, as these ideas sink in, and as we add more of these concepts, you will become better and better at breaking problems into understandable pieces that you can conquer with confidence. Onward!


Solving Whiteboard
Problems (RIOT WALK)

When Donald Knuth solved his PhD thesis problem in less than two hours, he sent the whiteboard to his advisor’s office as proof! Actually, I made up that whiteboard part – but it makes a good segue….

No company ships code on whiteboards, but most software interviewers still require candidates to write software on those pesky white surfaces. Regardless of tech skills needed once you are employed, you first must land the job in the first place. So, you should start practicing your whiteboarding skills now.

Here’s the thing: technical interviewers don’t just want correct code. They look for you to communicate, listen and respond. They expect you to break down problems logically. Got a consistent system? Ask and ye shall receive! OK maybe you didn’t ask, but here it is. Use it, to pleasantly stroll through even the most turbulent and taxing of technology tests. It’s called the RIOT WALK. Read on.

R – Recap
    First, just restate the problem back. Use your own wording, not the word-for-word description given. Demonstrate that you understand the problem (Pro tip: if an interviewer has a strong accent, this step is critical). Take the opportunity to ask clarifying questions – your interviewer will nod, contribute details, correct your description or otherwise reveal additional information.

IO – Inputs and Outputs
    State a few inputs with their outputs. “For the IsOdd function, if I pass in 3, I expect true. For 6, I expect false. Am I thinking about that right?” Listen for confirmation, then move on.

T – Test Cases
    Now you can channel your inner ETG[1]: in the whiteboard corner, list all the off-the-wall input parameters you can think of: negatives, non-integers, empty arrays, strings instead of arrays, really huge inputs, miraculously unlikely inputs, inputs that break the rules, missing parameters! For each of these, note the expected output (ask for clarification, if in doubt). The space between RIOT and WALK is when you actually write the code. Yep, you still need to do this!

WALK – Walkthrough
    Finally, walk line-by-line through the code you just wrote, using your Test Cases from above. Make sure that all test cases return the required outputs before you say you are done.

With RIOT WALK you articulate problems and solutions clearly, identify ambiguity, dig for clarity, create tricky test cases and methodically walk through your code. Interviewers will be impressed! 

[1] Evil Test Genius – the teammate that always knows how to break your code. Good software teams have at least one! You alternately fear, hate and admire this person, but always be glad s/he’s on your team! When you manage a software team someday, find your ETG and keep him/her happy!

