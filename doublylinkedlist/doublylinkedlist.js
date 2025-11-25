export default class DoublyLinkedList
{
    head;
    tail;
    #size;

    constructor ()
    {
        this.head = null;
        this.tail = null;
        this.#size = 0;
        
    }

    createNode (data)
    {
        return {data: data, next: null, prev: null}
    }

    size () 
    {
        return this.#size;
    }

    printList ()
    {
        let currentNode = this.head;
        for (let i = 0; i < this.#size; i ++)
            {
                console.log(`${currentNode.data}`)
                currentNode = currentNode.next;
            }
    }

    addLast (data) 
    {
        if (this.tail === null ) 
            {
                this.head = this.createNode(data);
                this.tail = this.head;
                this.#size++;
                return;
            }

        const newNode = this.createNode(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.#size++;
    }

    addFirst(data)
    {
        if (this.head === null)
            {
                this.head = this.createNode(data);
                this.tail = this.head;
                this.#size++;
                return;
            }

        const newNode = this.createNode(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.#size++;
    }

    // ---------- Missing data-level methods (stubs) ----------

    insert(index, data)
    {
        // TODO: insert new node before node at index
    }

    insertAfter(index, data)
    {
        // TODO: insert new node after node at index
    }

    insertBefore(index, data)
    {
        // TODO: insert new node before node at index
    }

    remove(index)
    {
        // TODO: remove node at index and return its data
    }

    removeFirst()
    {
        // TODO: remove first node and return its data
    }

    removeLast()
    {
        // TODO: remove last node and return its data
    }

    clear()
    {
        // TODO: remove all nodes (set head/tail to null and size to 0)
    }

    set(index, data) 
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`index ${index} is invalid`);
            }

        let currentNode = this.head;
        for (let i = 0; i < this.#size; i++)
            {
                if (i === index)
                {
                    currentNode.data = data;
                    return;
                }

                currentNode = currentNode.next;
            }
    }

    getFirstNode()
    {
        return this.head;
    }

    getLastNode()
    {
        return this.tail;
    }

    getNode(index)
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`index ${index} is invalid`);
            }

        let currentNode = this.head;
        for (let i = 0; i < index; i++)
            {
                currentNode = currentNode.next;
            }
            
            return currentNode;
    }

    getFirst()
    {
        return this.head.data;
    }

    getLast()
    {
        return this.tail.data;
    }

    get (index) 
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`index ${index} is invalid`);
            }

        let currentNode = this.head;
        for (let i = 0; i < index; i++)
            {
                currentNode = currentNode.next;
            }
        return currentNode.data;
    }

    getNextNode(node)
    {
        return node.next;
    }

    getPreviousNode(node)
    {
        return node.prev;
    }

    insertAfterNode(node, data) 
    {
        if (this.tail === node)
            {
                return this.addLast(data);
            }

        const newNode = this.createNode(data);
        newNode.prev = node;
        newNode.next = node.next;
        node.next = newNode;
        newNode.next.prev = newNode;
        this.#size++;
    }

    insertBeforeNode(node, data)
    {
        if (this.head === node)
            {
                return this.addFirst(data);
            }
        const newNode = this.createNode(data);
        newNode.next = node;
        newNode.prev = node.prev;
        node.prev = newNode;
        newNode.prev.next = newNode;
        this.#size++;
    }

    // ---------- Missing node-level methods (stubs) ----------

    makeLast(node)
    {
        // TODO: move node to tail position
    }

    makeFirst(node)
    {
        // TODO: move node to head position
    }

    removeNode(node)
    {
        // TODO: unlink given node and return its data
    }

    swap(nodeA, nodeB)
    {
        // TODO: swap positions of nodeA and nodeB
    }
}