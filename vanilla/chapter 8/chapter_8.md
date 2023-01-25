Chapter 8 – Linked Lists, Part II

This week involves linked list and object pointer manipulation. Later we’ll see a list where nodes connect to two others, but in this linked list, each node links only to the next. It is accurately called a singly linked list, where iterating forward is easy; backward is tricky. Start from this SList object:

    function SLNode(value) {
        this.val = value;
        this.next = null;
    }

    function SList() {
        this.head = null;
        this.back = function() {
            if (!this.head) { 
                return null;
            }
            var runner = this.head;
            while (runner.next){ 
                runner = runner.next; 
            }
            return runner.val;
        }

        this.pushBack = function(value) {
            var newNode =new SLNode(value);
            if (!this.head){ 
                this.head = newNode; 
            }
            else {
                var runner = this.head;
                    while (runner.next){ 
                        runner = runner.next; 
                    }
                runner.next = newNode;
            }
        }

        this.popBack = function() {
            if (!this.head) {
                return null; 
            }
            var returnVal;
            if (!this.head.next) {
                returnVal = this.head.val;
                this.head = null;
                return returnVal;
            }
            var runner = this.head;
            while (runner.next.next) { 
                runner = runner.next; 
            }
            returnVal = runner.next.val;
            runner.next = null;
            return returnVal;
        }

        this.pushFront = function(value){
                var oldHead = this.head;
                this.head = new SLNode(value);
                this.head.next = oldHead;
            }
            this.popFront = function() {
                var returnVal = null;
                if (this.head) {
                    returnVal = this.head.val;
                    this.head = this.head.next;
                }
                return returnVal;
            }

            this.contains = function(value) {
                var runner = this.head;
                while (runner) {
                    if (runner.val === value) { 
                        return true; 
                    }
                    runner = runner.next;
                }
                return false;
        }

        this.removeVal = function(value){
            if (!this.head) { 
                return false;
            }
            if (this.head.val === value) {
                this.head = this.head.next;
                return true;
            }
            var runner = this.head;
            while (runner.next) {
                if(runner.next.val===value){
                    runner.next = runner.next.next;
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

Runners and Linked List Iterators
By now you know well how to iterate through the values of an array. You set up your FOR loop, with an idx variable that starts at 0 and advances by 1 until idx equals Array.length. We want to easily iterate through the values of a linked list as well, and this is easy enough. Instead of an idx that starts at the beginning of the array, we start with a pointer to the first node (or SList.head, if we are working with an SList object). This pointer will ultimately run through all the nodes in our list, so we use a convention of calling this variable runner. Just as idx advances by 1 until it equals Array.length, likewise our runner will follow each node’s .next pointer to the subsequent node, until it is null.

How would we compare runners to other iterators? One important aspect is that in singly linked lists (SLists for shorthand), .next pointers flow in only one direction. To check whether an array is a palindrome, we can directly compare arr[idx] to arr[arr.length-idx-1]; runners can’t do that. We can, however, have more than one! In addition to our normal runner, we could have 1) a second runner that trails by some number of nodes, or 2) a second runner that is actually a ‘walker’ – the two runners could advance at different speeds. This is sometimes called a ‘tortoise and hare’ pattern, and is useful in a number of situations.

This chapter’s challenges have an optional additional twist, if you so choose. If the challenge asks for a method in the SList class, then to accept this optional challenge, solve it three ways: as a standalone function that accepts an SList object, as an SLNode method, and as an SList method.

1. [] SList: Reverse
2. [] SList: Kth-Last Node
3. [] SList: Is Palindrome
4. [] SList: Shift Right

Over the chapter’s course, we’ll coalesce a considerable collection of cool concepts for contemplation:

Classes and objectsPrivate vs. publicPrototype === vs. == Reference vs. value

Today’s challenges should all be implemented as standalone functions.

5. [] SList: Sum Numerals
6. [] SList: Setup Loop
7. [] SList: Flatten Children
8. [] SList: Unflatten Children

Be mindful of these ideas as you work through the chapter’s challenges:

Classes and objectsPrivate vs. publicPrototype === vs. == Reference vs. value

Build standalone functions and SList & SLNode methods. Your setupListLoop() may be useful.

9. [] SList: Has Loop
10. [] SList: Break Loop
11. [] SList: Loop Start
12. [] SList: Number of Nodes
13. [] SList: Swap Pairs
14. [] Where's the Bug? (SList version)

Doubly Linked List
There is certainly no reason why a linked list node must refer to only one other node. For the best flexibility when traversing a list, we might want to be connected in both directions: forward and backward. Whereas singly linked lists feature nodes that only know about their forward neighbor (unable to look backward), doubly linked lists are more like lines of preschoolers holding hands as they walk down the street together, on a field trip to the fire station. This expands our ability to easily iterate back and forth through the DList, forming a much better parallel with our idx array iterator.

For the Doubly Linked List, all the concepts and techniques of Singly Linked Lists apply (see below). This extra flexibility comes with a cost, however. Maintaining both sets of pointers can be tedious.

Classes and objectsPrivate vs. publicPrototype === vs. == Reference vs. value

function DLNode(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
}

function DList() {
    this.head = null;
    this.tail = null;
}

15. [] DList Class

Take on as many DList challenges as possible, before next chapter starts!

16. [] DList: Prepend Value
17. [] DList: Kth-to-Last Value
18. [] DList: Is Valid
19. [] DList: Palindrome
20. [] DList: Loop Start
21. [] DList: Append Value
22. [] DList: Delete Middle Node
23. [] DList: Partition
24. [] DList: Reverse
25. [] DList: Break Loop
26. [] DList: Repair
27. [] Short Answer Questions: DLists