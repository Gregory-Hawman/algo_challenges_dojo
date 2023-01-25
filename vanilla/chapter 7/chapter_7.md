Chapter 7 – Arrays, Part II

Working with arrays grows our dexterity with foundation concepts such as loops and conditionals. Now we can use newer concepts such as recursion. Knowing how to test your code is another critical skill.

Test-Driven Development
Stated simply, test-driven development (TDD) is a technique where you first build a test that fails before creating any new code. Your sole objective is then to write “just enough” clean code to pass this test. If any test (including a preexisting one) is failing, consider your status red; your only goal is to get green again. With TDD, software development becomes: create a new test, write code to get green, refactor as necessary, repeat. This practice is very common in industry, particularly when the cost of a bug is unusually high, or when code is long-lived or likely to become complicated. Conversely, when writing quick prototypes that are very likely to be rewritten (or even in a final product, if the costs of defects are manageably low), a significant investment in TDD may be unwarranted.

Even in that situation, though, you should constantly think about different inputs that might break your code. For every challenge, think about (and ideally write down or state aloud) the pertinent test cases. Over time you will know the common “corner cases” to include (empty array, extremely long list, etc). Listing these on the whiteboard before coding is something that interviewers will appreciate. Once your code is done, then revisit your tests by hand or with test code. Always ask yourself “where’s the bug?”

1. [] Array: Average (Warmup)
2. [] Balance Point
3. [] Balance Index
4. [] Taco Truck

Divide and Conquer
If you looked for a word (“stentorian”, for example) in an actual book dictionary, would you turn to the first page, then the second page, then the third, examining all pages until you found the word? Of course not! You’d open to the center, finding the word “lightweight”. Undaunted by such name-calling, and based on your alphabetical prowess, you’d look halfway further towards book’s end, where you might find “ridicule”. Again, you would throw off this insult, looking even further toward the end of the book. The word you’d find might be “terrible”, but like all Dojo students you wouldn’t give up. Eventually you would find your word “stentorian”, nestled amidst stenographers and stepbrothers.

This is an example of a technique known as “divide and conquer”. When you haven’t yet opened the dictionary, you don’t know much about which of the 3350 pages contains your word. After looking at page 1, all you really know is that the word is somewhere in the 2- 3350 range – you haven’t narrowed it down much! If, instead of reading the first page, you glanced at a page in the middle (p.1675, let’s say), then with a single look you have cut the problem space in half. With a second glance at page 2513, you narrowed it even further and by looking at page 2900, you narrow the possibilities from 3350 pages down to “only” 400 pages: an 8x drop by checking only 3 pages. You can “divide and conquer” the problem space in this way, because words are listed in-order.

5. [] Array: Binary Search
6. [] Min of Sorted-Rotated
7. [] String: Binary Search

Don’t panic, Think out loud, Ask clarifying questions, Draw diagrams Error and corner cases, List example inputs and what they should return, Admit when it is suboptimal (but keep going), Ask “what are we optimizing for?”

8. [] Array: Flatten
9. [] Array: Remove Duplicates
10. [] Array: Mode
11. [] Array: Buffer Copy

Time-Space Tradeoff
Good engineering is all about tradeoffs: knowing what tradeoffs are available, and knowing when to use them. In software engineering, one important tradeoff is time vs. space. If you know you will be asked to solve a certain formula repeatedly, you can keep track your previous answer and simply provide that answer rather than recomputing it. For certain problems, whether in algorithms class or in the workplace, caching (saving) the results will not make the function any faster when it is first called, but it can make subsequent calls much faster. Use this concept in today’s algorithm challenges!

12. [] Smarter Sum
13. [] Faster Factorial
14. [] Fancy Fibonacci
15. [] Tricky Tribonacci

This chapter we dive deeply into arrays. Put yourself into the mindset of a technical interview during this chapter’s algorithm challenges, using the following concepts: 

Don’t panic, Think out loud, Clarifying questions, Error and corner cases, Example inputs Diagrams, Admit when it is suboptimal (but keep going), “What are we optimizing for?”

16. [] Median of Sorted Arrays
17. [] Time to English
18. [] Missing Value
19. [] Rain Terraces

Data Sufficiency
One important problem solving concept is the idea of data sufficiency. In algorithm challenges and real-world problems, having a piece of data doesn’t necessarily make it important. Often code will run faster if we discard unneeded data. In fact, sometimes your code cannot run until you let go of it!

20. [] Last Digit of A to the B
21. [] Matrix Search
22. [] Max of Subarray Sums
23. [] The Bugful 13