// ===================> file to show the implementation of graph <================= //

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
      result += `${vertex} : ${neighbors.join(", ")}\n`;
    }
    return result;
  }
}
const graph = new Graph();
graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);
console.log(graph.display());
