import { strict as assert } from 'assert';
import Grid from './grid.js';

describe('Grid', () => {
  const rows = 3;
  const cols = 4;
  let g;

  beforeEach(() => {
    g = new Grid(rows, cols);
  });

  describe('structure', () => {
    it('reports rows()', () => {
      assert.equal(g.rows(), rows);
    });

    it('reports cols()', () => {
      assert.equal(g.cols(), cols);
    });

    it('reports size()', () => {
      assert.equal(g.size(), rows * cols);
    });
  });

  describe('index mapping', () => {
    it('indexFor({row, col}) maps top-left to 0', () => {
      assert.equal(g.indexFor({ row: 0, col: 0 }), 0);
    });

    it('indexFor({row, col}) maps last cell', () => {
      assert.equal(g.indexFor({ row: rows - 1, col: cols - 1 }), rows * cols - 1);
    });

    it('rowColFor(index) returns correct pair', () => {
      const idx = cols + 2; // second row, third col (0-based)
      const rc = g.rowColFor(idx);
      assert.deepEqual(rc, { row: 1, col: 2 });
    });
  });

  describe('set/get', () => {
    it('sets and gets a value', () => {
      g.set({ row: 1, col: 2 }, 'X');
      assert.equal(g.get({ row: 1, col: 2 }), 'X');
    });

    it('out of bounds get returns undefined (chosen strategy)', () => {
      assert.equal(g.get({ row: 99, col: 99 }), undefined);
    });
  });

  describe('fill', () => {
    it('fills all cells', () => {
      g.fill(7);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          assert.equal(g.get({ row: r, col: c }), 7);
        }
      }
    });
  });

  describe('navigation', () => {
    beforeEach(() => {
      // Put identifiable values
      let v = 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          g.set({ row: r, col: c }, v++);
        }
      }
    });

    it('east returns right neighbor', () => {
      const cell = g.east({ row: 0, col: 0 });
      assert.deepEqual(cell, { row: 0, col: 1, value: g.get({ row: 0, col: 1 }) });
    });

    it('west on first col is undefined', () => {
      assert.equal(g.west({ row: 0, col: 0 }), undefined);
    });

    it('south returns below neighbor', () => {
      const cell = g.south({ row: 0, col: 0 });
      assert.deepEqual(cell, { row: 1, col: 0, value: g.get({ row: 1, col: 0 }) });
    });

    it('north on first row is undefined', () => {
      assert.equal(g.north({ row: 0, col: 0 }), undefined);
    });

    it('nextInRow returns right cell or undefined at end', () => {
      assert.ok(g.nextInRow({ row: 0, col: 0 }));
      assert.equal(g.nextInRow({ row: 0, col: cols - 1 }), undefined);
    });

    it('nextInCol returns below cell or undefined at end', () => {
      assert.ok(g.nextInCol({ row: 0, col: 0 }));
      assert.equal(g.nextInCol({ row: rows - 1, col: 0 }), undefined);
    });
  });

  describe('neighbours', () => {
    it('center cell has 8 neighbours (no wrapping strategy)', () => {
      const list = g.neighbours({ row: 1, col: 1 });
      assert.equal(list.length, 8);
    });

    it('corner cell has 3 neighbours', () => {
      const list = g.neighbours({ row: 0, col: 0 });
      assert.equal(list.length, 3);
    });
  });

  describe('neighbourValues', () => {
    it('returns values matching neighbours length', () => {
      g.fill(1);
      const vals = g.neighbourValues({ row: 1, col: 1 });
      assert.equal(vals.length, 8);
      vals.forEach(v => assert.equal(v, 1));
    });
  });
});