function hasCycle(graph) {
    graphSize = Object.keys(graph).length;
    nodes = Object.entries(graph);
    for (i = 0; i < graphSize; i++) {
        const nextNodes = nodes[i] || [];
        node = nodes[i];
        for (j = 0; j < nextNodes.length; j++) {
            child = nextNodes[1][j];
            if (child != undefined) {
                result = depthFirstSearch(graph, child[0], node[0]);
                if (result != null && result.length > 2) {
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

var graph = {
};
hasCycle(graph);