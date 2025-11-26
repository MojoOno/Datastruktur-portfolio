import assert from "assert";
import NodeClass from "./nodeClass.js";

describe("NodeClass", function () {
  describe("Basic details", function () {
    it("should construct with value, parent=null and empty childNodes", function () {
      const n = new NodeClass("X");
      assert.equal(n.value, "X");
      assert.equal(n.parent, null);
      assert.ok(Array.isArray(n.childNodes));
      assert.equal(n.childNodes.length, 0);
    });

    it("should have firstChild(), lastChild(), hasChildNodes()", function () {
      const n = new NodeClass("X");
      assert.equal(typeof n.firstChild, "function");
      assert.equal(typeof n.lastChild, "function");
      assert.equal(typeof n.hasChildNodes, "function");

      assert.equal(n.hasChildNodes(), false);
      assert.equal(n.firstChild(), null);
      assert.equal(n.lastChild(), null);
    });

    it("should support value getter/setter", function () {
      const n = new NodeClass("A");
      assert.equal(n.value, "A");
      n.value = "B";
      assert.equal(n.value, "B");
    });
  });

  describe("appendChild()", function () {
    it("should append child, set child's parent and update first/last child", function () {
      const p = new NodeClass("P");
      const a = new NodeClass("A");
      const b = new NodeClass("B");

      p.appendChild(a);
      assert.equal(p.hasChildNodes(), true);
      assert.equal(p.childNodes.length, 1);
      assert.equal(p.firstChild(), a);
      assert.equal(p.lastChild(), a);
      assert.equal(a.parent, p);

      p.appendChild(b);
      assert.equal(p.childNodes.length, 2);
      assert.equal(p.firstChild(), a);
      assert.equal(p.lastChild(), b);
      assert.equal(b.parent, p);
    });

    it("should not add the same child twice", function () {
      const p = new NodeClass("P");
      const a = new NodeClass("A");

      p.appendChild(a);
      p.appendChild(a);
      assert.equal(p.childNodes.length, 1);
      assert.equal(p.childNodes[0], a);
    });
  });

  describe("removeChild()", function () {
    it("should remove a leaf child and clear its parent", function () {
      const p = new NodeClass("P");
      const a = new NodeClass("A");
      const b = new NodeClass("B");

      p.appendChild(a);
      p.appendChild(b);

      p.removeChild(a);
      assert.equal(p.childNodes.length, 1);
      assert.equal(p.childNodes[0], b);
      assert.equal(a.parent, null);
      assert.equal(b.parent, p);
      assert.equal(p.firstChild(), b);
      assert.equal(p.lastChild(), b);
    });

    it("should detach a child with its own subtree intact (height 4)", function () {
      // root -> A -> A1 -> A1a  (height 4 including root)
      const root = new NodeClass("root");
      const A = new NodeClass("A");
      const A1 = new NodeClass("A1");
      const A1a = new NodeClass("A1a");

      root.appendChild(A);   // level 1
      A.appendChild(A1);     // level 2
      A1.appendChild(A1a);   // level 3

      // sanity
      assert.equal(A.parent, root);
      assert.equal(A1.parent, A);
      assert.equal(A1a.parent, A1);

      // remove A from root
      root.removeChild(A);

      // A is detached from root
      assert.equal(A.parent, null);
      assert.equal(root.childNodes.includes(A), false);

      // subtree remains intact under A
      assert.equal(A.childNodes[0], A1);
      assert.equal(A1.parent, A);
      assert.equal(A1.childNodes[0], A1a);
      assert.equal(A1a.parent, A1);
    });
  });

  describe("replaceChild()", function () {
    it("should replace oldChild with newChild in place and update parents", function () {
      const p = new NodeClass("P");
      const a = new NodeClass("A");
      const b = new NodeClass("B");
      const x = new NodeClass("X");

      p.appendChild(a);
      p.appendChild(b);

      // implement replaceChild in nodeClass.js to make this pass
      p.replaceChild(x, a);

      assert.equal(p.childNodes.length, 2);
      assert.equal(p.childNodes[0], x);
      assert.equal(p.childNodes[1], b);
      assert.equal(x.parent, p);
      assert.equal(b.parent, p);
      assert.equal(a.parent, null);
      assert.equal(p.firstChild(), x);
      assert.equal(p.lastChild(), b);
    });
  });
});