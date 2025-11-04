import StaticArray from "../StaticArray.js";
export default class DynamicArray {


    array;
    _capacity;
    _size;
    // Default capacity is 10.
    constructor (capacity = 10) {
        this._capacity = capacity;
        this.array = new StaticArray(capacity); 
        this._size = 0;
    }

    // ------------- Helper functions -------------
    // Validating index for get/set/remove
    checkIndex(index) 
    {
        // Checks different conditions and throws an exception if triggered
        if(index < 0 || index >= this._capacity || index >= this._size || index > this._size + 1) 
            {
                throw new RangeError("Index out of bounds");
            }
    }

    // Validating index for insert
    checkIndexInsert(index) 
    {
        if (index < 0 || index > this._size) 
            {
                throw new RangeError("Index out of bounds");
            }
    }

    // ------------- Actual Functions -------------
    // Adds an item to the end of the array - If the array is full, the array grows.
    add (item) 
    {
        // If the array is filled, we want to make the array bigger useing the grow()
        if (this._size >= this._capacity) 
            {
                this.grow();
            }

            // We are adding the item to the index of size, and then increasing size by 1 
            this.array.set(this._size, item);
            this._size += 1;
    }

    // Returns the element of the wanted index
    get (index) {
        this.checkIndex(index);
        return this.array.get(index);
    }

    // Replaces element at the wanted index
    set (index, item) 
    {
        this.checkIndex(index);
        this.array.set(index, item);
    }

    // return the number of elements stored in array
    size() 
    {
        return this._size;
    }

    // Returns the current capacity of the array
    capacity() 
    {
        return this._capacity;
    }

    // A function that doubles the capacity of the array when full
    grow() 
    {
        // Updating capacity to be the largest value of either 1 or old capacity * 2
        const newCapacity = Math.max(1, this._capacity * 2);
        // Making new array with the new capacity
        const newArray = new StaticArray(newCapacity);

        // Copying the existing elements into the new array
        for (let i = 0; i < this._size; i++) 
            {
                newArray.set(i, this.array.get(i));
            }

            // Updating and replacing the new array + capacity
            this.array = newArray;
            this._capacity = newCapacity;
    }

    // Insert an element at the given index and shifts elements right as needed
    insert(index, item) 
    {
        this.checkIndexInsert(index);

        // If the array is to small, grow bigger
        if (this._size >= this._capacity) 
            {
                this.grow();
            }

            // Shifts elements right
            for (let i = this._size; i > index; i--) 
                {
                    this.array.set(i, this.array.get(i - 1));
                }
                // Place the new element and update size accordingly
                this.array.set(index, item);
                this._size += 1;
    }

    // Remove an element at the given index, shifts remaining elements left and returns the removed value
    remove(index) 
    {
        this.checkIndex(index);
        const removed = this.array.get(index);
        // shifts elements left to fill gap from removed element
        for (let i = index; i < this._size - 1; i++) 
            {
                this.array.set(i, this.array.get(i + 1));
            }

            // Set the unused slot to undefined and update size
        this.array.set(this._size - 1, undefined);
        this._size -=1;

        return removed;
    }

    // Clear the array
    clear() 
    {
        this.array = new StaticArray()
        this._size = 0;
    }
}