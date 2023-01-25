Chapter 9 – Recursion

This chapter covers recursion and dynamic programming. Recursion occurs when a function calls itself. Dynamic programming is more general: breaking large problems into smaller, more solvable ones.

Let’s consider an example: “I’m thinking of an integer between 1 and 120. Guess it.” If you were to guess ‘61’, and I said “nope, that’s too high,” then how would you respond? You would treat this exactly as if we had just started and I had said “I’m thinking of an integer between 1 and 60.” In doing this, you reframed the problem as a less complex one, a technique called dynamic programming.

Let us continue: if next you guessed ‘30’, and I said “nope, too low,” then you could again reframe the problem as “I’m thinking of a number from 31 to 60.” Let’s say you then guessed ‘42’, to which I said “Yes, you guessed it! How did you know that was the answer?!” With this ‘divide- and-conquer’ approach, you could guess the correct number in a 1-120 range, in just 6 guesses on average.

Why is dynamic programming useful? This is used when a function can make progress toward solving a problem, but is not able to solve the entire problem immediately. In these cases, if we always make at least a little forward progress, continually revisiting the problem to try again, then ultimately we will complete the task (this is a great metaphor for the power of focus and persistence in daily life as well!). Dynamic programming is an effective way to decompose a problem so that it takes advantage of multiple machines. For our purposes, however, we will use it to better understand recursion.

Three requirements for effective recursion
    a) Base cases:
        When a function can determine (and return) an answer immediately, this is a ‘base case’. If you successfully guess my number, I know right away that the game is over. Conversely, if you search for ‘spizzwink’ in an alphabetized word list and find nothing between ‘spitz’ and ‘splash’, you need not continue: ‘spizzwink’ was not found. There are positive and negative base cases.

    b) Forward progress:
        When a function cannot solve a problem but can narrow the range of possibilities, this is ‘forward progress’. Learning that ‘61’ is too high, you have made forward progress because you now know the solution is outside the ‘61-120’ range. For recursion to be effective, you must make at least a little forward progress in every possible case. If there is a case in which you can neither solve the problem nor break it down further, then your solution is not complete.

    c) Calling back into itself as if it were the original problem:
        If my initial challenge were “I’m thinking of an integer between 1 and 60”, you would proceed just as you did in originally after your first guess. If “taking a guess” is a function call, this function wouldn’t know the difference between initial and subsequent calls. A recursive function calls itself to narrow things down, but like most functions it generally does not need to know anything about its caller – the fact that the caller might be itself is not an important distinction.

When creating (and debugging) recursive code, remember: each function call creates a new stack frame (essentially, a new T-diagram). Call stack space is limited, so recurse with care.

Writing great code to solve a well-understood problem is only part of a software engineer’s job. You should also consider how your code responds when given unexpected inputs. Thinking of possible “corner cases” ahead of time allows you to create much more resilient code that stands the test of time.

This chapter you will familiarize yourself with recursion. Some or all of the following important concepts will be used in this chapter’s challenges.

    Base casesForward ProgressCall StackDynamic Programming

1. [] Recursive Sigma
2. [] Recursive Factorial
3. [] Flood Fill

T-Diagrams and Recursion
Recursion is a powerful technique but may be difficult to understand initially. Tracing recursive functions can be confusing unless we remember that each successive recursive call is a different context, with a completely new T-Diagram. 

Let’s trace rSigma() when given 2.718:

    function rSigma(num) {
        var returnVal = 0;
        if (num >= 1) {
            var intNum = Math.trunc(num);
            var prevVal = rSigma(intNum–1);
            returnVal = prevVal + intNum;
        }
        return returnVal;
    }

Upon entering, we set returnVal, enter an IF, set intNum and call rSigma. At this point, the eventual value of prevVal is unknown. All we know is that it will be set to the return value from rSigma(1), which has not yet returned. Once it does, we can continue onward in this diagram. Let’s now work through rSigma(1). This new function call will have a new T-diagram. As above, upon entering rSigma(1) we set returnVal, test num, enter IF, set intNum and call rSigma(0). Note the T-diagrams: We are now two levels deep into rSigma, but this should not cause concern. The only effect those calls have on our new rSigma call is the input: 0. Unlike previous calls, this one (as num is 0) does not enter the IF; instead returning 0, here: On exiting rSigma(0), that T-diagram is destroyed; we return to previous rSigma(1) context. We update prevVal to 0 (return value from rSigma(0)) and continue immediately after the previous recursive call, setting returnVal to prevVal+intNum, which in our diagram is 0+1. Immediately before we return from rSigma(1), here are our diagrams: Back at last in our original context, we now know the value of prevVal: 1. Substituting this into our diagram and continuing from immediately after the recursive call, we set returnVal to 1+2, and return final value 3, shown here: Hopefully this sheds some light on how recursive code works!

4. [] Recursive Fibonacci
5. [] Recursive "Tribonacci"
6. [] Paging Dr. Ackermann
7. [] Zibonacci

Dynamic Programming and Memoization
(No, it’s not a typo – it really is ‘memoization’, not ‘memorization’.)
Recursion is a powerful technique that allows us to explore multiple
pathways. In general, we break a problem into smaller problems;
often we simply feed those smaller problems in to the same function
to eventually get a solution. Sometimes, it isn’t that clean –
sometimes we need to save some partial progress to build upon in
subsequent recursive calls. This is when a ‘memo’ is valuable.
A memo is any of ‘note to self’ that you send along with a recursive
call, so that it can take advantage of previous progress you have
made. You might be able to incorporate this into a single-function
recursive solution, by adding an additional parameter that is
undefined when your function is called externally. In subsequent
recursive calls you make to yourself, you could include a memo here
that might be a fragment of a solution that you are trying to complete,
or an array to which you are pushing all possible solutions – or
perhaps both, using two parameters that are not in the original
function call. Other times, your original function is an entry point,
calling a recursive function using additional parameters, like this:
///// Simple function to kick off the recursive version, with default
// values for the number of opens pending (0), the substring fragment
// we've built so far (""), and the array of complete solutions ([]).
function allValidNParens(numParens) {
var solutions = [];
rValidNParens(numParens, 0, "", solutions);
return solutions;
}
///// Recursive All-Valid-Combinations-Of-N-Pairs-Parentheses func.
// Parameters: number of parens remaining, number of opens pending,
// unfinished substring fragment we're building, array of solutions
function rValidNParens(parens, opens, subStr, solutions) {
// If no parens/opens remain, this fragment is a valid solution.
if (!parens && !opens) {
solutions.push(subStr);
}
// If opens remain, one option is to close one.
if (opens) {
rValidNParens(parens, opens-1, subStr + ")", solutions);
}
// If unused parens remain, one option is to open a new one.
if (parens) {
rValidNParens(parens-1, opens+1, subStr + "(", solutions);
}
// solutions array is a 'live' obj; we don't need to return it.
}

This chapter you will familiarize yourself with recursion. Some or all
of the following important concepts will be used in this chapter’s
challenges.
Base CasesForward ProgressCall StackMemoizationDynamic
Programming