Chapter 15 – Trees, Part II
Returning to the important Binary Search
Tree data structure, we now build on top of our previous work, with
second-level topics such as completeness, traversal, repair, partition,
and balance.
Full Trees and Complete Trees
We have previously discussed whether a BST is balanced. A BST
that is roughly balanced retains its excellent performance, whereas if
it grows unbalanced, its performance can rapidly deteriorate. Two
types of trees that take this to the extreme are Complete and Full
trees.
Full trees are perfectly balanced. If each step further away from the
root node is represented by a layer of nodes at that level, then every
layer that exists in the BST is entirely filled with nodes. In other
words, each leaf node’s path to the root has the same length. As a
side effect, every full BST contains a number of nodes that is one
less than an integer power of two (i.e. 1, 3, 7, 15, 31, 63, etc). A full
tree is the strictest type of balanced tree possible!
Complete trees are just like full trees, with one possible exception. In
a complete tree, it is acceptable for the bottom layer to be less than
entirely filled, so long as all nodes in that layer are as leftmost as
possible. Completeness is a superset of fullness; that is, all full trees
are also considered complete. A complete Binary Tree is as
balanced as a tree with that number of nodes can be. Completeness
is also very expensive to maintain, and for this reason complete
BSTs are rarely used in production, since the costs of keeping a BST
truly complete are much higher than the costs of adjusting it only
when it becomes significantly unbalanced. In practice, complete
binary trees are normally only seen in non-BST situations, such as
the ‘Binary Tree projection’ we see in the Heap data structure, where
we interpret the underlying array index positions as BTNodes in a
hypothetical binary tree.
􀀀 BST: Is Full
Chekov keeps his data perfectly clean. I mean, per-fect-ly clean. He
doesn’t just keep them balanced. He keeps a full BST at all times.
Given a pointer to a BST object, return whether the BST is a full tree.
􀀀 BST: Is Complete
His cousin Pikov is a bit less neurotic. He does still keep everything
highly balanced. He keeps his BSTs complete at all times. Given a
BST object, return whether that BST is complete.
􀀀 BST Discussion
What is the advantage of Chekov’s approach? What is the
advantage of Pikov’s approach? What about their crazy uncle
Dropov, who never balances his BSTs at all – is he being negligent?
Maybe there isn’t a single ‘right’ answer. So how do we know what
approach is best for the situation at hand?
Chapter 15 – Trees, Part II
Repairing a Binary Search Tree
If it is possible with isValid() to detect whether a BTNode is in an
incorrect location, then it should also be possible to repair an invalid
BST. Unfortunately, once we find an invalid node, we have no
guarantee about the nodes below it – so our only recourse is to
reinsert all of the subtree nodes (not just the one node we found to
be invalid).
􀀀 BST: Repair
Sometimes it is hard to find good help. Oscar is working with a thirdparty
library that receives data from outside sources and sorts it into
a binary search tree. Oscar is positive the library has bugs, because
sometimes the BSTs it produces don’t meet the requirements of a
BST. Given a potentially invalid BST object, create a standalone
function bstRepair(BST) that rearranges nodes as needed to make it
valid. Return true if you repaired the BST, or false if this was not
needed.
􀀀 BST: Smallest Difference
Given a valid BST, return the smallest difference between any two
values in the tree. What are the run-time and space complexities of
your solution? Would it be less efficient if BST was very unbalanced?
􀀀 SList: Smallest Difference
Given sorted singly linked list, return the smallest difference between
values. What are the run-time and space complexities of your
solution?
􀀀 BST: Closest Value (again)
Given valid BST and number, return the tree value closest to that
number. What are the run-time and space complexities of your
solution?
􀀀 SList: Closest Value
Given sorted SList and number, return the list value closest to that
number. What are the run-time and space complexities of your
solution?
􀀀 Array: Closest Value
Given sorted array and number, return the array value closest to that
number. What are the run-time and space complexities of your
solution?
􀀀 DList: Closest Value
Given sorted DList and number, return the list value closest to that
number. What are the run-time and space complexities of your
solution?
For this particular problem, which of the data structures mentioned
above will most likely lead to optimal performance in finding the
closest value, across a diverse data set? How would you preprocess
the values – potentially storing them in a different data
structure – if optimal run-time performance was your primary goal,
and you were willing to consume significant amounts of memory in
order to achieve it?
Chapter 15 – Trees, Part II
BST Partitioning
Sometimes it is necessary to divide a BST into two. To accomplish
this, we might want to split the BST around a specific value, or we
might simply approximate a value that would put around half the
values on one side and around half on the other. Similar to how we
might divide, or partition, a linked list into two separate linked lists,
likewise when we partition a BST we want the result to be two
different non-overlapping BSTs, where every node in the previous
BST is contained in one of the resultant BSTs.
􀀀 BST: Partition Around Value
Create a method BST.partition(value) where a BST object partitions
itself around the given value (whether or not that value is found in
the tree). The BST should change itself appropriately, as well as
return a new tree object containing all other nodes. Remember, the
ranges of the two BST objects should not overlap (the max() of one
should be less than the min() of the other).
􀀀 BST: Partition Evenly
Create a standalone function that, given a valid BST, partitions the
tree evenly into two distinct BSTs. As in the previous challenge,
change the given BST to become one of the resultant BSTs, and
return the other. The two resultant trees should be valid and nonoverlapping.
Second: if we don’t pay attention to balance, the two resultant BSTs
might be tall and thin. To improve performance, make both subtrees
a bit more balanced before returning them.
􀀀 BST: Reverse
Create a standalone function that accepts a BST object and reverses
it. A reversed BST has its highest values in leftmost children, and its
lowest values in rightmost children (root would be unchanged).
Chapter 15 – Trees, Part II
Repairing a More Complex Binary Search Tree
Refer to the BST2 and BTNode2 data structures, from our earlier
BST chapter. We based BTNode2 on BTNode, simply adding a
.parent pointer; a BST2 is merely a BST, plus necessary code to use
and maintain .parent in the BTNode2 objects it contains. As a result,
invalid BST2s include not only those with incorrectly located nodes,
but also those with defective pointer values (e.g.: a child’s .parent
doesn’t point back, or node pointers create a loop!).
􀀀 BST: Kth-Biggest
Given a valid Binary Search Tree, find the Kth-largest element
contained in that tree.
Second: if above you took advantage of the .size() method, write a
version without it. If you did not use .size() originally, write a version
that does.
􀀀 Test Cases for BST2 Repair
In the challenge following this one, we will write code to detect and
repair a potentially invalid BST2. Before you start that, here is a
related challenge: what test cases would you create to ensure that
your solution detects and correctly fixes the possible error cases?
For this challenge, a test case is a BST that you send to
bst2Repair(BST2).
􀀀 BST2: Repair
Given a potentially invalid BST2, create standalone function
bst2Repair(BST2) to detect whether it is invalid. If so, fix it and return
true (if not, return false). Potential problems include incorrectly
placed nodes, as well as incorrect pointers (.parent, .left, .right) that
create loops, etc.
Chapter 15 – Trees, Part II
Breadth-First Search
Previously we have talked about traversing a binary search tree.
Whether we used pre-order, in-order, or post-order, we traversed
from the root of the tree all the way to a leaf node, before
backtracing. This is an example of depth-first-search (DFS), in
which we (starting at the root) explore as far as possible along each
branch before exploring adjacent paths.
Can you think of a scenario in which DFS is not the best way to
traverse a binary tree? Let’s say we have a generic binary tree (not a
BST) with 300 nodes, and each node contains a single upper-case
letter. How would we find the ‘P’ that was closest to the root node?
To solve this problem, Depth-First Search would not be a great
choice. What if we wanted to find all the instances of the letter ‘P’? In
that case, we need to visit every node anyway, so DFS is a
reasonable choice.
To find the closest ‘P’, a better strategy would be, as sage Jerry
Seinfeld advised, “go for the miracle parking spot, then concentric
circles.” With breadth-first search (BFS), we would first start
looking at the root node itself, then proceed to every possible node
that is only one step further away, then advance to every node that is
one step further, etc. (like concentric circles, but in a tree).
Breadth-first, used in conjunction with a Queue data structure, is a
good way to advance search evenly away from the starting point.
Remember, once we examine a given node, we must then check all
other nodes of similar distance from the origin, before we check that
given node’s children. The Queue can help us remember a node,
from the moment we examine its parent until the time we check it.
We will encounter BFS later with graphs; for now breadth-first is an
important new way to iterate trees.
􀀀 BST: Values for Layer
Jeff has divided his workgroup into a perfectly balanced hierarchy, to
the extent that his organizational chart looks just like a binary tree!
To learn how things are going “in the trenches”, he wants to have a
meeting with all the line managers, but not include their bosses.
Given a BST and a layer number (starting at zero for the root), return
an array containing all the values at that layer in the BST. If a BST is
a full tree, what percentage of nodes are leaves? What percentage
are ‘first-level managers’?
􀀀 BST: Layer Arrays
Given a BST, return a two-dimensional array containing all values in
the BST. The outer array represents each layer (starting at zero for
the root), and the inner array for each layer represents the values at
that layer in the BST.