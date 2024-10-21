function hasCycle(graph) {
    graphSize = Object.keys(graph).length;
    nodes = Object.entries(graph);
    for (i = 0; i < graphSize; i++) {
        const nextNodes = nodes[i] || [];
        node = nodes[i];
        for (j = 0; j < nextNodes.length; j++) {
            child = nextNodes[1][j];
            if (child != undefined) {                                     // Ensures the child node existed and was assigned correctly because it was a problem early on
                result = depthFirstSearch(graph, child[0], node[0]);      // Calls search on a child node and returns true if it can find a path to parent node when starting from the child 
                if (result != null && result.length > 2) {                // Checks if a path back to parent was found and that the path is not the child going directly back to parent as cycles require 3 nodes involved
                    return true;
                }
            }

        }
    }
    return false;
}

function depthFirstSearch(graph, startNode, targetNode) {
    const result = search(graph, startNode, targetNode);
    return result;
}

function search(graph, currentNode, targetNode, visitedNodes = new Set(), path = []) {
    visitedNodes.add(currentNode);
    path.push(currentNode);
    if (currentNode == targetNode) {
        return path;
    }

    const nextNodes = graph[currentNode] || [];

    for (let i = 0; i < nextNodes.length; i++) {
        if (visitedNodes.has(nextNodes[i]) == false) {
            const result = search(graph, nextNodes[i], targetNode, visitedNodes, path);
            if (result) {
                return result;
            }
        }
    }
}
