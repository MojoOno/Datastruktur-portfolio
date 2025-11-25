export default class Stack
{
    _head;
    _size;

    constructor()
    {
        this._head = null;
        this._size = 0;
    }

    createNode(data)
    {
        return {data: data, next: null}
    }

    size()
    {
        return this._size;
    }

    peek()
    {
        if (this._head === null)
            {
                throw new RangeError("List is empty");
            }
        return this._head.data;
    }
    
    push(data)
    {
        if (this._head === null)
            {
                this._head = this.createNode(data);
                this._size++;
                return;
            }

        const newNode = this.createNode(data);
        newNode.next = this._head;
        this._head = newNode;
        this._size++;
    }

    pop()
    {
        if (this._head === null)
            {
                throw new RangeError("List is empty")
            }
        
        const nodeToReturn = this._head;
        this._head = this._head.next;
        this._size--;
        return nodeToReturn.data;
    }

    get(index)
    {
        if (index >= this._size)
        {
            throw new RangeError("Index out of bounds")
        }

        let currentNode = this._head;
        for(let i = 0; i < index; i++)
            {
                currentNode = currentNode.next;
            }

        return currentNode.data;
    }

}