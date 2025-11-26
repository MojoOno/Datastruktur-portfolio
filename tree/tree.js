import NodeClass from "./nodeClass.js";
export default class Tree
{
    #_root;

    constructor(node)
    {
        this.#_root = new NodeClass(node);
    }
}