import ContainerNode from 'metamodel/Node/ContainerNode';
import Simulation from 'metamodel/Simulation';

interface EdgeInterface {
    id: string;
    name: string;
    style: string;
    animated: boolean;
    container: Simulation | ContainerNode;
};

class Edge {

    id: string;
    name: string;
    style: string;
    animated: boolean;
    container: Simulation | ContainerNode;

    constructor(initializer: EdgeInterface) {
        this.id = initializer.id;
        this.name = initializer.name;
        this.style = initializer.style;
        this.container = initializer.container;
        this.animated = initializer.animated;
    }
}


export default Edge;