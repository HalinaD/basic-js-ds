const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.aroot = null;
  } 

  root() {
    return this.aroot? this.aroot : null;
  }

  add(data) {
    this.aroot = addWithin(this.aroot, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.aroot, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }










  find(data) {
    return findElem(this.aroot, data);
    function findElem(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ? 
        findElem(node.left, data) : 
        findElem(node.right, data);
    }
  }
remove(data) {
    this.aroot = removeNode(this.aroot, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;

      }
    }
  }

  min() {
    if (!this.aroot) {
      return;
    }
    let node = this.aroot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.aroot) {
      return;
    }
    let node = this.aroot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}



module.exports = {
  BinarySearchTree
};
