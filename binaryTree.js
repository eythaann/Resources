class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }

  getRoot() {
    return this.root.value;
  }

  addValue(value) {
    this.root.addValue(value);
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }

  addValue(value) {
    if (!value) {
      this.value = value;
    } else if (!this.left) {
      this.left = new Node(value);
    } else if (!this.right) {
      this.right = new Node(value);
    } else if (!this.left.left || !this.left.right) {
      this.left.addValue(value);
    } else if (!this.right.right || !this.right.right) {
      this.right.addValue(value);
    } else {
      this.left.addValue(value);
    }
  }
}

let arbolito = new BinaryTree();

let data = Array(20);
for (let i = 0; i < data.length; i++) {
  arbolito.addValue(i);
}

console.log(JSON.stringify(arbolito));
