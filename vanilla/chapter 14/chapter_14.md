Chapter 14 – Hashes
Have you ever wondered how key-value
data structures work? You have already worked with these, as they
are prominent in most programming languages. Regardless of the
number of key-value pairs, they can “instantly” retrieve values (O(1)
run-time perf!). How do they do this, even when highly loaded?
This chapter we investigate a new data structure – one used “under
the covers” to construct the collection of unordered key-value pairs
known in PHP as associative arrays, in Python / Swift / C# as
dictionaries, in JS as objects (minus methods, prototypes, etc.), and
in C++ STL as maps. Ruby and Java have the most appropriate
name for this unordered key-value data structure: Ruby calls them
hashes, and Java calls them hashtables. Why? Because a hash
function gives this data structure its quick-check, quick-retrieval
feature, even when containing lots of data.
Consider the array data structure, which is quick-retrieval. Every
array element can be immediately reached with a single index
dereference. If you know the index, you can directly access its value:
arr[idx]. This strength is also its main weakness: you must know
index in order to access element.
The word “associative” is used with these because they associate a
certain key with a certain value. If we use an associative array to
track a specific user, we might have this: { name: "Marino", age: 27,
IQ: 144, languages: ['Italian', 'English'], height: 181 }. Here, we
directly access the user’s age (for example) by referencing the key:
myUser['age'] or myUser.age. If associative arrays didn’t exist yet,
how would we construct them using only traditional (numerical)
arrays?
Traditional arrays associate numerical indices with values. The index
is a key. Continuing our example to store user information in an array
["Marino",27,144,['Italian','English'],181], we can quickly access
user age (27) or name (“Marino”), because we know the one and
only one place in the array where we always find user age (at index
[1]) or name (at index [0]). We get the benefit of quick-retrieval only if
1) for each piece of information, we have a specific index where we
always store it, and 2) we remember that decision (e.g. that [0]
corresponds to name, [1] to age, etc). Can we make this automatic,
while retaining quick-retrieval? Yes. A hash function can
automatically pick indices for us.
Hash functions take inputs (generally strings) and generate large,
seemingly random (but repeatable) numbers, called hash codes. To
generate a unique index for each key, we use its hash code as the
index – this way each key has a reproducible index in our array
where its value will be stored. Note: hash codes could be huge (or
negative). To fit into our array, we limit them to a manageable range.
We solve this by constraining our array to a certain capacity, and
moduloing the hash codes so that they fit into that range. To store
the key/value { name: "Marino" } into our ‘map’, we get the hash
code of the key name, mod that hash code to get an index that fits
within the capacity of our array, and save “Marino” at that index. To
retrieve the value for key name, we hash the key, mod the hash code
to get an index within bounds of our array, then retrieve value at that
index. We can store vast numbers of key/value pairs and still quickly
retrieve values, without iterating through keys or values or having to
remember which index corresponds to which key. It’s a beautiful
thing.
Chapter 14 – Hashes
We now know all we need to build the associative array data
structure, also called unordered_map. It’s a Map, because keys map
to values (if it had single values, not key-value pairs, we call it a set).
It’s Unordered, because (unlike BST or Queue) we do not maintain
any order or sequence for elements. Our hash is sufficiently random
we know nothing about keys that are hashed to adjacent buckets.
With any data structure, after creating a simple constructor
(HashMap()), we build methods for adding data to the structure and
for checking whether a value is found in the structure – add(key,
value) and contains(key). Let’s also build isEmpty(), which suggests
we add numKeys to our constructor.
Here’s our flow, where a call to Add() converts Key to HashKey to
ModHash, changing the Array):
add("myKey",42) 􀀀 "myKey" 􀀀 -1853110172 􀀀 2 􀀀
[undefined,undefined,42]
add("aKey","foo")􀀀 "aKey" 􀀀 -851179773 􀀀 1 􀀀
[undefined,"foo",42]
Our challenges use these reference definitions:
function HashMap(capacity) {
this.capacity = capacity;
this.table = [];
}
// We use this line to hash a string...
var myHashCode = myString.hashCode()
// ...based on this implementation:
String.prototype.hashCode = function() {
var hash = 0;
if (this.length == 0) return hash;
for (i = 0; i < this.length; i++) {
char = this.charCodeAt(i);
hash = ((hash<<5)-hash)+char;
hash &= hash; //Convert-->32b int
}
return hash;
}
// JS % acts oddly for negatives,
// so we define our own this way...
function mod(input, div)
{ return (input % div + div) % div; }
// ... and we use it this way:
var myIdx = mod(myHashCode,arrSize);
􀀀 Hash: Add
Create an add(key, val) method on HashMap to add a new key and
value to the map. This entails hashing key, mod’ing it into the size of
your array, and placing the value there.
Second: If two values hash to the same index, it causes a hash
collision. Then, you should use a secondary array or SList instead of
overwriting (losing) values. Do you still have to worry about hash
collisions if you have a set, not a multiset?
􀀀 Hash: Is Empty
Dude, what if you use a HashMap to find your hash cache, but
someone stole it all? Bummer. Return whether this HashMap is
empty. This is a one-liner but requires changes elsewhere.
􀀀 Hash: Find Key
Create a find(key) method to return value for given key. If key is not
found, return null.
Second: if you altered add(key,val) to handle collisions, extend
find(key) accordingly.
Chapter 14 – Hashes
So far, our hash structure can add and retrieve key-values, and
indicate emptiness. These correspond to classic methods add,
contains and isEmpty. What about the others (remove, size, front)?
First, front has no meaning in a key-value data structure. We don’t
keep keys or values in any order, other than how our hash code
handles them – and this is not an order we expose to the user, since
we might change our hash someday. Second, size is only partially
relevant in a key-value data structure. A hash is similar to a circular
queue: it has capacity (the unchanging number of available buckets),
as well as the number of elements added so far. Unlike a CirQueue,
a hash can map many elements to one bucket. Accordingly, “fullness”
is not how many elements, but instead the ratio of elements to
available buckets. We call this the load factor. Finally, remove is just
what you might expect: it accepts a key, and if that key is present, it
removes the key-value from the data structure, returning the value.
Today we will create these exact methods and add them to our
HashMap class implementation:
􀀀 Hash: Remove
Create HashMap method remove(key) that finds key, removes
key/value pair, and returns the value (or null if key not found in our
map).
􀀀 Hash: Grow
Write a method grow() to increase the internal array of buckets by
50% (20-element array would become 30 elements). Afterward,
rehash all keys, since your mod factor has changed....
􀀀 Hash: Add
Create addMap(HashMap) that accepts another HashMap of keyvalue
pairs and adds each pair to the existing map. For duplicate
keys, new values overwrite old ones.
Second: incorporate a boolean input indicating whether new keys
should overwrite existing.
􀀀 Hash: Load Factor
We may eventually want to grow our array size. Create HashMap
method loadFactor() to return an elements/buckets ratio to monitor
this.
􀀀 Hash: Set Size
Write a method setSize(newCap) to set the capacity of the internal
bucket array to a specific length. As with grow(), after changing the
array length, you must rehash all keys.
􀀀 Hash: Select Keys
Create method selectKeys(keyArray) to accepts an array of keys.
Reject those keys in the existing map that are NOT in that array. If
your map contains {"cool":"Pariece", "smart":"Pariece",
"tall":"Kareem"}, then map.selectKeys(["cool","smart"]) should
change map to {"cool":"Pariece", "smart":"Pariece"}.
Hash Collisions
Collisions are a way of life in hashes. Consider this: as soon as you
add a second value to your hash, there is a potential hash collision.
Even without the mod operation, there is the theoretical possibility
that two values will hash to the same value. This isn’t likely, but
always plan on collisions!
Chapter 14 – Hashes
Any two keys might hash to the same array index. For a hash to
retrieve correct key-values, this means
1) We must store an array at each index, not just a single value,
and
2) We must store the key along with the value, so we know which
value to return.
Here’s our flow: HashKeys ModHash Array
add("myKey",42) 􀀀 -1853110172 􀀀 2 􀀀 [ [],[],[["myKey",42]] ]
add("aKey","foo")􀀀 -851179773 􀀀 2 􀀀 [ [],[],[["myKey",42],
["aKey","foo"]] ]
Let’s examine our array. It is a collection of buckets. A bucket is an
array of key-values hashed to that index, such as [["myKey",42],
["aKey","foo"]]. We iterate this shorter array to get key-values.
Hash tables are sometimes referred to in classical algorithm texts as
unordered maps. In a map, there can be duplicate values (if
different keys map to the same value), but there can be no duplicate
keys. To store multiple equivalent keys one needs a multimap: a map
that allows duplicate keys. Today you will make the changes needed
to convert a HashMap into a hashMultiMap (or unordered multimap).
􀀀 Making Maps into Sets or Multimaps
We have previously mentioned both maps and sets. Sets are
unordered collections of data, without any identifying label or index.
You could think of a set as a map that has only keys. Today, we will
change our HashMap data structure into a HashSet data structure,
and even a HashMultiSet data structure.
Below are HashMap’s attributes/functions. Referencing previous
solutions, which class attributes / methods need changing to create
an unordered_multimap? An unordered_set? Unordered_multiset?
Needs to be changed to create: unordered_set
unordered_multimap unordered_multiset
constructor(size) 􀀀 􀀀 􀀀
this.capacity 􀀀 􀀀 􀀀
this.table 􀀀 􀀀 􀀀
this.numElements 􀀀 􀀀 􀀀
this.add(key, value) 􀀀 􀀀 􀀀
this.find(key) 􀀀 􀀀 􀀀
this.isEmpty() 􀀀 􀀀 􀀀
this.remove(key) 􀀀 􀀀 􀀀
this.loadFactor() 􀀀 􀀀 􀀀
this.grow() 􀀀 􀀀 􀀀
this.setSize(newSize) 􀀀 􀀀 􀀀
With this, refactor HashMap, resulting in related classes for
unordered_map and unordered_set variants. For multiset and
multimap, use a constructor allowMulti flag rather than a separate
class.
Chapter 14 – Hashes
Referencing previous solutions, which attributes or functions need
changing to change unordered_map to unordered_multimap? To
create an unordered_set? An unordered_multiset?
unordered_multimap (from unordered_map)
constructor:
this.multi = allowDupes || false;
this.add(key,val): add an “if (!this.multi)“ around check-if-key-exists.
this.find(key): create results[]. If (multi), push val for (dupe) keys
found. Return results.
this.remove(key): create results[]. If (multi) splice (>1) k/v found.
Return results.
Others: no change (capacity, isEmpty, numElements, loadFactor,
grow, setSize).
Summary of Map/Set Data Structures:
● Maps contain keys and values.
● Sets contain keys only.
● Maps & Sets have no duplicate keys: adding already-existing
keys will overwrite previous values.
● Multimaps & Multisets allow duplicate keys: find() returns an
array of values; remove() deletes all instances of key.
● Unordered data structures use hashing for rapid retrieval, but
lose any sequence or order: nextVal(), prevVal(), min(), max(),
top(), front() or back() are expensive for unordered data
structures and generally not seen.
● Ordered data structures use sequencing (Stack, Queue) or
sorting (BST, heap) to retain order, but retrieval is impacted.
unordered_set (changes from unordered_map)
this.add(key): keys only – if key found, don’t replace val; otherwise,
push key (not [key, val]).
this.find(key): keys only – if found, return true (not val); otherwise,
return false.
this.remove(key): keys only – if key found, remove and return true
(not val), else false.
this.setSize(newSize): keys only – when rehashing, add(key), not [key,
val].
No change: constructor, capacity, table, isEmpty, numElements,
loadFactor, grow.
unordered_multiset (from unordered_set)
constructor:
this.multi = allowDupes || false;
this.add(key): add "if (!this.multi)" around the check-key-alreadyexists
loop.
this.find(key): use numFound: if (multi), numFound+=count. Return
numFound.
this.remove(key): use numFound: if (multi), splice (multiple). Return -
-numFound.
this.setSize(newSize): keys only – when rehashing, add(key), not [key,
val].
Others: no change (capacity, table, numElements, isEmpty,
loadFactor, grow, setSize).
You have seen how interface (unordered map) is decoupled from
underlying implementation (hash of arrays). In the same way that we
examined unordered sets & maps, you could dive into ordered sets
& maps. Ordered data structures care about sequence, so we could
implement them with BSTs or heaps.
Chapter 14 – Hashes
With short answer questions, you can demonstrate technical depth
as well as clarity of communication.
How would you answer the following, if asked in an interview?
􀀀 Short Answer Questions: Unordered Data Structures
Describe what is meant by an unordered data structure.
Is there more than one type of unordered data structure? Why
would I use each of these?
How are unordered maps commonly implemented? What is the
underlying structure’s name?
What is the sequence of steps taken, when adding a value to an
unordered set?
What is the sequence when checking whether a given key
exists in an undered map?
Likewise, what steps are taken when removing a value from an
unordered set?
How would one check the validity of an unordered map?
For an unordered set containing the following methods – add,
remove, min, max, removeMin, removeMax, contains, prevVal,
nextVal, size – which methods are considered fast? How fast?
Likewise, which of these are considered relatively slow? Why
are they slow? How slow?
Is there such thing as an ‘unbalanced’ unordered map? What
should we do at that point?
Can unordered maps get ‘full’? What should we do at that
point?
􀀀 Short Answer Questions: Ordered Data Structures
Describe what is meant by an ordered data structure.
Is there more than one type of ordered data structure? Why
would I use each of these?
How are ordered maps commonly implemented? What is the
underlying structure’s name?
What is the sequence of steps taken, when adding a value to an
ordered set?
What is the sequence when checking whether a given key
exists in an dered map?
Likewise, what steps are taken when removing a value from an
ordered set?
How would one check the validity of an ordered map?
For an ordered set containing the following methods – add,
remove, min, max, removeMin, removeMax, contains, prevVal,
nextVal, size – which methods are considered fast? How fast?
Likewise, which of these are considered relatively slow? Why
are they slow? How slow?
Is there such thing as an ‘unbalanced’ ordered map? What
should we do at that point?
Can ordered maps get ‘full’? What should we do at that point?
Chapter 14 – Hashes
􀀀 Blue Belt Exam
Today is a belt exam in Algorithms, leading to the rare, muchcoveted
Blue Belt.
Good luck!
Remember our super suggestions, good guidance, terrific
tips, and perfect pearls of wisdom!