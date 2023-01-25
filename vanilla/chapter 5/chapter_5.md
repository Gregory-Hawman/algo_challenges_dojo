Chapter 5 – Linked Lists
This chapter explores linked lists, a data structure used widely in backends, frameworks, runtimes and operating systems. You will become familiar with concepts such as the reference: not a local copy of a value, but a pointer to the value in shared memory.

How does your operating system keeps track of the files in a directory? Modern systems do not do this with an array. They use a data structure called a linked list. Linked lists are easily reordered and well-suited for large data collections because (unlike arrays) they store data in small pieces of memory that “fit in the holes” between variables, rather than requiring a large chunk of contiguous memory. Linked lists are the first data structure we discuss as an object; they use references.

Objects and Classes
A class definition is like a blueprint of a complex machine, from which many copies can be made. Actually, constructing a machine is a separate step. Likewise, declaring a class merely informs us of that blueprint; actual objects must be individually constructed. In JavaScript, class declarations take the form of functions called object constructors – when called, they create an object for the caller. An object is an instance of the class, brought to life, just like a physical copy of the ideas in the blueprint.

Not all machines are complex; not all objects complicated. However, code can add or remove attributes of objects on the fly, so this makes them different than a boolean or number which always occupies the same amount of memory space. Why does this matter? If you have debugged JavaScript code in the browser, you may understand the call stack idea. This series of function calls led the computer to where it is right now. Whenever the currently running function returns, the JavaScript runtime looks to the call stack to help it “remember” which function it came from, as well as the state of all local variables when it called into another function. The runtime stores variables in the stack while changing execution to another function. Setting aside call stack space for booleans and numbers is easy – regardless of value, numbers occupy a 64-bit memory chunk. However, objects are tricky: JavaScript cannot determine a priori how much space to set aside for objects. How can it quickly construct a call stack?

The answer is that objects are created using a common chunk of memory set aside for variable-sized allocations. This memory is called the heap, and it is used for any unpredictable memory needs. When the system looks at your ‘blueprint’ and constructs a ‘machine’ corresponding to those plans, it goes to the heap and sets aside space for all that object’s attributes and functions. If the object needs more space, it expands into adjacent heap memory. During normal operation, the heap is wide-open for large and small allocations. The call stack is apartment space in a high-rise tower; the heap is Montana.

