Chapter 11 – Trees

This chapter we explore trees, and in particular binary search tree (BST), an important data structure. The BST is optimized for quickly finding/retrieving elements. A BST is similar to a linked list, in that it stores data elements within node objects. Let’s compare a doubly linked list node to a binary tree
node.

    function DLNode(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }

    function BTNode(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

In a doubly linked list, each node has a value, plus pointers to two peers (prev and next). Similarly, in a binary tree each node has a value, plus pointers to two children, left and right. Just as with linked lists, these pointer attributes often reference another node, but can be null. Linked lists and binary trees always start with a single node; in a linked list we call it the head, in a binary tree we call it the root. The BST structures the data in a tree rather than a flat linear sequence.

A binary tree node can have a left child and/or a right child; each child might have left and/or right children of its own. An entire section of a family might descend from one sibling as opposed to another, similarly there are related subsets of a binary tree. These are (no surprise) called subtrees. We refer to all nodes stemming from the root node’s left pointer as the root’s left subtree, for example. By their basic definition, neither generic binary trees nor generic linked lists impose any specific order on where values must be located in them. There is a type of binary tree that adds structure, though. Read on.

The binary search tree adds a requirement that for every node, all nodes in its left subtree must have smaller values. Similarly, its right subtree must contain only values that are greater than or equal to its value. This constraint holds for every node in the subtree, not just the direct children. These rules determine exactly where new children are placed in a BST. If “Grandparent” node<50> has a right child with the value 75, then children of node<75> are appropriately constrained not only by their parent, but by that grandparent as well. Specifically, the entire left subtree of node<75> must have values between 50 and 75.

BST nodes without children are considered leaf nodes. Depending on its values, no node is required to have two children. Even in a tree containing many values, the root node might have a left or right pointer that is null (e.g. if the root contains the smallest or largest value in the tree, respectively).

The Binary Search Tree is an example of an Ordered data structure, because the values are stored in a way that allows us easily to get from one value to the next-largest value or next-smallest value.

Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

    function BTNode(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    function BST() {
        this.root = null;
        // add methods here...
    }

1. [] BST: Add
2. [] BST: Min
3. [] BST: Size
4. [] BST: Contains
5. [] BST: Max
6. [] BST: Is Empty

You may have already realized that all Binary Search Trees are not equivalent. The arrangement of the nodes in the tree have a real effect on its efficiency. In referring to a tree’s shape, we use the terms depth (also known as height) and balance, and a few chapters down the road we will work with trees of certain shapes that we refer to as full and complete. Let us explore these terms further.

Binary Tree Depth
A tree’s depth is the length from root to farthest leaf including both. If we add nodes to a BST in random order, the tree grows in a relatively balanced manner – left and right subtrees will be about the same size, with mostly equal depth. If we add elements in sorted order, the tree becomes unbalanced, resembling a linked list in shape, and depth might approach the total number of elements. Even balanced trees often have a few “holes” where non-leaf nodes have one child that is NULL. However, the fewer the holes, the fuller a BST is. Using the tree metaphor, a full BST is a very “bushy” tree, rather than thin and spindly. More nodes, contained in the same number of layers, makes for a better tree. Stated differently, given two binary trees with the same number of nodes, the one with less depth is always more efficient. Why is this?

Our answer lies in the reason that finding values in BSTs is so much quicker than finding them in SLists. Every node in a binary tree has branches, so there isn’t a single path to follow from beginning node to end node. Furthermore, because BSTs are ordered, we always choose the correct direction at every fork. Instead of searching all values, the longest search is only the depth of the tree. This is why shallow, full trees are best. As data structures go, BSTs rock for fast retrieval and maintaining order.

Today, add these additional methods to our BST class implementation:

7. [] BST: Height
8. [] BST: Is Balanced
9. [] Array to BST
10. [] Closest Common Ancestor

Binary Search Tree Traversal
Binary search trees are mostly used for their ability to fast-find, but sometimes we need to enumerate all their values. Here are three examples that illustrate why we might want different orders for listing the tree node values. 1) If we need to temporarily convert a BST to a different data structure, we may want it to list its values in numerical order. 2) If we want to duplicate a tree, we need to build it from the parent nodes downward, so we want to list parent nodes before child nodes. 3) If tree nodes might not represent values, but, say, components in a manufacturing process, where a component can only be assembled once its ‘child’ subcomponents are built, then we might want to list both child nodes before their parent node. These three examples are called in-order, pre-order, and post-order traversals, respectively. The terms pre-order and post-order refer to when a node is enumerated, compared to its children – if it is enumerated first, then this is pre-order; if it is enumerated last, then this is post-order. Enumerating a left child first, then the node itself, then the right child, is in-order.

11. [] Traverse BST Pre-Order
12. [] BST to Array
13. [] BST: Minimum Height
14. [] Traverse BST Post-Order
15. [] BST to List
16. [] Traverse BST Pre-Order, No Recursion

Self-Instantiating Classes
Implement today’s challenges into the BST class below. Notice anything new? Why would we add this?

    function BTNode(value) {
        if (!(this instanceof BTNode)) { 
            return new BTNode(value); 
        }
        this.val = value;
        this.left = null;
        this.right = null;
    }

    function BST() {
        if (!(this instanceof BST)) { 
            return new BST(); 
        }
        this.root = null;
    }

Answer: the additions to our BTNode and BST classes are instanceof  checks, which make it so that these objects can be created with the following code:

    var myBrandNewBST = BST(); // no new needed
    var aNewNode = BTNode(42); // no new

Fabulous. Now, back to work. Today, add these additional methods to our BST class implementation:

17. [] BST: Remove
18. [] BST: Is Valid
19. [] BST: Remove All
20. [] BST: Add Without Dupes
21. [] Traverse BST Reverse-Order

Add these methods that (might) benefit from in-order traversal.

An alternate way to implement these is to add an attribute .parent. If you add this attribute, consider how you would need to change the other BST methods you’ve built to date.

22. [] BST: Val Before
23. [] BTNode: Node Before
24. [] BST: Val After
25. [] BTNode: Node After
26. [] BST: Closest Value
27. [] Tree Path Contains Sum

Making BST a Fully Navigable Data Structure
In order to move from one node to its successor, sometimes we will need to traverse to a node’s parent. How costly would it be to add a .parent pointer to our BTNode class? Would we need to make any changes to the BST class itself?

Answer: the BST methods add(), isValid(), remove() and addNoDupes(), as well as the BTNode method isValid(), plus both constructors would need to change to incorporate .parent into BTNode. For example, the BTNode constructor would need to include this.parent = null;. Secondly, the BTNode.isValid method would need to ensure that if (this.left), then (this.left.parent == this). Also, a.isValid should ensure that this.root.parent is always null. Even more complex, though, are the required changes to the add and remove methods, where we need to account for both sides when making a change to the BST (not unlike when making changes to a DList!).

28. [] BST With Parent
29. [] Sum of BST Root-Leaf Numbers
30. [] Left-Side Binary Tree
31. [] Short Answer Questions: Trees