Chapter 19 – Trees, Part III
AVL Trees
Remember that a binary search tree’s performance is linked to how
balanced it is. If a tree is unbalanced and deep, then there is a
chance that the value we seek is down in the depths of the tree, far
beyond the average expected height. But what if our BST could
somehow keep itself balanced? How would it do this, and how
expensive would it be? Soviet mathematicians Georgy Adelson-
Velsky and Evgenii Landis responded to this problem by inventing
the first self-balancing tree: named after their surname initials, we
call it the AVL tree.
The rules of an AVL tree are simple: for every node, the heights of its
two child subtrees must differ by at most one. If an insertion or
removal changes the tree so that this rule is no longer valid (in other
words, an insertion or removal makes the tree unbalanced), the tree
must ‘rotate’ its shape to become balanced again. To optimize the
AVL tree for the fact that it will constantly check its balance at
various locations, each node contains (and maintains) a balance
factor (1 if its left subtree is one node deeper than its right subtree,
-2 if the right subtree is deeper by two, 0 if both sides are even, etc).
For today, let’s just measure and detect these situations; tomorrow
we will address them.
function AVLTree() {
var head = null;
this.add = function(value) {}
this.remove = function(value){}
// Assume these exist and
// correctly update node.balance
this.height = function() {
// ...write this code today
}
this.isBalanced = function(){
// ...write this code today
}
}
function AVLNode(value) {
this.val = value;
this.balance = 0;
this.left = null;
this.right = null;
this.height = function() {
// ...write this code today
}
this.isBalanced = function() {
// ...write this code today
}
}
􀀀 AVL: Height
Create height() methods for both the AVLTree and AVLNode classes.
􀀀 AVL: Is Balanced
Given an AVL tree whose nodes have up-to-date .balance values,
create the isBalanced() methods for both AVLTree & AVLNode.
Chapter 19 – Trees, Part III
AVL trees are a type of self-balancing tree (we touch on other
variants later). The motivation for staying balanced is efficiency:
unbalanced trees do not add/remove/find as quickly. However,
keeping balanced might be expensive; if we aren’t careful, the costs
eclipse the benefits. How can we minimize costs?
1. Minimize the cost of checking a tree’s cost. This implies that
we:
a. Store a value in each node, rather than recomputing
height/balance each time;
b. Store balance, not height, to avoid checking children when
testing for balance;
c. Check the tree’s balance only at appropriate times;
d. Check the tree’s balance only at necessary tree locations.
2. Minimize the cost of maintaining the tree’s balance indices,
implying that we:
a. Only update the balance indices when we add/remove
values (or rebalance);
b. Update balance indices for only nodes affected by the
add/remove, so that we
minimize the number of nodes whose balance need
rechecking (see 1c).
3. Minimize the cost of rebalancing the tree, when this is
needed. This implies that we:
a. Minimize the number of nodes changed during a rebalance,
so that in turn we
b. Need to update balance for only a small number of nodes
(see 2b), in order to
minimize the number of nodes whose balance needs
rechecking (see 1c).
What does 1b mean? AVLNode.isBalanced() is inexpensive if we
maintain .balance – it’s a quick attribute check. If instead we store
.height, isBalanced() requires checking and comparing heights of
both children. This makes updating balance trickier but contributes to
a successful item 1 in our list. Method height()is less critical, but
.balance tells us which way to branch as we dive to the deepest leaf.
It isn’t O(1), but it is O(NlogN), which is good enough.
Let’s explore 2a and 2b. Remember those methods that yesterday
we glossed over, assuming they already existed? We will create
them today. Write add(value) and remove(value) methods for the
AVLTree class. When you do so, remember to keep the .balance
attribute up-to-date for each node.
function AVLTree() {
var head = null;
// assume isBalanced() works fine
this.isBalanced = function() {}
// ...write these today
this.add = function(value) {}
this.remove = function(value){}
}
function AVLNode(value) {
this.val = value;
this.balance = 0;
this.left = null;
this.right = null;
// assume isBalanced() works fine
this.isBalanced = function() {}
}
􀀀 AVL: Remove
Create remove(value) for the AVLTree class. Update .balance for any
affected nodes, but don’t worry about rebalancing the tree.
􀀀 AVL: Add
Create add(value) for the AVLTree class. Update .balance for any
affected nodes, but don’t worry about rebalancing the tree.
Chapter 19 – Trees, Part III
Let’s review the challenges we face, if we want an AVL tree to have
high performance:
1. Minimize the cost of checking a tree’s cost. This implies that
we:
a. Store a value in each node, rather than recomputing
height/balance each time;
b. Store balance, not height, to avoid checking children when
testing for balance;
c. Check the tree’s balance only at appropriate times;
d. Check the tree’s balance only at necessary tree locations.
2. Minimize the cost of maintaining the tree’s balance indices,
implying that we:
a. Only update the balance indices when we add/remove
values (or rebalance);
b. Update balance indices for only nodes affected by the
add/remove, so that we
minimize the number of nodes whose balance need
rechecking (see 1c).
3. Minimize the cost of rebalancing the tree, when this is
needed. This implies that we:
a. Minimize the number of nodes changed during a rebalance,
so that in turn we
b. Need to update balance for only a small number of nodes
(see 2b), in order to
minimize the number of nodes whose balance needs
rechecking (see 1c).
For 2a and 2b, as you discovered yesterday, we minimize the cost of
updating balance indices by only updating the balance of nodes
being inserted/removed and their ancestors upward (not the entire
tree). When an ancestor node’s balance is unaffected, we need not
continue checking upward.
What about our other major implication: rebalancing? We handle this
with an operation called rotation.
Rotation
The benefit of AVL trees over other BSTs is that AVL trees
automatically keep themselves relatively balanced. When an AVL
tree discovers an imbalance (if any node’s left subtree height and
right subtree height differ by more than one), it fixes that condition by
rotating that node.
Think of rotation as a clockwise (Rotate Right) or counter-clockwise
(Rotate Left) shift of both the node in question as well as its “tall”
child node. Child is promoted above parent, reducing overall tree
height.
Consider a large BST where in the midst of the tree, node A has a
.right child: node B. Following an insertion somewhere below B,
node A’s right subtree height is now two greater than its left subtree
height. We should Rotate-Left node A. This will change the height for
A and B, but how are all the other nodes affected? It would be
expensive to move lots of nodes around whenever we do a rotation.
Fortunately, this isn’t the case. Think about where the rest of the
nodes in the tree end up, when we do a rotation. To start with, nodes
above this rotation do not move, nor do those in other parts of the
tree. As a result, we only need to worry about A’s and B’s children.
Those children have values that are either
a) less than A’s (conveniently located under A.left), or
b) greater than/equal to B’s (conveniently located under B.right),
or
c) between A and B (currently conveniently located under B.left).
Chapter 19 – Trees, Part III
When we rotateLeft node A, it becomes the .left of node B. Let’s put
their groups of children in place. Child nodes less than A (the entire
A.left subtree) should stay where they are. Nodes greater than B
(the B.right subtree) should also stay put. However, nodes in
between might pose a problem. They can’t stay where they are
(under B.left), because that’s where A has moved. What to do?
Let’s reason through this. Nodes in question have values less than
B, so they go to B’s left somewhere. They have values greater than
A, so they go to A’s right somewhere. After promoting B, A.right is
available! Subtree previously located at B.left can move to A.right.
Voila! Rotate-Left is complete.
Calling rotateLeft(Q) on first tree converts it
to the second one. Cool! In most (not all)
cases, one rotation corrects an imbalance.
Drawing diagrams, you may discover
corner cases where rotation does not
succeed.
Revisiting the first
tree: what if a tall
T subtree causes
our imbalance?
After rotateLeft, T
shifts from S.left to
Q.right but does
not move toward root; imbalance remains. Our objective was to pull
a ‘tall grandchild’ toward root.
Note the next graph. If .left of a tall right child
causes imbalance, we can’t just
rotateLeft(Q). We must rotateRight(S) to
transform it into this tree.
Then, rotateLeft(Q) transforms middle tree
into (shallower) final tree.
􀀀 AVL: Rotate Left
Create rotateLeft(node) method in the AVLTree class. First counterrotate
the child if needed, and as always update.balance attributes
appropriately and inexpensively.
􀀀 AVL: Rotate Right
Create a rotateRight(node) method for AVLTree. Counter-rotate the
‘tall child’ first, if needed, and keep all .balance attributes
appropriately and inexpensively up-to-date.
Chapter 19 – Trees, Part III
Let’s review how nodes move, on our
previous Right-Left Rotation. If .left of a tall
right child causes imbalance (specifically T),
then before we RotateLeft(Q) we
RotateRight(S), transforming first tree into
second tree. Then, RotateLeft(Q) transforms
second tree into (shallower) third tree.
Note: in this example, the heights of child
nodes (R, V, W, U) don’t change during the rotation process; the
heights of all nodes in those subtrees are unaffected, all the way
down to the leaves. Heightwise, the only affected nodes are red,
black, and green – as well as their parent chain. For this reason,
when fixing heights after a rotation we must follow any change
upward
to the
parent,
in case
that
parent’s
height changed as well. In what scenario
should we not continue to notify upward?
Specifically, if after adding some value we see a node’s .balance
change (say, from 1) to 0, then that node’s height did not change,
and hence its parent chain is unaffected. Similarly, if after removing
some value we see a node’s .balance change from 0 to some other
value, then that node’s height did not change (try drawing a few on
paper!). If a node’s height didn’t change, there’s no need to check its
parent nodes. This significantly optimizes our Update Balance
Indices process.
Now that we can 1) add and remove while updating.balance, as well
as 2) rotate to bring trees back into balance, we are equipped to
create the most powerful AVLTree methods: balanced add / remove.
􀀀 AVL: Balanced Add
Using all you learned this chapter, create a balancedAdd(value)
method for AVLTree class. Ensure that by the time it returns, our
value is added, the tree is balanced, and all node attributes are
updated and accurate.
􀀀 AVL: Balanced Remove
Build balancedRemove(value) for our AVLTree class. Ensure that
when method returns (true if removed, false if not found), the value is
removed, tree is balanced, and all node attributes are updated and
accurate.
􀀀 AVL: Rebalance
Similar to repair() on regular BSTs, create rebalance() for AVLTrees.
Just as repair() is not really needed (since we expect BSTs to insert
and delete nodes correctly and never become invalid), similarly we
could argue that rebalance() is unneeded since an AVLTree will
continually keep itself balanced. Nonetheless, quickly build this,
using other methods you’ve already created.
Chapter 19 – Trees, Part III
There are other types of self-balancing tree as well. One example is
the Red-Black Tree.
Red-Black Trees
A Red-Black Tree is based on our normal Binary Search Tree, plus
these rules:
1. A boolean within each node designates it as currently red or
black.
2. The root node is black.
3. The null underneath each leaf node is considered black.
4. If a node is red, then both its children must be black.
5. Every path from node to descendent null contains the same
number of black nodes.
The uniform number of black nodes in paths from root to leaves
is the tree’s black-height.
As with the AVLTree, search methods in an RBTree (such as
contains) are identical to those of a BST. The add and remove
properties, however, are more interesting. To add a value to an
RBTree, we create an RBNode (these default to Red) and insert it at
the appropriate place in the tree. If the Red-Black rules are not
violated, we are done. Otherwise, we either “repaint” certain nodes
or we rebalance (and then repaint) certain nodes as necessary.
􀀀 RBTree and RBNode Class Definitions
Create the simplest possible class definitions of RBTree and
RBNode.
􀀀 Red-Black Tree: Add
Create the add(val) method on the RBTree class. As needed, repaint
and/or rebalance; this is a self-balancing method.
􀀀 Red-Black Tree: Contains
Create a contains(value) method for RBTree. Is this function
interesting?
􀀀 Red-Black Tree: Remove
Create the RBTree’s remove(val) method. As needed, repaint and/or
rebalance nodes; this is a self-balancing method.
􀀀 Short-Answer Questions on AVL and Red-Black Trees
Self-balancing seems like a lot of work. When are costs
justified? When are they not justified?
Between AVL trees and Red-Black trees, which incurs more
rebalancing cost?
How would shapes of AVL trees and Red-Black trees generally
differ (if at all)?
What are the performance differences between these trees?
When would you choose AVL tree over Red-Black, and viceversa?
Between AVL, Red-Black and binary search trees, which
height() implementation would generally be fastest, given a
large diverse data set? What is its big-O for runtime?
Chapter 19 – Trees, Part III
Another type of self-optimizing tree does not automatically balance
itself. Instead, it optimizes for how it is being used. This data
structure, the Splay Tree, is flexible and adaptable to many
scenarios.
Splay Trees
Splay Trees, like the AVL and Red-Black Trees, are based on
generic Binary Search Trees, plus additional rules. Here are the
additional rules that enable the Splay Tree to optimize itself:
1. When a value is added, the new node becomes the root of the
tree;
2. On a search, the last node accessed (whether the found node
or not!) becomes the root;
3. When a value is deleted, the parent of the removed node
moves to become the root.
4. To promote nodes to root position, the tree uses a rotation
operation called a Splay.
When a node is Splayed, we effectively perform a series of tree
rotations until the node is moved to the root position. If the node is
currently the left child of a left child, or if the node is currently the
right child of a right child, then the ‘grandparent’ node is rotated
twice. Otherwise the ‘parent’ node is rotated once, and then the
‘grandparent’ node once. This two-rotation cycle repeats as
necessary. One last single rotation might be needed to move the
node into the root position.
􀀀 Splay Tree Class Definitions
Create the simplest possible SplayTree class definition. Do you need
a SplayNode?
􀀀 Splay Tree: Add
Create the add(value) method on the SplayTree class, splaying the
new node.
􀀀 Splay Tree: Contains
Create a contains(value) method for SplayTree, splaying as needed.
􀀀 Splay Tree: Remove
Create a remove(value) method for SplayTree, splaying as needed.
􀀀 Short-Answer Questions on Splay and Self-Balancing
Trees
How would shapes of Splay, AVL, Red-Black and BST trees
generally differ (if at all)?
What are the performance differences between Splay trees and
BSTs?
When would you choose Splay trees over AVL or Red-Black?
Compare the likely performance of height() across Splay, Red-
Black and BST.
For the most recently accessed item in a Splay Tree, what is
the big-O to remove it?
Chapter 19 – Trees, Part III
􀀀 Black Belt Exam
Today is an advanced belt exam in Algorithms, leading to the
extremely rare, very-much-coveted Black Belt in advanced
Algorithms & Data Structures.
Good luck! Remember our superb suggestions, great guidance,
tremendous tips and prescient pearls of wonderful wisdom!