class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjancyList = new Map();
    }

    addVertex(vertex) {
        this._adjancyList.set(vertex, []);
    }
 
    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjancyList.has(startVertex) || 
            !this._adjancyList.has(endVertex)
        ) {
            console.log('Vertex Not Found!!!');
        } else {

            const adjacencies = this._adjancyList.get(startVertex);

            adjacencies.push(new Edge(endVertex, weight));
        }
    }

    getNeighbors(vertex) {
        if (this._adjancyList.has(vertex)) {
            return this._adjancyList.get(vertex);
        } else {
            console.log('vertex does not exist!!');
        }
    }

    printAll() {

        for (const [vertex, edge] of this._adjancyList.entries()) {
            console.log("V ====> ", vertex);
            console.log("E ====>" , edge);
        }
    }


    size() {
          return this._adjancyList.size;
    }

   


}



