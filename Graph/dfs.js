// ==================> file to show dfs in graph <==================== //

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertex(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  insert(vertex, edge, isBidirectional = true) {
    if (!this.vertices.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.vertices.has(edge)) {
      this.addVertex(edge);
    }
    this.vertices.get(vertex).push(edge);
    if (isBidirectional) {
      this.vertices.get(edge).push(vertex);
    }
  }
  display() {
    let result = "";
    for (const [vertex, neighbors] of this.vertices) {
      result += `${vertex}: ${neighbors.join(", ")}\n`;
    }
    return result;
  }
  dfsAllNode(startIndex) {
    const visited = new Set();
    this.dfs(startIndex, visited);
  }
  dfs(startIndex, visited) {
    const stack = [startIndex];
    visited.add(startIndex);
    while (stack.length > 0) {
      const currentValue = stack.pop();
      console.log(currentValue);
      for (const neighbors of this.vertices.get(currentValue)) {
        if (!visited.has(neighbors)) {
          visited.add(neighbors);
          stack.push(neighbors);
        }
      }
    }
  }
}

const graph = new Graph();
graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);
console.log(graph.display());
graph.dfsAllNode(6);
