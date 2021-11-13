import Port from "metamodel/Port/Port";
import Element from "metamodel/Element";

interface SourcePortInterface {
    id: string;
    initialVal: string;
    container: Element;
};

class SourcePort extends Port {
    initialVal: string;

    constructor(initializer: SourcePortInterface) {
        super(initializer.id, initializer.container);
        this.initialVal = initializer.initialVal;
    }
};

export default SourcePort;