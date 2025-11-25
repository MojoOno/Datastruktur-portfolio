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

    insert(index, data)
    {
        if (index < 0 || index > this.#size)
        {
            throw new RangeError(`index ${index} is invalid`);
        }
        if (index === this.#size)
        {
            return this.addLast(data);
        }
        const node = this.getNode(index);
        this.insertBeforeNode(node, data);
    }

    insertAfter(index, data)
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`Index out of bounds`);
            }
            
        const node = this.getNode(index);
        this.insertAfterNode(node, data);
    }

    insertBefore(index, data)
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`Index out of bounds`);
            }
            
        const node = this.getNode(index);
        this.insertBeforeNode(node, data);
    }

    remove(index)
    {
        if (index < 0 || index >= this.#size)
            {
                throw new RangeError(`Index out of bounds`);
            }

        if (index === 0)
            {
                return this.removeFirst();
            }

        if (index === this.#size - 1)
            {
                return this.removeLast();
            }
        else
            {
                const node = this.getNode(index);
                return this.removeNode(node);
            }
    }

    removeFirst()
    {
        if (this.head === null)
            {
                throw new RangeError(`List is empty`);
            }
        
        const data = this.head.data;

        if (this.#size === 1)
            {
                this.head = null;
                this.tail = null;
                this.#size--;
                return data;
            }

        this.head = this.head.next;
        this.head.prev = null;
        this.#size--;
        return data;
        
    }

    removeLast()
    {
        if (this.tail === null)
            {
                throw new RangeError(`List is empty`);
            }

        const data = this.tail.data;

        if (this.#size === 1)
            {
                this.head = null;
                this.tail = null;
                this.#size--;
                return data;
            }

        this.tail = this.tail.prev;
        this.tail.next = null;
        this.#size--;
        return data;
    }

    clear()
    {
        this.head = null;
        this.tail = null;
        this.#size = 0;
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

    makeLast(node)
    {
        // Sad længe med denne her, men kunne ikke lige greje den oppe i hovedet
    }

    makeFirst(node)
    {
        // Ligeledes med denne her
    }

    removeNode(node)
    {
        if (!node) throw new RangeError('Node is null/undefined');
        if (this.head === null) throw new RangeError('List is empty');

        if (node === this.head) {
            return this.removeFirst();
        }
        if (node === this.tail) {
            return this.removeLast();
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.#size -= 1;
        return node.data;
    }

    swap(nodeA, nodeB)
    {
        // Mit hovede begyndte at koge over da jeg prøvede at lave denne her, så jeg måtte desværre give op
    }
}