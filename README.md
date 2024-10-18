I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice. https://www.geeksforgeeks.org/find-the-length-of-a-javascript-object/#method-1-using-the-objectkeys-method was used for object handling help. It also uses the search I made for https://github.com/COSC3020/graph-search-acraig9266.
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case is when there is no cycle. In this situation, the depthFirstSearch function is performed on every edge within the graph. The depthFirstSearch function, which was taken from my graph-search exercise, is Θ(V + E) complexity. The complexity of the entire hasCycle function is (E)(V + E) = (EV + E<sup>2</sup>). So, the complexity T(n) ∈ Θ(E<sup>2</sup>).
