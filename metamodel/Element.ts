import Port from 'metamodel/Port/Port';
import Simulation from 'metamodel/Simulation';
import ContainerNode from 'metamodel/Node/ContainerNode';

interface ElementInitializer {
    id: string;
    name: string;
    style: string;
    ports: Port[];
    container: Simulation | ContainerNode;
};

class Element {

    id: string;
    name: string;
    style: string;

    ports: Port[];

    container: Simulation | ContainerNode;
    
    constructor(initializer : ElementInitializer) {
        this.id = initializer.id;
        this.name = initializer.name;
        this.style = initializer.style;
        this.ports = initializer.ports;
        this.container = initializer.container;
    }

};

export default Element;