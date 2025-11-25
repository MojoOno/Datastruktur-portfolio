class Grid {
  constructor(rows, cols) {
    this._rows = rows;
    this._cols = cols;
    this._data = new Array(rows * cols); // underlying single array
  }

  rows() {
    return this._rows;
  }

  cols() {
    return this._cols;
  }

  size() {
    return this._data.length;
  }

  indexFor({ row, col }) {
    return row * this._cols + col;
  }

  rowColFor(index) {
   const row = Math.floor(index / this._cols);
   const col = index - row * this._cols;
   return { row, col };
  }

  set({ row, col }, value) {
    const index = this.indexFor({row,col});
    this._data[index] = value;
    return value;

  }

  get({ row, col }) {
    // TODO: get value at row,col
  }

  fill(value) {
    // TODO: fill all cells with value
  }

  neighbours({ row, col }) {
    // TODO: return list of neighbour {row, col} objects
  }

  neighbourValues({ row, col }) {
    // TODO: return list of neighbour values
  }

  nextInRow({ row, col }) {
    // TODO: return cell to the right or undefined
  }

  nextInCol({ row, col }) {
    // TODO: return cell below or undefined
  }

  north({ row, col }) {
    // TODO: return cell above or undefined
  }

  south({ row, col }) {
    // TODO: return cell below or undefined
  }

  west({ row, col }) {
    // TODO: return cell to the left or undefined
  }

  east({ row, col }) {
    // TODO: return cell to the right or undefined
  }
}

export default Grid;