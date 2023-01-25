Chapter 4 – Strings and Associative Arrays

More About Strings
Of our basic JavaScript data types, strings are our third focus (after Number and Boolean).

Strings are arrays of characters (more accurately, you can read individual characters the same way you read specific values in a numerical array, and these individual values are strings of length 1). However, you cannot write individual characters in a string in this same way. Once a string is defined, individual characters can be referenced by [ ] but not changed. Strings are immutable: they can be completely replaced in their entirety, but not changed piecewise. To manipulate string characters, you must split the string into an array, make individual changes within that array, then join the array to reform a string.

Below are examples of declaring strings, referencing individual elements, using String.length, converting string to array with String.split, and converting array back to string with Array.join.

    var funStr = "Emma shreds on her electric cello";
    console.log(typeof funStr); // "string"
    var oneChar = funStr[26]; // "c"
    console.log(typeof oneChar); // "string"

String.length method
    console.log(funStr.length); // 33
    console.log("".length); // 0

String.split (converts string to array, splitting on the provided parameter)
    wordArray = funStr.split(" "); // Note: " " never appears in result:
    // [ "Emma", "shreds", "on", "her",
    // "electric", "cello" ]
    console.log(wordArray [5].split(""); // Split on every letter:
    // [ "c", "e", "l", "l", "o" ]

Array.join (converts array to string, using provided parameter as separator)
    console.log(wordArray.join()); // Note: "," is used by default:
    // "Emma,shreds,on,her,electric,cello"
    console.log(wordArray.join("-")); // Param "-" inserted between
    words:
    // "Emma-shreds-on-her-electric-cello"
    console.log(wordArray.join("")); //
    "Emmashredsonherelectriccello"


Challenge: what is displayed by the following? Why?
    console.log(1 + 2 + "3" + "4" + 5 + 6);

This chapter explores strings – a special case of the basic array – then associative arrays. By now you should be able to easily complete the “Basic 13” algorithm challenges in less than 2 minutes each.

1. [] Remove Blanks
2. [] String: Get Digits
3. [] Acronyms
4. [] Count Non-Spaces
5. [] Remove Shorter Strings

Switch/case statements
Think of SWITCH statements as a series of IF statements, based on a single value (a number or string). From the switch, execution jumps forward to the case that matches (or default if no match is found). Execution continues until it hits a break, exiting the switch statement. If you omit a break, execution continues even into a subsequent case:! Here are examples:

    switch (favoriteLanguageString) {
        case 'JavaScript': console.log("Ah so, we thrive on chaos!"); break;
        case 'Python': console.log("Parenthesis-haters, unite!"); break;
        case 'PL/I': console.log("Wha? Who let you in here?");
        default: console.log("Why don't you choose a different one.");
    }

Note that if favoriteLanguageString is equal to 'PL/I', we log two messages. After the "Wha?" console.log, we continue onward to the next console.log at the end of the SWITCH, since we hit no break. Switch statements are not always the right choice, but may prove valuable below.

6. [] String: Reverse
7. [] Remove Even-Length Strings
8. [] Integer to Roman Numerals
9. [] Roman Numerals to Integer
10. [] Parens Valid
11. [] Braces Valid
12. [] String: Is Palindrome
13. [] Longest Palindrome

Fast-Finish / Fast-Fail
The idea of quickly exiting a function if a special case is detected likely does not seem all that revolutionary. However, this not only simplifies the code, but make its average running time faster as well. Whether to apply them to failure (fast-fail) or success cases will depend on the specifics of the challenge, but in any case they can quickly narrow a problem to the mainline case that remains. 

This chapter’s challenges focused on strings, then maps / hashes. These concepts might be useful:

.length.split.join.concatfor...in loopsswitch/case

14. [] Is Word Alphabetical
15. [] D Gets Jiggy
16. [] Common Suffix
17. [] Book Index
18. [] Drop the Mike

Before we dive into a new area, let’s remind ourselves of some of the best practices mentioned previously. Make sure to understand the problem thoroughly – ask clarifying questions before rushing to write code. Challenge yourself to think of any special cases your solution might need to handle: can you trust the input data you are given? Note any interesting “corner cases” for later, when you test your code. Restate the problem back to the interviewer, and (again, before you start coding) note a few important test cases along with what output they should produce. Then start coding. Once you finish, verify your code using the test cases you identified earlier, perhaps using T-diagrams. OK, onward.

Associative Arrays (Objects)
“Regular” (numerically indexed) arrays are handy. They can contain many values, any of which can be instantly accessed simply by providing the index. Arrays have order – indices are numerically arranged. However, sometimes we want more than just a number to describe what is stored in an array cell. If we held ["John", "Watson", "221B Baker Street"], we might remember that [0] meant first name, [2] stored the address, etc., but numerical indices are often not descriptive enough.

What if, for each specific cell in our array, instead of associating it with an index number, we associated it with a string – any string we wanted? This is essentially the associative array. Just as we place a numerical index within square brackets to reference a cell in a numerical array, similarly with an associative array we place a string (whether literal or in a variable) within the same square brackets. As a structure that organizes and stores data, most programming languages have this concept, referring to it as an associative array, a dictionary, a map, a hashtable, or (in JavaScript) simply an object.

This data structure consists of key-value pairs: keys (strings) that are associated with values (the contents of the array cell). Just as (regular) arrays are initialized by [], JavaScript objects are initialized by {}. The syntax for assigning values to keys during object initialization is this:

    var myAssocArr = { fName: "Kaitemma", "lName": "Claiben"};
    // notice that keys can be strings (quoted) or symbols (without
    quotes)

