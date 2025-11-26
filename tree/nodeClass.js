export default class NodeClass
{
    #parent;
    #childNodes;
    #value;

    constructor(value = null)
    {
        this.#value = value;
        this.#parent = null;
        this.#childNodes = [];
    }

    get parent() {return this.#parent}
    set parent(node) {this.#parent = node;}

    get childNodes() {return this.#childNodes}

    get value(){return this.#value}
    set value(value){this.#value = value;}

    firstChild() 
    {
        if (this.#childNodes.length === 0)
            {
                return null;
            }
        
        return this.#childNodes[0];
    }

    lastChild()
    {
        if (this.#childNodes.length === 0)
            {
                return null;
            }
        const amountOfChildren = this.#childNodes.length;

        return this.#childNodes[amountOfChildren -1];
    }

    hasChildNodes()
    {
        return this.#childNodes.length > 0 ? true : false;
    }

    appendChild(child)
    {
        if (this.#childNodes.includes(child))
            {
                return child;
            }

        this.#childNodes.push(child);
        child.parent = this;

        return child;
    }

    removeChild(child)
    {
        this.#childNodes = this.#childNodes.filter((node) => node !== child);
        child.childNodes.parent = child.parent;
        child.parent = null;
    }

    replaceChild(newChild, oldChild) {}
}