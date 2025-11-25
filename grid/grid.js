class Grid {
  constructor(rows, cols) {
    this._rows = rows;
    this._cols = cols;
    this._data = new Array(rows * cols); // underlying single array
  }

  rows() {
    // TODO: return number of rows
  }

  cols() {
    // TODO: return number of cols
  }

  size() {
    // TODO: return total number of cells
  }

  indexFor({ row, col }) {
    // TODO: translate row,col to index
  }

  rowColFor(index) {
    // TODO: translate index to {row, col}
  }

  set({ row, col }, value) {
    // TODO: set value at row,col
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