Once created, we access an object’s keys as array indices (with []) or object properties:

    myAssocArr["fun"] = "shreds on electric cello";
    console.log(myAssocArr); // { fName: "Kaitlemma", lName:
    "Claiben",
    // fun: "shreds on her electric cello" }
    myAssocArr.IQ = 144;
    console.log(myAssoc["IQ"]; // 144
    console.log(myAssoc.fun); // "shreds on her electric cello"

19. [] Coin Change with Object
20. [] Max/Min/Average with Object

FOR … IN Loops
When working with arrays (whether they are associative or
numerical), one of the most common tasks is to iterate through all keys or values in the array. With this type of array, the keys are not numerical: there isn’t a predictable first index, like [0]. Furthermore, there is no obvious last index such as [arr.length-1]. Without something new that we have not yet learned, we don’t know how many keys an object contains.

Fortunately for insiders like us, we needn’t import anything foreign from outside JavaScript: it has just what we need: the FOR...IN loop. Objects do not have a .length property, but with FOR...IN we can still iterate through each of the object’s keys. There is no real guarantee on the order in which we will be handed these keys, but we will be handed each key exactly once. Many students, when encountering FOR...IN or FOREACH for the first time, are confused about whether the loop iterator represents a key or a value. For the JavaScript FOR...IN, always think of it as FOR (key IN obj). The loop iterator represents keys, not values. If you need to iterate values within an object, then within a FOR (key IN obj) loop, reference
obj[key].

Using your new knowledge and skills with JavaScript objects (the equivalent in other programming languages to an associative array, dictionary or hashtable), try your hand at the following challenges:

21. [] Zip Arrays into Map
22. [] Invert Hash
23. [] Associative Array: Number of Values (without .length)

Why Don’t We Allow Built-In Functions?
Knowing available services for a language or framework is essential for unlocking its value. That said, there is power in knowing how to recreate those services – if they don’t work as expected, or when you must extend them for new scenarios. Furthermore, having a sense for how services work ‘under the hood’ deepens your understanding about how/when to use them. Knowing for example that push() and pop() are significantly faster than splice() might make a difference in which you choose.

For extra algorithm practice, recreate these built-in functions from JavaScript’s string library.

24. [] String.concat
25. [] String.slice
26. [] String.trim
27. [] String.split
28. [] String.search
29. [] Short Answer Questions: Strings and Associative Arrays
30. [] Weekend Challenge: Strings and Associative Arrays

Strings and Associative Arrays Review
In this chapter, we learned about the string data type: how to access specific characters, determine the length, and use built-in string functions. We learned about the switch statement, as well as the concepts of fast-finish and fast-fail. We introduced the concept of associative arrays (and objects, which are the closest concept in JavaScript to an associative array). We also discovered the FOR..IN loop and used it to iterate through the keys (not values) of an object.


Debugging Your JavaScript Code
There are various ways to test and debug JavaScript code using artificial environments such as JSBin or plugins for your code editor. However, we prefer the real-world JS environment that truly matters: browsers . This way you test your code in a way that doesn’t emulate the real-world: it is the real-world environment. Here are steps for one workflow that uses both editor and browser when creating/testing:

    1. Go to Sublime/Atom, create a new file with the HTML file extension, and save it.

    2. Within that file, type html and hit [tab]. Sublime will create the basic html tags for you.

    3. Within the <head> section, type script and again hit [tab], to create <script> tags. You can delete the other attributes inside the <script> tag, as well as the <style> and even <body> tags; you don’t need those if all you are doing is writing/testing JavaScript.

    4. As the very first line after the <script> tag, always include "use strict"; .

    5. Now write JS code as you wish. Remember to save as you go, of course.

    6. When you are ready to test your code (which should be early and often), right-click on the Sublime file and select “Open in Browser”.

    7. Your default browser will open a window. We prefer Chrome for testing JS, but any browser is fine. Within that window, open the Developer Console (the MacOS key sequence is cmd-opt-J).

    8. Type JS into the console such as returnGreaterThanSecond([1,3,5,7,9,11,15]) or var arr=[];returnGreaterThanSecond(arr) or printOdds() to exercise your code.

    9. To change or add to your code, cmd-tab back to Sublime/Atom, make your change, then Save.

    10. Switch back to browser and Refresh, returning to step 8. You will soon memorize the quick-key sequence for saving in Sublime, returning to browser, and refreshing (cmd-s, cmd-tab, cmd-r).

Ultimately, your JavaScript code will run in the browser JS runtime environment, rather than an artificial environment such as JSBin. They produce slightly different results sometimes, so why bother….


