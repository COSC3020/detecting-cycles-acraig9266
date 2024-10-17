const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph1 = {
  A: ['B'],
  B: ['A', 'C'],
  C: ['D'],
  D: []
};
assert(JSON.stringify(hasCycle(graph1)) == JSON.stringify(false));

var graph2 = {
    A: ['B'],
    B: [],
    C: ['D'],
    D: []
};
assert(JSON.stringify(hasCycle(graph2)) == JSON.stringify(false));

var graph3 = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: ['H'],
    F: [],
    G: ['A'],
    H: []
};
assert(JSON.stringify(hasCycle(graph3)) == JSON.stringify(true));

var graph4 = {
    A: ['B', 'C'],
    B: ['C'],
    C: ['A'],
};
assert(JSON.stringify(hasCycle(graph4)) == JSON.stringify(true));

var graph5 = { };
assert(JSON.stringify(hasCycle(graph5)) == JSON.stringify(false));
