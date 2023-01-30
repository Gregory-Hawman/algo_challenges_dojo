Chapter 12 – Sorts
Why do we study the specific topic of
sorting? Because sorting is an area where algorithm choices have
significant and obvious ramifications for how well that code performs.
Learning about sorting algorithms will equip you with techniques that
you can use to analyze any set of code.
How do we judge code quality? There are many ways one might
assess software. For most, a first thought is simply: in good
software, the features work. That’s reasonable, of course, but many
aspects go into whether something works as expected. In addition to
basic functionality, here are a few others. Is it resilient to unexpected
inputs or malicious intent? Does it run in diverse environments, such
as device form factors and/or different browsers? Is it trustworthy
with users’ confidential data? Are string messages handled
appropriately so that the code can easily be localized into worldwide
languages? Can it be easily configured and serviced by those
maintaining and updating it post-release? Is it accessible for
customers with visual/auditory disabilities? Is the source code
understandable (not just by one, but also broadly across the team)?
How well documented is the source (or the overall product)? How
rapidly/easily can it be extended for new features? Product
excellence has many dimensions.
In many situations, what trumps most of these factors is software
performance. This can also mean many things, but primary
measures of software performance are run time and resource
consumption (time and space, if you will). Everyone that works with
software has experienced software that is frustratingly slow. Even
small time optimizations can make a product feel more snappy and
responsive. Regarding resource consumption, this can be
permanent storage (storage, database), memory (heap, call stack),
network bandwidth, or even power – after all, no one likes an app
that drains their battery. Depending on product requirements, any or
all of these may be important. That said, classic software analysis
focuses on 1) run time and 2) memory consumption, when it comes
to evaluating algorithms.
Certain algorithm texts refer to “asymptotic behavior” of an algorithm.
This simply means the behavior of an algorithm as the (input) data
set gets extremely very large. Almost any sorting algorithm will
suffice if we are sorting only ten elements, but if we must sort 4
billion numbers, then algorithm choice matters. Later this chapter,
you will learn more about how we measure algorithms and what
leads to high-performance. Sorting algorithms are not the only
software whose performance should be analyzed, nor generally the
most important. However, studying them is an excellent proxy for
other software elsewhere. Have fun this chapter!
Chapter 12 – Sorts
When comparing run times and memory consumptions of two piece
of software, we must be careful. What if one is in PHP, and the other
is in C or even machine assembly language? What if we run one on
an Apple Watch, and the other on a massive IBM 64-processor
server with 512 GB of RAM? (To bend the “apples and oranges”
metaphor, this would literally be comparing Apples and [Big] Blues.)
To factor out these differences and focus only on the algorithm,
performance analysis is always relative, not absolute. That is to say,
we should compare the algorithm, in that language within that
environment, only to itself, when given different types and sizes of
inputs. Specifically, by what percentage does run-time change when
we double the input size? By what factor does memory consumption
grow, if we make our input ten times bigger? As input sizes get
larger, extraneous factors melt away, leaving only critical ones that
ultimately constrain whether our software can handle 100
simultaneous users, or 1,000, or even 100,000.
We start with the first sorting algorithms programming students learn
– Bubble and Selection.
􀀀 Array: Bubble Sort
For review, create a function that uses BubbleSort to sort an
unsorted array in-place.
􀀀 SList: Bubble Sort
Create a function that uses BubbleSort to sort a linked list. The list
nodes contain .val, .next and other attributes you should not
reference.
􀀀 Array: Selection Sort
For review, create a function that uses SelectionSort to sort an
unsorted array in-place.
􀀀 SList: Selection Sort
Create a function that sorts a singly linked list using selection sort.
Nodes contain .val, .next and other attributes you should not
reference.
􀀀 Multikey Sort
For this challenge, you will sort an array, however the items in the
array are not simple numbers. Given an array of objects, where each
object contains a .firstName and a .lastName, sort the array by both
last name (primary) and first name (secondary). Lee Abbey should
be sorted before Aaron Carnevale, and Aaron Carnevale should be
sorted before his brother Giorgio Carnevale.
Chapter 12 – Sorts
Big-O Notation
Previously we mentioned that when analyzing algorithms,
comparisons must be relative, when given different inputs.
Specifically, as we increase the input size by 10, how does the time
needed to run the algorithm change? How does memory
consumption change? Generally, there are only a few growth rate
types. The mathematical convention that represents these growth
factors is called Big-O notation.
Side note: really hard-core algorithm analysis experts talk not only
about Big-O but also Big-Omega and Big-Theta. In brief, Big-O
describes worse-case performance (“performance will never be any
worse than …”); Big-Omega best-case (“in the ideal situation,
performance might be as good as …”); Big-Theta average case (“on
average across a broad range of inputs, performance will be …”).
Their values can differ, but for many analyses you can think of them
as the same. Further, when best-case and worst-case differ, most
people talk mostly about Big-O and secondarily mention “best-case”.
What does Big-O notation indicate? It conveys how an algorithm will
perform, as input sizes grow large. As we multiply our input by factor
N, how do our run time and memory consumption change? In
practice, we would first measure the time and memory consumed
when running with an input of specific size; then measure the same
when given an input of “size x N” – this ratio, in terms of N, is our
Big-O.
Consider FindMax() that returns an array’s lowest value. If we
double array length, we expect FindMax to run twice as long. If we
multiply array length by N, run time should multiply by exactly N as
well. Hence we say the time complexity of this algorithm is O(N), or
verbally “for run-time, it has a Big-O of N.” Looking at memory
consumption, the only memory needed is local storage of a FOR
loop index, and a local variable to track the min value. This is the
case regardless of the array’s length, so as we multiply array length
by N, our additional memory requirements are constant (i.e.,
multiplied by 1). Hence the algorithm’s memory complexity is O(1), or
verbally “for memory, Big-O is 1.” If our algorithm needed to make a
copy of the array, then the Big-O for memory would be O(N). One
last thing: with recursion, we also factor in the additional stack space
as we recurse. We’ll briefly touch on that later.
􀀀 Array: Insertion Sort
Create a function that InsertionSort to sort an unsorted array inplace.
What is the run-time complexity? What is the space
complexity?
􀀀 Array: Combine
Create function combineArrs(arr1,arr2) that sorts two already
separately sorted arrays, placing the result back into the first
provided array. Can you work completely in-place?
􀀀 SList: Insertion Sort
Use InsertionSort to sort singly linked lists. Only reference ListNode
attributes .val and .next. What are the run-time and space
complexities?
􀀀 SList: Combine
Create a function that combines two already-sorted linked lists,
returning a sorted list with both inputs. List nodes contain .val, .next
and other attributes that you should not reference.
Chapter 12 – Sorts
When discussing sorting algorithms, we talk mostly about run-time
performance – how does Time Needed change, as input size grows?
But Big-O can also refer to resource consumption: memory, storage
or network bandwidth – most commonly, RAM. The memory
consumed by an algorithm is either heap or call stack or both. These
correspond to 1) copying an input or 2) making recursive calls.
Clearly, all things equal, an algorithm shouldn’t make a copy of the
input. After all, we might receive an array containing 4 billion values!
Also, call-stacks are not unlimited; it doesn’t take much to “blow our
stack”. Everything solved with recursion is solvable without. More on
O(space) later.
So, which sorting algorithm is truly best? Again, the only correct
answer is “depends on situation.” However, there are numerous
characteristics that describe sorting algorithms, and we will discuss
one each day through the rest of the chapter. Today we discuss what
makes an algorithm Adaptive.
Adaptivity
For many algorithms, the input data’s configuration (e.g. randomized,
mostly sorted, reversed) makes a big difference in performance.
Even when handed already-perfectly-sorted data, SelectionSort
makes the same number of comparisons as if values were in random
order. There is almost zero difference between its best-case
performance and worst-case performance. (Good news: predictable!
Bad news: O(N2)!) So, SelectionSort does not adapt to data that is
already partially or fully sorted.
On the other hand, InsertionSort and BubbleSort show huge
differences between best-case and worst-case run time. You can
even see this in the code, whenever we have a “fast finish” check
that breaks out early if we make a complete pass without needing
any swaps. We call these algorithms Adaptive.
When is this important? Consider a huge quantity of existing,
already-sorted data, where you must add a small number of new,
unsorted values. With InsertionSort, we can quickly sort these new
values into place with little penalty from the magnitude of existing
data. Big win!
􀀀 SList: Merge Sort
Use combineLists(list1,list2) to build the mergeSortList(list) algorithm
for an unsorted singly linked list. What are run-time and space
complexities of your solution?
􀀀 Array: Partition
Partition unsorted array in-place. Use arr[0] as pivot val; return idx of
pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.
Second: for pivot, use median of first, last, mid.
Third: partition a subset, given start and end. Exclude end; default
values are 0 and arr.length.
􀀀 SList: Partition
Partition a singly linked list. Use first element as pivot; return the new
list. List nodes contain .val and .next; do not reference other
attributes. For example, if you are given the following linked list: {
5=>1=>8=>4=>9=>2=>5=>3 }, you should return: {
1=>4=>2=>3=>5=>8=>9=>5 }.
Chapter 12 – Sorts
We’ve discussed what it means when an algorithm adapts: can it
take advantage of partially-sorted inputs to run faster? Today we
discuss stability. What is it, and why does it matter?
Stability
In most of our sorting work so far, we have dealt with simple
collections of single values, such as an array of 15 numbers. In real
life, however, data is rarely that minimal, and never that simple.
Much more likely would be a linked list or array containing many
thousand records, and each record contains 5-10 different fields. To
sort these records, we may need to reference multiple fields (for
example: sorting customer events by last name, then first name,
then event date). One strategy, when sorting by multiple fields, is to
sort first by the least important factor (date), then by more important
factors (first name), ending with the most important (last name).
However, this multi-pass strategy only works if our sorting algorithm
is able to retain the existing order, when finding duplicate values
during subsequent passes. Some algorithms, such as selection sort
and quick sort, swap elements across significant parts of the input
array, and hence do not guarantee to keep duplicate values in their
original sequence; they destabilize any preexisting ordering. If we
have already sorted “Buster Jones” ahead of “David Jones” based
on first name, we don’t later want to carelessly put David Jones
ahead of Buster Jones just because their last names are identical.
With selection and quick sorts, this unfortunately might happen!
On the other hand, insertion sort and bubble sort only swap adjacent
elements, so existing sequence is preserved when they encounter
duplicate values. Insertion sort and bubble sort are Stable sorting
algorithms; they hold any previous order stable when doing their
work. Again, this becomes a factor mainly when doing successive
sorting passes, such as sorting by multiple fields (e.g. userID, date).
However, stability doesn’t mean looking at additional fields to break
ties; it means that in case of a tie, the value that was previously first,
stays first.
􀀀 Array: Quick Sort
Create a function that uses yesterday’s partitionArray() to sort an
array in-place. With yesterday’s code plus a very few new lines, you
will implement QuickSort! What are the run-time and space
complexities of your quickSortArr implementation?
􀀀 Array: Merge Sort
Use the combineArrs() function above to construct mergeSortArr()
for an unsorted array. What are the run-time and space complexities
of your mergeSortArr solution?
􀀀 Array: Partition3
Previous partition() implementations do not group duplicates of the
pivot together. Create partition3() to keep pivot elements together;
return an array containing indices for first pivot and first greater.
Change [5,1,8,4,9,2,5,3] to [1,4,2,3,5,5,8,9] and return [4,6]. Note:
other 5 moved next to pivot.
Second: pick a more optimal pivot.
Third: partition only a portion, with start and end.
Chapter 12 – Sorts
As mentioned before, when analyzing software performance, we
look at runtime performance (duration to run to completion), but also
its consumption of other resources. Will it require a huge amount of
disk storage? Is it excessively chatty on our network? Does it
mercilessly drain our battery in mere minutes? An important factor,
and sometimes easiest to quantify, is extra memory (in addition to
input) it requires. RAM consumption could be heap (e.g. allocate
space to copy our array!), or call stack (recursively call ourselves,
once for every node!). Either way we might run out of memory, at
which point depending on where our code runs, it will slow to a crawl
(best-case) or crash (worst-case, common).
Memory Analysis
From a call stack perspective, we simply cannot use recursion
unless we limit the depth of any single chain of recursion. For
example, if we have a BST with 1,000,000 elements, nonetheless
the tree (on average) will only be 20-25 elements deep, so
recursively traversing a BST consumes a tolerable amount of stack
space. Specifically, we would say that it requires O(logN) stack
space. (Why? Think of log as the inverse of exponents. Each time
our tree goes one level deeper, it doubles in size. How many levels
do we need to handle one million? Well, 2 raised to the 20 power is ~
1 million. In other words, the log2 of 1 million is 20, so on average a
BST of size N would be logN nodes deep.)
What about heap space, then? What if we don’t make a copy of the
data, but we do maintain a bunch of local variables, maybe a dozen?
Not a problem! In the big picture, don’t worry much about local
variables – their 100 puny bytes are insignificant compared to the
power of the force the magnitude of copying even just half of the
potentially-huge input data we are sent. An ideal algorithm, then, is
one that requires no additional copy of the input data at all. If an
algorithm can operate successfully with no additional heap
requirements, but only the space of the input data it is handed, then
we call that algorithm in-place. Running in-place does not mean that
the algorithm is automatically O(1) for memory, because if it is
recursive it will still consume stack space. However, running in-place
is a huge win in many scenarios, particularly on mobile devices with
limited memory.
􀀀 Smarter Sorting
For Yi’s data science dissertation, she needs a distribution graph
containing billions of data points. Amazingly, she found an array
containing IQs for every person on earth, and now you must sort it.
All values are between 0 and 220, and the array is 7 Billion elements
long. What are your run-time and space complexities?
􀀀 Quick Sort 3
Create a QuickSort3 function that uses Partition3 to sort an array inplace.
Can you devise specific arrays that are sorted much faster
with QuickSort3 than with QuickSort?
􀀀 Master Invoice List
Tran’s House of Trains™ is a booming online hobby store. Each
department head already has a list of invoices for that group, sorted
by timestamp that day. They need to put these lists together for their
chief executive, Chris. What do you recommend, and what is the
performance of this solution? Write a function that will do the work
needed.
Chapter 12 – Sorts
􀀀 Urban Dictionary Daily Add
On his off days, Kris volunteers at UrbanDictionary.com, because it
makes him feel hip and fresh. Their collection is about 8 million
words, and they receive 2000 new words a day. Because they want
to keep their data hip and fresh, they incorporate any new words
within minutes of submittal, re-sorting their entire collection every five
minutes. Kris notices that only about 7 words are added each time
they sort. He’s thinking selection sort (their current design) might not
be the best choice. What do you think?
􀀀 Pancake Sort
Christopher Burns has successfully defied his last name, cooking a
wonderful breakfast for the entire Dojo without singeing a single
flapjack. Now you have a large stack of pancakes of varying sizes,
ready to serve. You believe you should first sort them from smallest
(on top) to widest (on bottom), as syrup pours best that way – plus, it
reminds you of the Towers of Hanoi (Minh’s favorite recursive
problem).
Your only tool is a spatula that you can insert below any pancake, to
flip it and all pancakes above. Pancake sizes are represented in an
array: for example, 4 pancakes already stacked from smallest to
biggest would be [1,2,3,4]. If you insert the spatula between second
and third pancakes, then flipped, the stack would now be [2,1,3,4].
Given an arbitrarily large stack of N pancakes, how many spatula
flips will it take to sort the pancakes into width-order? Design a highperformance
algorithm, because everyone is getting hungry….
􀀀 Radix Sort
For an array 7 million long with values from 0 to 4 billion, how rapidly
can you radix-sort it in-place? You can create a new array as large
as the original. What are the run-time complexity and the space
complexity of this solution, and does it depend on the values you are
sorting?
􀀀 Wiggle Sort
A sequence of numbers is “wiggle-sorted” if the differences between
each successive value always alternates between positive and
negative. Equal values should not be adjacent. Given an array of
numerical values, wiggle-sort the array. What is the Big-O of your
run-time performance?
􀀀 Belt Sort
Given array of objects representing students, where each student
object has .belt attribute, sort in-place so all students with same belt
are adjacent, in order “none”, “yellow”, “red”, “black”, “double-black”,
“triple-black” and “triple-black plus blue”. Dojo students (or their belt
records) are not just numbers, so naïve sorts might not work….
􀀀 Median of Unsorted Array
Create a function that determines the median of an array of unsorted
values. When Sosho claimed he could ‘name that tune’ in just O(N),
the Dojo was all aflutter. Any solution is fine, but doing this in O(N)
has been agreed-upon across the industry as an ‘interesting
problem’.
Chapter 12 – Sorts
Sorting Review
We discussed numerous aspects that different parties might consider
important in judging a piece of software “good”. These include
correctness, resiliency to bad inputs, security against hackers, being
easy and fun to use, extensibility to accommodate future features,
clarity of being understood by other engineers, whether the software
is easily internationalized to 100+ spoken languages around the
world, how easily it can be deployed or updated, etc. Depending on
your role, “good” software means different things. For most, though,
performance is in your top 3 most important factors.
We focus on performance of sorting algorithms because there are
multiple diverse ways to sort data, and most algorithms have at least
one redeeming factor making it valuable in some situation. We need
to know when to choose that particular algorithm, based on the
problem’s requirements.
For algorithm performance, we factor out hardware specifics and
programming language, only comparing an algorithm to itself, with
some other larger input data. The head start from having a faster
programming language is insignificant compared to the power of a
superior algorithm (if our data set is big enough). As our input data
grow larger by N, by what factor does runtime grow? By what factor
does memory requirement grow? This type of analysis is called Big-
O notation.
We focused primarily on the Big-O of an algorithm’s runtime (how
long it takes to run), but also memory usage. Runtime complexity is
often understood by looking at nesting of loops. O(N2) algorithms
such as bubble sort are considered slow. The basic algorithms used
to teach sorting are all O(N2) because, essentially, they compare
every value to every other value (N x almost-N). However, some
algorithms have optimizations that lead to significant differences
between average run-time and best-case runtime. More
sophisticated algorithms use “divide and conquer” schemes that
quickly cut the problem space so that each value is not compared
against every other. In this way, they roundly defeat O(N2) algorithms
– their average performance is O(NlogN). That said, they might have
weaknesses, such as specific input data that trigger horrible worstcase
performance (quick sort).
We discussed specific characteristics of sorting algorithms, and
when they might be important. These include being adaptive (taking
advantage of partially sorted data), stable (retaining existing
sequence of duplicates), in-place (not using space beyond the input
data). None of the O(NlogN) algorithms are adaptive, and although
merge sort is the only one that is stable, it is also the only one not inplace.
Memory usage might be heap (from copying input data), or
stack (from recursive “divide and conquer” calls). On mobile devices
memory is often scarce; operating in-place is usually critical.
In special situations, you can use unusual sorting algorithms such as
CountingSort or Radix, which miraculously sort simple values in
O(N) but cannot accommodate additional data. Understanding the
various characteristics of these algorithms is what enables you to
choose the right tool for the right job.
The “Bug-Infested 13” (#4)
Some of these “Basic 13” submissions
have bugs; can you find them?
Print1To255()
Print all the integers from 1 to 255.
function print1to255() {
for (var num=1;num <=255;num++) {
console.log(num);
}
PrintIntsAndSum0To255()
Print integers from 0 to 255, and the sum so far.
function printIntsAndSum0to255()
{
var sum = 0;
for (var num=0; num<=255;
sum+=num,num++) {
console.log(num+" - sum:"+sum);
}
}
PrintMaxOfArray(arr)
Print the largest element in a given array.
function printMaxOfArray(arr)
{
if (arr.length == 0) {
console.log("[], no max val.");
}
var max = arr[0];
for (var idx=1; idx < arr.length;
idx++) {
if (arr[idx] > max)
{ max = arr[idx]; }
}
console.log("Max val:", max);
}
PrintOdds1To255()
Print all odd integers from 1 to 255.
function printOdds1to255() {
for(var num = 1;num<= 255;num+=2)
{ print(num); }
}
PrintArrayVals(arr)
Print all values in a given array.
function printArrayVals(arr)
{
for (var idx=0; idx < arr.length;
idx++)
console.log("["+index+"]="+arr);
}
PrintAverageOfArray(arr)
Analyze an array’s values and print the average.
function printAverageOfArray(arr)
{
if (arr.length == 0) {
console.log("Empty, no avg.");
return;
}
var sum = arr[0];
for(var idx=1; idx<arr.length-1;
idx++) {
sum += arr[idx];
}
console.log(sum/arr.length);
}
“Ain’t Too Proud to Bug” (#4) – continued
ReturnOddsArray1To255()
Create & return array with odd integers 1-255.
function returnOddsArray1to255(arr){
var oddArray = [];
for(var num=1; num<=255;num+=2) {
oddArray.push(num);
}
return oddArray;
}
ReturnArrayCountGreaterThanY(arr, y)
Given array, return count greater than Y.
function numGreaterThanY(arr, y) {
var numGtr;
for (var idx=0; idx<arr.length;
idx++) {
if (arr[idx] > y) { numGtr ++;}
}
console.log("%d > %d",numGtr,y);
return numGtr;
}
SquareArrayVals(arr)
Given an array, square each value in the array.
function squareArrVals(arr)
{
for ( var idx = 0;idx<arr.length)
idx++)
{
arr[idx] = arr[idx] * arr[idx];
}
}
ZeroOutArrayNegativeVals(arr)
Given an array, set negative values to zero.
function zeroOutArrNegativeVals(arr)
{
for ( var idx = 0;
idx < arr.length; idx++) {
if (idx < 0)
{ arr[idx] = 0; }
}
}
ShiftArrayValsLeft(arr)
Given array, shift values forward. Drop first value(s) and leave extra
'0' value(s) at end.
function shiftArrValsLeft(arr)
{
for (var idx = 1;
idx < arr.length;idx++) {
arr[idx - 1] = arr[idx];
}
return arr;
}
SwapStringForArrayNegativeVals(arr)
Replace negative array values with 'Dojo'.
function swapStrForArrNegVals(arr) {
for (var idx=0; idx < arr.length;
idx++){
if (arr[idx] < 0) {
arr[idx] = "Dojo";
}
}
return arr;
}
“Bilbo Buggins and the Unexpected Defects”
(#4) – continued
PrintMaxMinAverageArrayVals(arr)
Print max, min and average array values.
function printMaxMinAverage(arr) {
if (!arr.length) {
console.log("[], no workie!");
return;
}
var min, max, sum;
min = max = sum = arr[0];
for(var idx=1; idx<arr.length;
idx++) {
if(arr[idx]<min) {min=arr[idx]}
}
for(var idx=1; idx<arr.length;
idx++) {
if(arr[idx]>max) {max=arr[idx]}
}
for(var idx=1; idx<arr.length;
idx++) { sum+=arr[idx]; }
console.log("Max val:", max);
console.log("Min val:", min);
console.log(sum/arr.length);
function printMaxMinAverage(arr) {
if (arr.length == 0) {
console.log("[]:No MinMaxAvg");
return;
}
var min = arr[0];
var max = arr[0];
var sum = arr[0];
for(var idx=1;idx<=arr.length;
idx++){
if(arr[idx]<min){min=arr[idx];}
if(arr[idx]>max){max=arr[idx];}
sum += arr[idx];
}
console.log("Max value:", max);
console.log("Min value:", min);
}
function printMaxMinAverage(a)
{
if (a.length == 0)
{
console.log("[]:no MinMaxAvg");
return;
}
var min,max,sum;
min = max = sum = a[0];
for(var idx=1;idx<a.length;idx++)
{
if(a[idx]<min) {min=a[idx];}
else
if(a[idx]>max){max=a[idx];}
else {sum+=a[idx]}
}
console.log("Max:", max);
console.log("Min:", min);
console.log("Avg:",sum/a.length);
}
function printMaxMinAverage(arr)
{if(arr.length==0){console.log("Null arr, no min/max/avg");return;}var
min=arr[0];var max=arr[0];var sum=arr[0];for(var
idx=1;idx<arr.length;idx++){if(arr[ idx]<min)
{min=arr[idx];}if(arr[idx]>max){max=arr[idx];}sum+=arr[idx];}
console.log("Max:",max," Min:",min); console.log("Avg
value:",sum/arr.length)