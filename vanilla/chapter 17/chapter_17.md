Chapter 17 – Graphs
One reason Amazon is an amazing
company is because it can, overnight, deliver (almost) anything, from
anywhere, to anywhere. How is that possible at any price, let alone a
reasonable one? Amazon has made huge investments in logistics.
This means storing goods at centers around the world, but also
being incredibly efficient at getting those goods from suppliers, and
to customers. Optimizing their transportation needs is a graph
theory problem easily worth many hundreds of millions of dollars
every year to Amazon, likely $1Billion or more.
Large software projects such as Office, Android or World of Warcraft
have highly complex processes required to build these products.
From synchronizing source code, to compiling and linking source
code, to substituting localized text strings for more than 100 non-
English languages, to creating installable packages, to automatically
installing and testing a daily build, to automatically releasing it to the
large team of engineers only if the builds and tests pass – there are
hundreds of steps that can be automated, with numerous
interdependencies. Constructing a dependency chains for large
software projects that works at all – let alone optimizing it – is an
enormous graph theory problem. Looking more deeply into just one
of these steps – compiling and linking an iOS application: these tools
could not begin to interpret source code without significant use of
dependency analysis, rooted in graph theory.
Every network problem is a graph problem as well. Is there enough
Internet backbone bandwidth for future needs? Although our roads
and bridges might be adequate for average demands, can we
forecast how they will fare during events such as local NFL games or
university graduations? The modern industrial company deals with
complicated dependency chains (graphs) when they manage their
materials and their manufacturing lines. Social network companies
such as Facebook, LinkedIn, Twitter consider their knowledge of the
interconnections between us to be their core asset. Org charts that
show teams and leadership relationships are graphs. Even our
understanding of how the human brain works (a neural network) is
modeled as a complex and enormous graph. Graphs are extremely
important, if for no other reason than that our world is increasingly a
connected one.
What is a graph? How do we process and manage them in
computing? Why are there different ways to represent them? Where
and when is each method appropriate?
A graph is any collection of nodes that can be connected. Singly
linked lists and binary trees, for example, are graphs. When we look
at a graph on a computer screen or on paper, the actual shape of
that graph does not matter – what matters are the connections
between nodes. The number of connections out of or into each node
need not be limited to just one or two: it is possible for every node to
be connected to every other. Also, the connections between nodes
may or may not have direction (the ‘arrows’ between nodes may not
have ‘arrowheads’). Connections also may or may not have a weight
that we choose to store within it. For example, if downtown
intersections A and B are nodes, for the connection between them
we could use its weight to signify the distance between them, or the
time needed to travel between them, or the cost in fuel+toll.
Hopefully you are starting to see how programs like Google Maps
might store a city transportation grid! There are two common ways
graphs are represented in data structures. Before we go into those,
we need to define a few common terms.
Chapter 17 – Graphs
Graph Terms
These terms are not necessarily essential to understand graph
theory or how networks operate. They are mainly only important if
you intend to work with others who have some level of ‘classical’
training in graph theory, or when you dive into additional materials in
this area.
Important:
Graph: a collection of nodes that may or may not have connections
between them.
Vertex: what we have called a node; a vertex is where connections
meet (plural: vertices).
Edge: what we have called a connection; an edge runs between two
vertices (nodes).
Walk: a walk is any route from a vertex through edges to
subsequent vertices.
Circuit: a circuit is a path (every vertex) that ends where it started;
also connected or closed path.
Directed: in a directed graph, edges have a direction from one
vertex to another.
Undirected: in an undirected graph, edges do not have direction:
they are two-way.
Degree: the number of edges to/from a vertex, if undirected (indegree
and out-degree, if directed).
Acyclic: acyclic graphs contain only one way to travel between two
vertices.
Cyclic: cyclic graphs can contain multiple ways of getting from one
node to another.
Order: a graph’s order is the number of vertices in the graph
(inexplicably, usually called n, not v.
Size: a graph’s size is the number of edges in that graph
(inexplicably, usually m, not e).
Root: a designated vertex, for ‘rooted graphs’ and potentially,
directed graphs.
Other terms you might hear:
Cycle, Path, Tour: various types of walks; conflicting interpretations
are used, so look for clarification.
Component: a maximal subset of vertices on a circuit (maximal
means all that can be included are included). A graph may be made
up of more than one component; these do not intersect.
Chapter 17 – Graphs
Representing Graphs
We’ve told you to think about a graph much the same as you might
think about a BST: some collection of nodes with pointers between
them. That is a fine starting point, and good when drawing them on
whiteboards, but graphs are almost never actually represented in
source code that way. Why not?
The problem with graphs, compared to linked lists or binary trees, is
that they are unpredictable. Graph vertices can point wherever they
want. Vertices can have any number of outbound connections,
including zero. They can have any number of inbound connections,
including 0. They can form cycles, and cycles-within-cycles. A vertex
could even point to itself! For this reason, a graph doesn’t have a
clearly-designated head node, as lists and trees do. Also, it isn’t just
nodes (vertices) that have values, as we are used to. The
connections between them have values too – those “arrows”
between nodes have thicknesses that can vary. Some graphs have
bidirectional connections that we wouldn’t think of as arrows or
pointers. Further, graphs need not be entirely connected: there can
be entire sections wholly disconnected from the rest, or loner
vertices with no inbound or outbound edges at all. Compared to
graphs, even doubly linked lists and unbalanced binary trees are
well-behaved and (gasp!) boring. So, what is the right way to reduce
a graph into a data structure in source code?
Graphs are most commonly represented in three different ways.
These include edge list, adjacency map and adjacency list concepts.
We will build simple versions of each, later this chapter. Despite their
differences, each graph data structure does two things: manage
vertices, and manage edges.
You can think of vertices in the same way that you have thought of
nodes in a linked list: each is located in a particular place in the
structure and has a value that can be set to … well … anything. As
mentioned before, we can’t just store the “head node”, because a
graph’s vertices may not be interconnected. We need to maintain a
list of them. With this in mind, in addition to the graph constructor
function, we would expect a graph to have a this.vertList that
contains our vertices, as well as the following functions to manage
vertices:
addVertex(val) // returns vertId
removeVertex(vertId)
getVertexValue(vertId)
setVertexValue(vertId, val)
Furthermore, we’d expect to see the following functions, to manage
edges:
addEdge(vertId1, vertId2, val)
removeEdge(vertId1, vertId2)
getEdgeValue(vertId1, vertId2)
setEdgeValue(vertId1, vertId2, val)
Graph representations may not have a dedicated list of edges – this
is one place where our graph data structures differ in their
approaches. Also, notice that edges can attach a value – more on
that later.
First, though, let’s dive into one way to represent graphs.
Chapter 17 – Graphs
Edge List
Our first data structure, Edge List, has a basic approach. Like other
representations, it has a vertex list. Mirroring that, it has a simple list
of all graph edges, represented by IDs for source and destination
nodes, plus optional weight. For now, omit weight from list entries.
An edge list representing the following graph would be: [[A,C],[A,E],
[B,A],[B,C],[C,B],[D,B],[D,E],[E,D]]. With only edge lists, can we
know whether a given vertex exists?
􀀀 Edge List Exercise 1
Create edge lists for the following
graphs A, B and C.
Graph A
Graph B
Graph C
􀀀 Edge List Exercise 2
Draw graphs for the following edge lists:
[[A,C],[B,D],[C,E],[D,A],[E,B]]
[[A,C],[A,D],[B,C],[B,D],[C,B],[D,A],[D,C]]
[[A,A],[A,B],[B,C],[C,B],[C,D],[D,E],[D,A]]
Now, onward to the next graph representation!
Chapter 17 – Graphs
Adjacency Map
Our next graph representation organizes information more efficiently.
To find whether vertices are neighbors, we might iterate the entire
edge list. If instead, vertices store edge information to every other,
we can directly map all adjacencies: this is the Adjacency Map.
Adjacency map:
[ [ 0,-1, 1,-1, 1],
[ 1, 0, 1,-1,-1],
[-1, 1, 0,-1,-1],
[-1, 1,-1, 0, 1],
[-1,-1,-1, 1, 0] ]
Adjacency maps are two-dimensional arrays. Outer array rows
represent a vertex’s outward connections; cells represent all possible
destinations. If an edge exists, the cell stores that edge’s weight
(additional info mentioned earlier, such as length or cost to traverse
that edge). If we are allowed to move from given node directly back
to itself, this weight would be 0. Otherwise, and for any other cells
representing “you can’t get to that destination from this origin”, cells
are given a value which is recognizable as an invalid cost (in this
case, specifically -1). In unweighted graphs, valid edges are
commonly given a weight of 1.
􀀀 Adjacency Map Exercise 1
Build adjacency maps for the following graphs. As above, treat
vertex A as [0], B as [1], C as [2]. As is a default for adjacency
maps, in these maps represent “source == destination” with a weight
of 0.
Graph A
Graph B
Graph C
􀀀 Adjacency Map Exercise 2
Draw graphs for the following maps:
[[ 0,-1, 1, 1],
[-1, 0, 1, 1],
[ 1,-1, 0,-1],
[-1, 1, 1, 0]]
[[ 1, 1,-1,-1,-1],
[-1, 0, 1,-1,-1],
[-1, 1, 0, 1,-1],
[ 1,-1,-1, 0, 1],
[-1,-1, 1,-1, 0]]
[[ 0,-1, 1,-1,-1],
[-1, 0,-1, 1,-1],
[-1,-1, 0,-1, 1],
[ 1,-1,-1, 0,-1],
[-1, 1,-1,-1, 0]]
Next, our final graph representation….
Chapter 17 – Graphs
Adjacency List
With adjacency maps, spot-checking whether arbitrary vertex A
directly connects to vertex B is a simple array lookup. Likewise, to
determine vertex A’s neighbors, we take an entire row from our map
and extract the subset of cells that indicate edges. Unfortunately,
adjacency maps don’t scale well for memory, as the number of
vertices grows: O(v2), where v is vertices. Edge lists, however, are
O(e), where e is edges. For dense graphs (with high edge-to-vertex
ratio), memory usage is comparable, but for sparse graphs (low
edge-to-vertex ratio), this difference is significant. An ideal graph
representation for sparse graphs would have the faster edge- and
neighbor-checking of adjacency maps, with the smaller memory
consumption of edge lists. These are characteristics of the
Adjacency List.
Like adjacency maps, adjacency lists
are two-dimensional arrays. Each row
represents the outward connections
for a vertex, but only valid edges are
stored. An adjacency list for graph
above is smaller than an adjacency
map, but retains the fast (indexed)
lookup: [[C,E],[A,C],[B],[B,E],[D]].
􀀀 Adjacency List Exercise 1
Create adjacency lists for the
following graphs. As earlier, make vertex A [0], make B [1], C [2],
etc.
Graph A
Graph B
Graph C
􀀀 Adjacency List Exercise 2
Draw graphs for these adjacency lists:
[[C,D],[C,D],[B],[A,C]]
[[C,E],[A,D],[B,E],[A,C],[B,D]]
[[A,B],[C],[B,D],[A,E],[]]
[[B,C,H],[D,E],[D,H],[E],[],[E],[B,F],[F,G]]
Chapter 17 – Graphs
Directed and Undirected Graphs
The graphs examined so far had ‘arrowheads’ on every edge: each
connection between vertices had direction. This is appropriate where
an opposing edge may not exist (or might have different weight).
Twitter, for example, is a directed graph: more than 1 million people
follow @karaswisher; she follows ~1300 in turn. Conversely, LinkedIn
is undirected, with directionless edges. For these, it is easier to
create two connections than to store one and constantly check both
sides (if adequate memory exists).
Edges Have Weight
Upfront we mentioned that additional data can be attached to each
edge. Did that seem odd? Edges are not all equal, just as distances
between all intersections are not necessarily equal. Shipping costs
are not universally identical. The traffic present on our roads varies
across the map. This is why we attach a value or some other
metadata to each edge. Use this value however you wish – if you
attach distance to an edge, your graph will be able to compute
shortest distance between nodes. If you attach time to an edge, your
graph will be well-equipped to handle quickest trip calculations. But if
you are interested in fewest turns, stick with a basic graph without
edge weights – just vertices and edges.
􀀀 Edge List Implementation
Now you build them! Using the descriptions that we have given you,
create a class that uses the Edge List paradigm to represent a
graph. Your ELGraph class should have the following methods:
addVertex(value) // return vertID
removeVertex(vertID) // true:removed. false:unfound
getVertexValue(vertID) // return value
setVertexValue(vertID, value) // true:set. false:unfound
addEdge(vertID1, vertID2, value) // true:added. false:unfound
removeEdges(vertID) // delete all edges to/from vert
removeEdge(vertID1, vertID2) // true:removed. false:unfound
getEdgeValue(vertID1, vertID2) // return value
setEdgeValue(vertID1, vertID2, value) // true:set. false:unfound
adjacent(vertID1, vertID2) // true:vert1->vert2. false:not
neighbors(vertID) // return [adjacent vertIDs]
􀀀 Adjacency Map Implementation
Using the descriptions that we have given you, create a class that
uses the Adjacency Map paradigm to represent a graph. Your
AMGraph class should have the same methods that your ELGraph
class does.
􀀀 Adjacency List Implementation
Using the descriptions that we have given you, create a class that
uses the Adjacency List paradigm to represent a graph. ALGraph
should have the same methods as ELGraph and AMGraph.
Chapter 17 – Graphs
Depth-first and breadth-first iteration can be used in graphs, so long
as one knows when to apply each.
Depth-First Search
With depth-first iteration, we continue along a chosen path until it
ends before exploring alternate paths. If we are iterating a BST, we
know that a path ends when child pointers are NULL, and we
recurse until we get there. For graphs, we’ll need a different way,
since graphs can have loops. Rather than using recursion (which
uses a call stack) to handle backtracing through all the possibilities,
we will use a stack of our own; as we discover new possible vertices,
we add them to our stack. To prevent our iterating into infinite loops,
we will mark each vertex when we visit it.
We start the Depth-First Search (DFS) process on a graph by
marking the source vertex as visited, then pushing it onto our stack.
Then we enter the main loop, which continues until the stack is
empty. The loop begins by popping the next vertex from our stack. Is
this the vertex we are looking for? If so, we exit our loop by
immediately returning with success. Otherwise, we retrieve the
neighbors for this vertex. For those neighbors that have not yet been
visited, we push them onto our stack and restart the loop, when we
again pop a vertex from our stack. Eventually, if we have not found
our vertex, we will stop finding unvisited vertices and the stack will
be emptied. If we exit our loop, then we have iterated the graph
without finding our target vertex, so we return an appropriate failure
(such as false or []). In short, DFS dives deep immediately rather
than methodically advancing along all paths.
􀀀 Someone on the Inside
Everybody knows that it is easier to get a job at a company when
you know someone that already works there – you can learn the
culture, what technologies they use, what teams are hiring, etc. – all
before making official contact! Using graph operations, determine
whether you know someone “on the inside” at your target company,
and if so, who. You are given an undirected graph (representing your
social network), your own vertex ID, and an array of vertex IDs for
those working at the company.
Second: often you won’t know anyone “on the inside” at your target.
If so, find one of your contacts that does, returning vertex IDs for
contact and insider. Can you optimize the performance of your
solution?
􀀀 Vertex Is Reachable
Given a generalized graph and two vertex IDs, return whether a path
exists from first to second vertex.
Second: on success, return array of vertex IDs representing one
possible path. If none exist, return [].
􀀀 All Paths
Given a graph, as well as IDs for source and destination vertices,
return an array of all possible paths from source to destination. A
path cannot revisit a vertex. If no path exists, return an empty array.
Chapter 17 – Graphs
Breadth-First Search
If depth-first search is impulsive – choosing a path and “not looking
back” until the string of possibilities is disproved – then breadth-first
search (BFS) is methodical and almost cautious. With BFS, we visit
vertices based on how close they are to the source. In an
interconnected graph, this is similar to ripples spreading on a pond.
When is breadth-first useful, compared to depth-first?
Say we want to find shortest path from vertex D to vertex J. With
DFS, we would determine all possible paths, then compare lengths.
The last path DFS explores might turn out to be shortest. BFS,
however, guarantees to explore options from closest, outward. As
soon as we find a valid path, we know it is optimal – maybe one of
many, but nonetheless optimal. BFS is ideal for find shortest path
problems.
In another example, our graph resembles a mostly complete binary
tree structure. A number of the vertices contain a specific value, and
we are searching for any of them, starting from a ‘root’ vertex. (From
what we know so far, either BFS or DFS are reasonable choices.)
Further, we know that all the vertices we seek are leaves. Now, DFS
is a clear choice. Here’s why: if graph resembles complete BST, with
BFS we won’t reach leaf vertices until after traversing all
intermediate vertices (guaranteed to be 50% of graph), whereas with
DFS we get to leaf vertices as soon as possible. In worst case, both
approaches still check the entire graph, but in best case DFS finds a
target almost immediately. DFS also wins in average case: based on
number of targets, this linearly scales between best and worst.
What enables BFS to work outward evenly, compared to DFS? Hint:
something in the algorithm is inherently more fair than the DFS
algorithm. In DFS, we use a Stack to store the possibilities that we
want to explore. When one path is exhausted, we next explore the
path most recently discovered. This takes DFS “down toward the
leaves” and keeps it there, rather than evenly expanding our ripples
on the pond. It would be more fair to explore paths from firstdiscovered
to last-discovered. So, which data structure should we
use? Queues are ‘fair’ data structures and used in BFS for this
reason. In fact, this is usually the only change needed, to convert a
DFS algorithm to a BFS one!
􀀀 Shortest Path
Given an unweighted graph as well as IDs for source and destination
vertices, find a path that requires minimal fewest edges. Return this
path as an array of vertex IDs, or [] if no path exists.
􀀀 Gimme Three Steps
Given undirected graph and ID for start vertex, return IDs for vertices
three or fewer edges away.
􀀀 Easy to Get There
Given directed graph, return [vertID] for vertices with more incoming
edges than outgoing edges.
Chapter 17 – Graphs
You built graph representations, solved shortest-path problems,
maybe even visited oracleofbacon.org or 6degreesofvincegill.com.
Now what? Let’s talk about graphs with and without cycles.
In graphs, unlike binary trees, a vertex can have inbound edges from
multiple source vertices. Does this create a cycle? Not necessarily! A
graph does not necessarily have a single ‘ancestor’ vertex from
where all paths originate. What if node A had two children B and C,
and they both pointed to the same vertex D – is that a cycle? Again,
not necessarily. Recall: some (most) graphs are directed, meaning
edges have direction. The existence of paths ABD and ACD does
not create a cycle (unless graph is undirected: ABD would imply
DBA, which along with ACD creates a cycle.) A cycle is a path that
starts and ends with the same vertex, not revisiting any intervening
vertices. Cyclic graphs, then, might have cycles, whereas acyclic
graphs are guaranteed to have none. What does this give us?
For one, undirected graphs that contain as many edges as vertices
must be cyclic (although if there are fewer edges, this doesn’t prove
it is acyclic). Counting edges is one way to “fail-fast” when
determining if a graph is cyclic. On the directed graph side, all
acyclic graphs must have at least one vertex without inbound edges,
as well as at least one vertex with no outbound edges – if the graph
does not contain both, we know it is cyclic (although again, the
existence of these vertices doesn’t prove it is acyclic).
Directed Acyclic Graphs
A directed acyclic graph (DAG) is a special subset of graph that has
been much studied. DAGs are used to represent dependency chains
– for source code compiler tools, manufacturing process schedule
optimization, hardware circuit design, spreadsheet calculations, and
many others. Primarily, we care whether a graph is a DAG because
this allows us to apply certain optimizations. Many of these
optimizations are based on Topological Sorting (also called
TopoSort), the process of reducing a directed acyclic graph to an
array of vertices, arranged so that every edge moves forward in the
array.
􀀀 Graph: Is DAG
Given a graph, determine whether it is a Directed Acyclic Graph.
􀀀 DAG to Array
Given a DAG, TopoSort its vertices (create array of vertex IDs so
each edge moves forward in array). Combine with previous solution
to return the vertex array if graph is DAG, or [] if not.
􀀀 Weekend Challenge: Word Ladder
Given two words, list intermediate words that change a letter at a
time, transforming one into other. Use www-
01.sil.org/linguistics/wordlists/english/wordlist/wordsEn.txt. Return a
chain of valid intermediate words that connect the two given words.
Second: Return only the minimal-length chain. If there is more than
one, return the first.
Third: Return all the minimal-length word chains found (not just the
first one).
Fourth: return the minimal-length chain with the highest Scrabble
letter score!