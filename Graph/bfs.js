// ================> file to implement bfs in graph <================= //

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertiex(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  insert(vertx, edge, isBidirectional = true) {
    if (!this.vertices.has(vertx)) {
      this.addVertiex(vertx);
    }
    if (!this.vertices.has(edge)) {
      this.addVertiex(edge);
    }
    this.vertices.get(vertx).push(edge);
    if (isBidirectional) {
      this.vertices.get(edge).push(vertx);
    }
  }
  display() {
    let result = "";
    for (let [vertex, neighbors] of this.vertices) {
      result += `${vertex} : ${neighbors.join(",")}\n `;
    }
    return result;
  }
  bfs(startIndex) {
    const visited = new Set();
    const queue = [startIndex];
    visited.add(startIndex);
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      for (const neighbors of this.vertices.get(currentVertex)) {
        if (!visited.has(neighbors)) {
          visited.add(neighbors);
          queue.push(neighbors);
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
graph.bfs(5);
