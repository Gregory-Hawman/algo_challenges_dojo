Chapter 13 – Sets and
Priority Queues
Sets and Multisets
Whether working with a deck of cards or results from a database
query, we constantly work with sets – a mathematical term for
collections of values that we group together. Just as there are many
reasons to group values together, likewise there are different types
of sets, each useful in certain situations. Specifically, you might care
how a set handles duplicates, and whether it keeps values ordered.
By default, sets do not contain duplicate values; adding value 42 to
the set (“Zork”, “grue”, 42), you still have (“Zork”, “grue”, 42). Ex.:
when gathering nominations for Best Restaurant in Town, the
nominee list is a set. There can also exist sets that contain duplicate
values; these are multisets. In collections of this type, duplicate
values matter: multiset (1, 1, 1, 3) and multiset (1, 1, 3, 3) are not
equivalent. Example: after a public vote for favorite restaurant,
during the vote-counting process we could use a multiset, such as
(Joe’s, Joe’s, Mel’s, Joe’s, Joe’s...).
For some sets, the order matters (such as words in a dictionary).
This type is called an ordered set. For others (e.g.: members of a
club), it doesn’t: these are unordered sets. More on these
tomorrow!
What can we do with these different flavors of set? You might add an
element, remove one, or check whether the set contains a certain
element, and if so how many. With ordered sets, we can also
retrieve first or last element, and from any element get next or
previous. These are standard operations for any data structure that
we use to collect values, such as an array or a singly linked list.
Throughout the chapter, remember these set types:
SetMultisetOrderedUnordered
􀀀 Interleave Arrays
Given two unsorted arrays, create a new array containing the
elements of both, resulting in an unsorted merge of all values. When
populating the new array alternate (interleave) values between the
two arrays until one is exhausted, then include all of the other.
Example: given [77,22,11,22] and [2,6,7,2,6,2], return
[77,2,22,6,11,7,22,2,6,2].
􀀀 Merge Sorted Arrays
Efficiently merge two already-sorted arrays into a new sorted array
containing the multiset of all values. Example: given [1,2,2,2,7] and
[2,2,6,6,7], return new array [1,2,2,2,2,2,6,6,7,7].
􀀀 Minimal Three-Array Range
Given three separately-sorted arrays, determine the value from each
array that creates the smallest range, and return the min and max of
that range. All three of the arrays must have a value within the
range. Example: given ([1,2,4,15],[3,10,12],[5,10,13,17,23]), return
{min:3,max:5}.
Chapter 13 – Sets and Priority Queues
Set Operations
Yesterday we discussed different characteristics of a set. By default,
sets contain no duplicates, but a type that can is called a multiset. A
normal set does not track the counts of values, but a multiset does.
Sets that keep elements in strict order are ordered sets (or ordered
multisets!). Those that don’t are unordered sets/multisets. There are
costs associated with removing duplicates or maintaining a set’s
order, so if we add values without sorting or removing duplicates, we
have an unordered multiset.
When working with more than one set, we can combine them in
various ways. We can simply merge two sets, resulting in a multiset
that includes all values from both sides. Merging always results in a
multiset, because every duplicate is kept. A second option is to get
the union of sets A and B, which would include all values from one
set, plus anything from the other set that we haven’t already
included. Conceptually, this equates to a logical OR: to be included
in this union, an element must be found in one set or the other (or
both). A third type of set combination is an intersection,
conceptually similar to a logical AND. To be included in an
intersection, an element must be found in one set and the other.
A merge is simply the sets, together.
A union contains values in
either set: [1,3,1,2,6]
An intersection contains only
values in both sets: [1]
Shown above, for multisets
these operations affect value
counts accordingly. For multisets containing the same value (‘1’
above), union retains the higher count (3 ‘1’s are retained);
intersection retains the lower count (2 ‘1’s are retained). Given
ordered multisets [1,1,1,3] and [1,1,2,6]: the merger is [1,1,1,1,1,2,3,6];
the union is [1,1,1,2,3,6]; the
intersection is [1,1]. Lastly: if a set
contains all the values of another
set, like [1,2,2,3] and [2,3], the
second is a subset of the first.
􀀀 Intersect Sorted Arrays
Efficiently combine two sorted arrays into an array containing the
sorted multiset intersection of the two. Example: given [1,2,2,2,7] and
[2,2,6,6,7], return [2,2,7].
􀀀 Intersect Sorted Arrays (dedupe)
Efficiently combine two sorted multiset arrays into an array
containing the sorted set intersection of the two. Example: given
[1,2,2,2,7] and [2,2,6,6,7], return [2,7].
Chapter 13 – Sets and Priority Queues
As you proceed through this chapter, put yourself in a technical
interview mindset with these concepts:
Don’t panicThink out loud Clarifying questionsError and corner
casesExample inputs
DiagramsAdmit when its suboptimal (but keep going)“What are
we optimizing for?”
Throughout these challenges, remember the basic set operations
and characteristics:
MergerUnionIntersectionSet / MultisetOrdered /
UnorderedSubset
􀀀 Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array
containing the multiset union. Example: given [1,2,2,2,7] and
[2,2,6,6,7], return [1,2,2,2,6,6,7].
􀀀 Intersection Unsorted Arrays (in-place)
Intersect two unsorted arrays, putting the unsorted multiset result ‘inplace’
into the first. Running ‘in-place’ also means you cannot create
any data structure to hold values, such as an associative array.
Given [2,7,2,1,2] and [6,7,2,7,6,2], you could change the first to [7,2,2]
in any order.
􀀀 Union Sorted Arrays (dedupe)
Combine two sorted arrays into a new sorted array containing the
union set (i.e. remove duplicates). Example: given [1,2,2,2,7] and
[2,6,6,7], return [1,2,6,7].
􀀀 Intersection Unsorted Arrays
Intersect two arrays to create an unsorted multiset. You can use an
additional data structure type if it is helpful. However, don’t alter the
arrays; return a new one. Given the arrays [6,7,2,7,6,2] and
[2,7,2,1,2], return a new array containing [7,2,2] in any order. Is ‘nonin-
place’ easier? Faster?
􀀀 Union Unsorted Arrays
Return a new unsorted union multiset of two arrays; do not alter the
originals. For [2,7,2,1,2] and [6,7,2,7,6,2], you could return
[7,2,7,2,2,1,6,6]. How efficient can you be, for long arrays?
Chapter 13 – Sets and Priority Queues
This chapter we dive further into Set Theory. Put yourself into the
mindset of a technical interview during this chapter’s algorithm
challenges, using the following concepts:
mergerunionintersectionset / multiset
ordered / unordered in-placestablesubset
If needed, refer to previous “Union Unsorted Arrays” solution for
starting points to these challenges:
􀀀 Union Unsorted Arrays (in-place)
Put union multiset of two unsorted arrays into the first. Given
([2,7,2,1],[6,7,2,6]), change the first to include (in any order) the
elements [2,7,2,1,6,6].
􀀀 Subset Sorted Arrays
Given two sorted arrays, return a boolean whether the second is a
subset of the first. Can you use their sorted nature to your
advantage?
􀀀 Union Unsorted Arrays (no duplicates)
Return the union set (remove any duplicates) of two unsorted arrays.
Given ([2,7,2,1], [6,7,2,6]), return (in any order) [2,7,1,6].
􀀀 Subset Unsorted Arrays
Given two unsorted arrays, return whether second is subset of first.
Solve in O(N) runtime.
Second: can you solve this in-place? How does this affect your
runtime performance?
Set Theory Recap
We explored Set Theory, including Sets vs. Multisets, Ordered vs.
Unordered, and set operations such as Merge, Union, Intersection
and Subset. Along the way we discovered universal principles, such
as:
Ordered sets should be managed by iterating them
concurrently, matching up values.
Unordered sets can be managed with associative arrays,
where set members become keys, and values are booleans
(for an Unordered Set) or counts (for an Unordered Multiset).
Looking for a break from Unions and intersections? Here’s
something completely different.
􀀀 My Very Own Square Root
Write your own square root function. You may not use math functions
or operators except for *, the built-in multiplier. Given an integer, you
should return an integer.
Second: accept and return floating-point numbers, accurate to two
decimal places.
Next, we will revisit our old friend the queue, but with a wonderful
twist!
Chapter 13 – Sets and Priority Queues
Queues and Stacks are easy to construct, and values can be quickly
added and removed. They are optimized for quick addition – and
quick removal as well, if you want values in order they were added
(or reverse for Stacks). They are not optimized for search: elements
are stored linearly, per insertion time, without regard for values
themselves. We might (for example) iterate all values to find the
lowest.
Priority Queues
What if, instead, we created a data structure that acted like a Queue,
but did care about values instead of insertion time. This data
structure would maintain its elements in value order, regardless of
the order in which they were added. We could extract (pop,
dequeue) an element at a time, and always get the lowest value.
This is valuable as (for example) a way to prioritize a list of to-do
items so that when we take an item from the Queue, it is always the
most important one. In fact, OS subsystems such as networking and
storage work in this way: diverse I/O requests are continually added
to a prioritized queue, and the system extracts (and satisfies) them in
priority order. Let us build this Priority Queue.
􀀀 SList: Priority Queue
We want to create a Queue data structure that keeps its elements in
sorted order, so that when we call pop(), we get the first element in
sorted order (rather than sequential order, like a regular FIFO
queue).
Create a PriQueue data structure by making changes to SLQueue
and SLNode:
A PriQNode class should be identical to SLNode, plus .pri, which is
set by an additional argument passed to the constructor. The
PriQueue push() method should accept both value and priority, and
priority should be used to add the node at the right spot (instead of at
queue’s end).
􀀀 Sequencer
Using a singly linked list priority queue object, build a system that
orders and “plays” messages uses the system timestamp (get this by
calling Date.now()). Create two functions that are used as follows:
sequenceMessage([2000000000000, "Msg 4"]);
sequenceMessage([1453506544890, "Msg 2"]);
sequenceMessage([1453506544900, "Msg 3"]);
sequenceMessage([1000000000000, "Msg 1"]);
// assume current time is now 1453506544898
playMessages(); // "Msg 1", then "Msg 2" are logged to
console
// ...assume time passes, and now current time is now
1453506544915
playMessages(); // "Msg 3" is logged to console
Your sequenceMessage(arr) will be sent a two-element array,
containing a timestamp and a string. The timestamp is in
milliseconds, and corresponds to values obtained by Date.now().
Sort messages by ascending timestamp. When playMessages() is
called, console.log (in order) the strings of messages with timestamps
in the past, and remove them from your list.
Chapter 13 – Sets and Priority Queues
Heap Data Structure
The mythical manticore had lion’s body, human head, and scorpion
tail. Priority queues are commonly constructed with minheaps, with
similarly unusual characteristics (not heap where memory allocations
occur, although regrettably the same word). Not to be outdone by
manticores, heaps act like queues, manage data like trees, and are
stored in arrays. Rather than extraordinary speed in a few aspects,
heaps strike a balance: great insertion, good deletion, and great
extraction (in monotonic priority order).
How does this creature do it? A heap isn’t fully sorted. It knows the
lowest value, and can quickly rearrange to stay “sorted just enough”
for the next ask. Insertion similarly does just enough to stay
“somewhat sorted” without extra work. These “lazy” heaps work this
way: first, data are arranged in binary nodes. Second, minheap node
must have a value less / equal to its children’s. Third, minheaps are
complete trees: all nodes have two children except at deepest level,
where nodes populate from leftmost extending right. That’s it! Here
we assume a minheap, although we easily invert rules for maxheap.
The only behavior difference: maxheaps extract values largest to
smallest, not lowest-first.
Here’s the next interesting detail: instead of using actual binary tree
nodes, a minheap puts values into an array, using array indices to
track parent-child relationships between values. Specifically, value at
index N has children at indices 2N and 2N+1, and its parent can
always be found at N/2. The root of the heap is located at index 1
(index 0 usually holds some other value). Thus, tree traversal from
arbitrary nodes is quick. With this in mind, four of the basic data
structure methods (size(), isEmpty(), top(), contains(val)) are trivial.
The performance of contains(val) is horrid (effectively, it must search
the entire underlying array). The insert() and extract() methods are
more interesting.
For insert(val), we know that our tree’s size will grow by one.
Because our tree is complete, we know where this new node will be
added (our Array.length will grow by one). Although that likely isn’t
where it belongs, we put the new value there to start. We then
undergo a “promote” process for node, comparing it to parent. If
value is less than parent’s, we swap them and try to promote it again
(comparing to its new post-swap parent). Once it can no longer be
promoted, insertion is complete.
Build the following methods on a new class called a MinHeap:
􀀀 Heap: Constructor
Create a MinHeap constructor function.
􀀀 Heap: Size
Return the number of values in the MinHeap.
􀀀 Heap: Contains
Return whether a given val is within the heap.
􀀀 Heap: Is Empty
Return whether the heap is empty.
􀀀 Heap: Top
Return (not remove) the heap’s minimum value.
􀀀 Heap: Insert
Add the given value to our heap.
Chapter 13 – Sets and Priority Queues
Let us continue our development of the MinHeap data structure.
Previously, we developed the ability to add elements. Now we will
build a method to remove the top element – we’ll call it extract().
For this discussion, keep in mind that although we are storing the
element values in an array, we are still thinking about the collection
of values as a binary tree. With this in mind, below I refer to values
and nodes. By nodes, I just mean the array index where the value is
found.
For extract(), we know that our tree size will shrink by one node.
Because it is always a complete tree, we know that the node to be
removed is the last node. In other words, our array will become
shorter, by one. We also know which value needs to be removed
from our array, and it is the first value, not the last value. To use a
metaphor, we remove the first person, and the last chair. So, our
challenge, when we extract a value from our heap, is how to
minimally rearrange values in the tree so that all the remaining
nodes are occupied by the remaining values, in a way that satisfies
all the heap rules. Doing this in a minimal way is the hallmark of a
heap.
We start by considering the last value in the heap – the one sitting in
the array index we want to remove. We give that value an unusual
opportunity: we move it to the root for a short time. From there, we
will put the value through a “demote” process to shift it downward in
the tree to a more suitable spot. What does this “demote” process
entail? After swapping the value into the root spot, we first compare
it to its two new children. If either of them has a lower value than it
does, we swap it with the lower one, then repeat this “demote”
process with that same value in its new spot, until it has no children
with lower values (this might not happen until it has no children at
all!). Once it can no longer be demoted, the extraction process is
complete.
With extract(), our basic data structure implementation is complete.
Additionally, we would like the ability to pass in an array and have
the Heap adopt that array as its own, quickly repairing it to a state of
compliance with the Heap rules. First, change the Heap constructor
to optionally accept an array. Also create the heapify method that
accepts and repairs this array after the Heap has been created.
􀀀 Heap: Extract
Create a MinHeap method that removes the heap’s minimum value
and returns it.
􀀀 Heap: Heapify Array
Create a heap method that accepts an array as its own, and turns it
into a rule-abiding MinHeap.
􀀀 Heap Sort
Lance discovers with glee that if one heapifies an unsorted array,
then extracts values, the array is sorted in O(NlogN) time – as fast as
quick sort or merge sort, the usual winners in generalized sorting! He
views this as solid proof that the Heap truly is “the crown prince of
data structures.” Write a standalone function heapSort(arr) that
accepts an unsorted array and uses a heap to sort it.
Second: do this in-place without creating a second array.
Chapter 13 – Sets and Priority Queues
􀀀 Median of Data Stream
With a separate function addValue(val), you will be given a
continuous stream of data, one value at a time. At any moment, with
reasonable performance you need to be able to return the median
value. (What is reasonable performance?) Recall that the median of
an even number of elements is the average of the two middle values.
Before next chapter, here are a few other Queue/Stack problems to
keep you thinking. Have fun!
􀀀 Queue from Two Stacks
Using only Stack objects (not other data structures such as linked
lists or arrays), implement a Queue.
􀀀 Priority Queue from Two Stacks
Using only Stack objects (not other data structures such as lists or
arrays), implement a Priority Queue.
􀀀 Comparing Stacks/Queues to Other Data Structures
By now we have studied a few different data structures: array, SList,
DList, BST, SLQueue, CirQueue, ArrStack, Deque, PriQueue. Each
of these could be built as a set instead of a multiset (rejecting
duplicate values instead of accepting them). We will not require you
to build all the possible variants, but below we list them for
completeness. Those that are bolded are ones you’ve already built
previously; those underlined are highly recommended. In most
cases, creating these will require only small adjustments to code
you’ve already written.
Array (random-access multiset)
Array without duplicates (random-access set)
SList (forward-iterated insertable multiset)
SList without duplicates (forward-iterated insertable set)
DList (double-iterated insertable multiset)
DList without duplicates (double-iterated insertable set)
Binary Search Tree (ordered multiset)
Binary Search Tree without duplicates (ordered set)
SLQueue (sequential multiset)
SLQueue without duplicates (sequential set)
CirQueue (sequential multiset)
CirQueue without duplicates (sequential set)
SLStack (sequential multiset)
SLStack without duplicates (sequential set)
ArrStack (sequential multiset)
ArrStack without duplicates (sequential set)
Deque (double-sequential multiset)
Deque without duplicates (double-sequential set)
PriQueue (forward-ordered multiset)
PriQueue without duplicates (forward-ordered set)
Next chapter we’ll build these:
Associative Array (unordered multiset)
Associative Array without duplicates (unordered set)
Chapter 13 – Sets and Priority Queues
With short answer questions, you can demonstrate technical depth
as well as clarity of communication.
How would you answer the following, if asked in an interview?
􀀀 Short Answer Questions: Sets and Priority Queues
What is a Set data structure? What is an example of this, in the
natural world?
By default, is a set Ordered or Unordered?
What is a Map data structure? What is an example of this, in the
natural world?
Generally, how do sets and maps differ?
By default, do maps allow multiple keys with the same value?
Generally, how are sets and multisets different?
What is one good way to implement an unordered map?
What is one good way to implement an ordered multimap?
What is one good way to implement an ordered set?
What is one good way to implement an unordered multiset?
What is a Heap? How do they work generally?
What are the advantages of using a Heap? What are the
disadvantages?
What happens ‘under the hood’ when a value is added to a
Heap?
Likewise, what’s the sequence of events when removing a Heap
value?
How can I check whether a Heap is valid?
What is the difference between a MinHeap and a MaxHeap?
For a MinHeap data structure that has the following methods –
push, pop, min, max, removeMin, removeMax, contains,
prevVal, nextVal, size – which of these are relatively fast? How
fast?
Conversely, which of these methods would be considered
relatively slow? How slow?
When would a heap be considered ‘full’?
What is a Priority Queue, and is it at all different than a Heap?
How?
When would you use a BST instead of a Priority Queue?
When would you use a ‘regular’ Queue instead of a Priority
Queue?
What is HeapSort, and how does it work?
What are the Big-O requirements (run-time and space) for
HeapSort?