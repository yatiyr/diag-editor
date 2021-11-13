import Element from "metamodel/Element";
import Edge from "metamodel/Edge/Edge";

interface SimulationInitializer {
    id: string;
    name: string;
    style: string;
    edges: Edge[];
    elements: Element[];
};

class Simulation {
    id: string;
    name: string;
    style: string;

    elements: Element[];
    edges: Edge[];

    constructor(initializer: SimulationInitializer) {
        this.id = initializer.id;
        this.name = initializer.name;
        this.style = initializer.style;
        this.elements = initializer.elements;
        this.edges = initializer.edges;
    }
}


export default Simulation;