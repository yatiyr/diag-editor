import Port from "metamodel/Port/Port";
import Element from "metamodel/Element";

interface TargetPortInterface {
    id: string;
    container: Element;
};

class TargetPort extends Port {

    constructor(initializer: TargetPortInterface) {
        super(initializer.id, initializer.container);
    }

}

export default TargetPort;