When you create an object and store it in a local var, the system doesn’t put the object in that memory slot the way it does for a number or a boolean. It puts a reference to that heap location into your local var. References (called pointers) are fixed-size, so this enables the runtime do its stack magic. A pointer represents an object’s location in memory, but you can think of it as an object’s contact info: its email address. True to its name, a pointer points to where the object is found. If you have information to retrieve from (or store to) an object, you “go there” by dereferencing that pointer, followed by the attribute you want within the object. This could look like myProject.name or myQuizzes[3] or even getAverage(myArr). Yes, arrays, strings and even functions are objects – dereferenced by . or [ or ( .


Linked Lists
Consider a row of gymnasts, all facing left so that all they can see is the gymnast immediately ahead in line. Now imagine that each of the gymnasts raises a right arm to put a right hand on the shoulder of the next gymnast in line. This mental picture is akin to a linked list. Many languages and systems use linked lists heavily, and they are frequently used in interview questions. Why are they so popular?

Linked lists provide a way to store a large amount of information without (as arrays do) forcing the runtime to find a large contiguous chunk of memory (as arrays do). Indeed, a linked list of 1000 pieces of information could use 1000 small spaces in memory. Like an array, they keep information in a certain order. However, unlike arrays, you need not relocate everything in order to add a value to the middle! Linked lists introduce the reference concept – essentially, storing the location of the variable, instead of its value. This reference is ‘just another’ attribute in the node object that can be compared, set, etc.

Over the chapter’s course, we’ll coalesce a considerable collection of concepts to contemplate. Some or all of these will be used in this chapter’s challenges.

classes and objectsobject constructorslocal vars vs. heap
allocationspointers
    reference vs. valueprivate vs. public === vs. == push( ) & pop( )

Here is a definition of a node object. A node simply holds a value and a pointer linking it to the next node in sequence, if there is one. A sequence of node objects is called a linked list.

function ListNode(value)
    {
        this.val = value;
        this.next = null;
    }

1. [] List: Add Front
2. [] List: Contains
3. [] List: Remove Front
4. [] List: Front

This chapter we will familiarize ourselves with basic manipulation of the singly linked list data structure. Why is it referred to as a singly linked list? Well, there are other ways to arrange node objects; some feature more than one linkage between nodes. For example, doubly linked list nodes each connect to two others: the next as and previous. Singly linked list nodes contain only a next pointer. The list above is comprised of four nodes. Each node (object) has two properties: .val, and .next. The .val property stores anything the user chooses to put there. The .next property has one job: ‘point’ to the next node in the list (not unlike the gymnast’s right hand on the shoulder of the next gymnast). The subsequent node does not know who is pointing to it; all it knows about is its own .next pointer. That might be pointing to yet another node, or might be null if that node is the last in the line.

So how do we work with linked lists? A common pattern is to declare a local variable called runner, set it to reference the first node, use it to access that node, then update it to point to the second node, use it to access that node, and so on until runner reaches the end of the list. To update runner to point to the next node, we would execute runner=runner.next;. This sets runner to be equal to the node’s .next attribute. Setting a variable to a pointer makes it point to what the other points to. Example: per drawing above, firstNode points to the first node. We could change the '101' value to '100' with the code firstNode.next.next.val=100;. To have firstNode point instead to the subsequent node (the one with 86), we would simply execute firstNode = firstNode.next;. This sets the firstNode variable to be equal to the node’s .next pointer. In other words, firstNode will point to what that node’s .next points to, which is the subsequent node. For these challenges, use this ListNode definition as a starting point. Note: some refer to singly linked lists as SLists (not SLLists).

    function ListNode(value) {
        this.val = value;
        this.next = null;
    }

5. [] SList: Length
6. [] SList: Display
7. [] SList: Max
8. [] SList: Min
9. [] SList: Average

Over the chapter’s course, we coalesce a considerable collection of concepts to contemplate. Some or all of these will be used in this chapter’s challenges.
classes and objectsobject constructorslocal vars vs. heap
allocationspointers

    reference vs. valueprivate vs. public === vs. == push( ) & pop( )
    As always, here’s our node object:

    function ListNode(value) {
        this.val = value;
        this.next = null;
    }

10. [] SList: Back
11. [] SList: Remove Back
12. [] SList: Add Back
13. [] SList: Move Min to Front
14. [] SList: Move Max to Back

Prompts
For fifty pages now, you have used console.log every time you needed to display something. By now you know (more than) your fair share of HTML, so why do we continue to insist that you do this? Because in algorithm challenges, we want you focused on core algorithmic ideas, not presentation. 

Having said that, you may sometimes want to request text from the user (when testing your code, for example). In these times, the prompt() function is what you need. Prompt accepts a string and raises an input dialog. The dialog displays your string and accepts an input from the user. An optional second parameter is set as the default value of the input field (IE and Edge require this parameter). If the user clicks [OK], the input field’s contents are returned. If the user clicks the [Cancel] button, prompt() returns null (exception: Safari returns ""). Although not the most professional way to interact with your user, prompt() is sometimes appropriate, such as getting a quick value for a new ListNode. 

Here is the humble-but-mighty ListNode class:

    function ListNode(value) {
        this.val = value;
        this.next = null;
    }

15. [] SList: Prepend Val
16. [] SList: Append Val
17. [] Create SList (prompt)
18. [] SList: Remove Val

Alerts
If you know about prompt(),you should also know about alert(). Neither are appropriate choices when writing professional web applications, but they may occasionally be useful in our algorithmic challenge context, such as when surfacing a particularly unusual error.

Put simply, alert() accepts a string and raises a dialog displaying that string. The user must click [OK] for the dialog box to be dismissed. The alert() function has no return value. Here’s our ListNode class:

    function ListNode(value) {
        this.val = value;
        this.next = null;
        this.front = function() { ... }
        // more functions here
    }

19. [] SList: Split on Value
20. [] SList: Remove Negatives
21. [] SList: Concat
22. [] SList: Partition

This chapter you familiarized yourself with basic manipulation of the singly linked list data structure. Here are concepts used in this chapter’s challenges. classes and objectsobject constructorslocal variables vs. heap allocations push() and pop()pointersprivate vs. public === vs. == reference vs. valuetime vs. space tradeoff Here is what we have so far for ListNode: 

    function ListNode(value) {
        this.val = value;
        this.next = null;
        this.front = function() { ... }
        // more functions here
    }

23. [] SList: Second to Last Value
24. [] SList: Delete Given Node
25. [] SList: Copy
26. [] SList: Filter

This chapter you familiarized yourself with basic manipulation of the singly linked list data structure. Here are concepts used in this chapter’s challenges.

classes and objectsobject constructorslocal variables vs. heap allocations push() and pop()pointersprivate vs. public
=== vs. == reference vs. valuetime vs. space tradeoff

Here, as usual, is the definition of our node class. Note that going forward we will refer to this as SLNode instead of ListNode, to avoid ambiguity about what kind of list will contain this node.

    function SLNode(value) {
        this.val = value;
        this.next = null;
        this.front = function() { ... }
        // more functions here
    }

27. [] SList: Second Largest Value
28. [] Zip SLists
29. [] Dedupe SList
30. [] Dedupe SList Without Buffer

Write Understandable Code!
What is a software engineer paid to deliver? Generally, they are paid to solve a business problem, specifically through software that they write. How do we know if it’s good software? This is an excellent question, and one we will explore more fully, later. Generally, software is good if it solves the business problem inexpensively. We’re talking at a very high level, so let’s continue drilling in on this.

What does inexpensive mean, when applied to software? It could mean the literal cost, such as the expenses to purchase developer tools or servers. An expense that is just as important though, is the time required to write it. The costs associated with time include salary expense, as well as the cost of lost opportunities if a problem is not solved soon enough. As the saying goes: time is money.

We constantly face a tradeoff between cost now versus cost later. Taking a shortcut right now might seem smart, but sometimes it is not. Writing software as rapidly as possible might seem like the lowest-cost approach, but this is not always true. I think we can agree that if, in order to make a small change to a project, you had to completely rewrite it from the ground up, this Situation A is more expensive than a different Situation B in which you keep most of the previous work when a small change is needed. Unfortunately, shortcuts taken by the original engineer might lead to the Situation A we described.

Great software engineers can write source code that is easily understood, and for this reason their work is more useful in the future. It is inexpensive to make changes to code that is easy to understand – you spend less time trying to figure out what it does, and you can be targeted (spend less time) in verifying that your change didn’t break something else.

What are things you can do to make your code more understandable? Organize your code into related sections. Name functions and variables clearly. If you label a function func4(), you require the reader (which might be you, in the future) to read the entire function in order to understand what it does and how it fits with everything else. Something like findTreeSize() is much clearer. Don’t use single-letter variable names; there is no real speed difference gained by using ‘i’ instead of ‘index’ or ‘idx’. In brief, code that is selfdescribing is more valuable because it is less expensive to maintain. You should also add useful (not obvious) comments to your code, particularly block comments at the beginnings of source files and functions. That said, self-describing code will require fewer comments, because the names of functions and variables convey your basic intentions.

Remember: friends don’t let friends use one-letter variable names!

31. [] Short Answer Questions: Objects, Classes and Linked
Lists
32. [] Weekend Challenge: Linked Lists

Linked Lists Review
Objects are a collection of attributes and functions. Because they are variable in size, they are allocated in the memory heap. Object constructors return pointers, which are fixed in size and hence can be held in local variables. Conceptually, a pointer is just some particular memory location (not unlike “P.O. Box 5588”), referring to a location in the heap where some object has been allocated. Although calling console.log() on some variable containing a pointer will display the contents of the allocated object, this is only because the browser is trying to be helpful – the actual contents of that variable (the pointer itself) is merely a number representing some memory location (not what is stored at that location). Dereferencing a pointer means traveling across it, to the attributes and functions within the object on the other side. To dereference an object pointer, append .
plus an attribute name.

A linked list is a sequence of connected node objects. Nodes contain .next pointers, plus other attributes as needed. In our examples, node objects often contain only .val and .next, but in realworld scenarios you find much larger objects with dozens of attributes, including a .next so that these object records can be sequenced, grouped and sorted. 

Linked lists are preferable to arrays if frequently adding/removing values mid-sequence. Unlike arrays, singly linked lists directly access only the first node – to reach later ones, we traverse from one node to the next one by following the sequence of .next pointers. Singly linked lists have the ability to traverse only forward through the list, because they contain only a single link between nodes. A doubly linked list is comprised of nodes containing both .next and .prev pointers, and for this reason they are useful when we need to traverse back and forth in our sequence; that said, doubly linked lists are slightly more complicated to build and maintain (as we will see in a future chapter).

alert() and prompt() are useful in debugging and quick prototypes, but not customer-facing views.

Creating clear, understandable code is well worth the effort needed, because this code is more easily and quickly understood, and can be extended with more confidence. Taking the time to do this is the professional way to approach any code, and it is doing any future engineer in your code a favor. Do it!

33. [] The "Buggy 13"