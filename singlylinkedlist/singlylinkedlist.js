function createNode(data)
    {
        return {data: data, next: null};
    }

export default class SinglyLinkedList {
    head;
    _size;

    constructor(){
        this.head = null;
        this._size = 0;
    }

    printList(){
        let i = 0;
        let cur = this.head;
        while (cur !== null) 
            {
                console.log(`#${i}: data=`, cur.data, 'next=', cur.next ? '[node]' : null)
                cur = cur.next;
                i = i + 1;
            }
        if (i === 0) 
            {
                console.log('List is empty');
            }
    }

    add(data){
        const node = createNode(data)
        if (this.head === null) 
            {
                this.head = node;
                this._size = 1;
                return;
            }

        let cur = this.head;
        while (cur.next !== null) 
            {
                cur = cur.next
            }
            cur.next = node;
            this._size = this._size + 1;
    }

    get(index)
    {
        return this.getNode(index).data;
    }

    getFirst()
    {
        console.log('Data for first node: ' + `${this.head.data}`);
        return this.head.data;
    }

    getLast()
    {
        let cur = this.head;
        while(cur.next !== null) 
            {
                cur = cur.next;
            }
        console.log('Data for last node: ' + `${cur.data}`);
        return cur.data;
    }

    set(index, data)
    {
        const node = this.getNode(index);
        node.data = data;
    }

    insert(index, data)
    {
        if (index < 0 || index > this._size)
            {
            throw new RangeError('Index out of bounds');
            }
        
        if (index === 0)
            {
                const newNode = createNode(data);
                newNode.next = this.head;
                this.head = newNode;
                this._size = this._size + 1;
                return;
            }

        if (index === this._size)
            {
                this.add(data);
                return;
            }

        const prev = this.getNode(index - 1);
        const newNode = createNode(data);
        newNode.next = prev.next;
        prev.next = newNode;
        this._size = this._size + 1;
    }

    remove(index)
    {
        if (index < 0 || index >= this._size)
            {
                throw new RangeError('Index out of bounds')
            }

        if (index === 0) 
            {
                return this.removeFirst();
            }

        const prev = this.getNode(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this._size = this._size - 1;
        return removed.data;
    }

    removeFirst()
    {
        if (this.head === null) 
            {
                return null;
            }

        const removed = this.head;
        this.head = removed.next;
        this._size = this._size - 1;
        return removed.data;
    }

    removeLast()
    {
        if (this.head === null)
            {
                return null;
            }

        if (this.head.next === null)
            {
                const data = this.head.data;
                this.head = null;
                this._size = 0;
                return data;
            }

        let prev = this.head;
        while (prev.next.next != null)
            {
                prev = prev.next;
            }
        const data = prev.next.data;
        prev.next = null;
        this._size = this._size - 1
        return data;
    }

    size()
    {
        let count = 0;
        let cur = this.head;
        while (cur !== null) 
            {
                count++;
                cur = cur.next;
            }
            this._size = count;
            console.log('Size: ' + `${count}`);
            return count;
    }

    clear()
    {
        this.head = null;
        this._size = 0;
    }

    getNode(index)
    {
        if (index < 0 || index > this._size) 
            {
                throw new RangeError("Index out of bounds")
            }
        let cur = this.head;
        let i = 0;

        while(i<index)
            {
                cur = cur.next;
                i++;
            }
            console.log('Found node: ' + `${cur.data}`);
            
        return cur;
    }

    getFirstNode()
    {
        console.log('First node: ' + `${this.head}`);
        return this.head;
    }

    getLastNode()
    {
        let cur = this.head;
        while (cur.next !== null) 
            {
                cur = cur.next;
            }
        console.log('Last node: ' + `${cur}`);
        return cur;
    }

    getNextNode(node)
    {
        if (!node) {
            return null;
        }

        let cur = this.head;
        while (cur !== null) 
            {
                if (cur === node)
                    {
                        console.log('The next node is: ' + `${node.next}`);
                        return node.next;
                    }
            console.log('The next node is: ' + `${cur.next}`);
            cur = cur.next;
            }
        return null;
    }

    getPreviousNode(node)
    {
        if (!node || this.head === null || node === this.head) return null;

        let cur = this.head;
        while (cur !== null && cur.next !== null)
            {
                if (cur.next === node) 
                    {
                        console.log('The previous node is: ' + `${cur}`);
                        return cur;
                    }
                    cur = cur.next;
            }
        return null;
    }

    insertBefore(node, data)
    {
        if (!node) 
            {
                throw new RangeError('Node is null/undefined');
            }
        if (node === this.head)
            {
                const newNode = createNode(data);
                newNode.next = this.head;
                this.head = newNode;
                this._size = this._size + 1;
                return;
            }
        
        const prev = this.getPreviousNode(node);
        if (prev === null)
            {
                throw new RangeError('Node not found in list');
            }
        const newNode = createNode(data);
        newNode.next = prev.next;
        prev.next = newNode;
        this._size = this._size + 1;
        
    }

    insertAfter(node, data)
    {
        if (!node)
            {
                throw new RangeError('Node is null/undefined')
            }
        const newNode = createNode(data);
        newNode.next = node.next;
        node.next = newNode;
        this._size = this._size + 1;
    }

    removeNode(node)
    {
        if (!node) throw new RangeError('Node is null/undefined');
        if (this.head === null) throw new RangeError('List is empty');

        if (node === this.head) {
            return this.removeFirst();
        }

        const prev = this.getPreviousNode(node);
        if (prev === null) throw new RangeError('Node not found in list');

        prev.next = node.next;
        this._size -= 1;
        return node.data;
    }   
}