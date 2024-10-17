const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {
  A: ['B'],
  B: ['A', 'C'],
  C: ['D'],
  D: []
};
assert(JSON.stringify(hasCycle(graph)) == JSON.stringify(false));

var graph = {
    A: ['B'],
    B: [],
    C: ['D'],
    D: []
};
assert(JSON.stringify(hasCycle(graph)) == JSON.stringify(false));

var graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: ['H'],
    F: [],
    G: ['A'],
    H: []
};
assert(JSON.stringify(hasCycle(graph)) == JSON.stringify(true));

var graph = {
    A: ['B', 'C'],
    B: ['C'],
    C: ['A'],
};
assert(JSON.stringify(hasCycle(graph)) == JSON.stringify(true));

var graph = { };
assert(JSON.stringify(hasCycle(graph)) == JSON.stringify(false));
