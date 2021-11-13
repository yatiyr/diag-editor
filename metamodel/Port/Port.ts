import Element from "metamodel/Element";

class Port {
    id: string;
    container: Element;

    constructor(id: string, container: Element) {
        this.id = id;
        this.container = container;
    }
};

export default Port;