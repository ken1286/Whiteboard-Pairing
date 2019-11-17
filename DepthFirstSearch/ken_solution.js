class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }

  dft(searchNode, callback) {
    const stack = [];
    stack.push(searchNode);
    const visited = {};

    while (stack.length > 0) {
      let node = stack.pop();

      if (!(node in visited)) {
        visited[node] = [node.value, node.left, node.right];
        callback(node);
        if (node.left) {
          stack.push(node.left);
          this.dft(node.left, callback);
        }
        if (node.right) {
          stack.push(node.right);
          this.dft(node.right, callback);
        }
      }
    }
  }
}

const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = x => console.log(x.value);

root.dft(root, cb); // should print 6 10 9 18 89
console.log();
// iterativeDepthFirstForEach(root, cb);  // should print 6 10 9 18 89
// console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

root.dft(root, cb); // should print 6 10 9 15 18 0 89
console.log();
// iterativeDepthFirstForEach(root, cb);  // should print 6 10 9 15 18 0 89
// console.log();
