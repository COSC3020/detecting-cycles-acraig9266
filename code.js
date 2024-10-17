function hasCycle(graph) {
    for (node in graph) {
        for (child in node) {
            result = depthFirstSearch(graph, child, node);
            if (result = true) {
                return true;
            }
        }
    }
    return false;
}

function depthFirstSearch(graph, startNode, targetNode) {
    const result = search(graph, startNode, targetNode);
    if (result == null) {
        return false;
    } else if (result.length > 2) {
        return true;
    }
    return false;
}

function search(graph, currentNode, targetNode, path = [], visitedNodes = new Set()) {
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

    path.pop();
    return null;
}
