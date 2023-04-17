const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }}


class BinarySearchTree {
constructor(){
  this.aroot = null
}
  root() {
    return this.aroot ? this.aroot : null;
  }

  add(value) {
    this.aroot = addWithin(this.aroot, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value > node.value) {
        node.right = addWithin(node.right, value);
      } else {
        node.left = addWithin(node.left, value);  
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.aroot, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ? 
        searchWithin(node.left, value) : 
        searchWithin(node.right, value);
    }
  }

  find( value ) {
    return findElem(this.aroot, value);

    function findElem(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return node;
      }

      return value < node.value?
       findElem(node.left, value):
      findElem(node.right, value);
      
    }
    
  }

  remove(value) {
    this.aroot = removeNode(this.aroot, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
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
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

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

    return node.value;
  }

  max() {
    if (!this.aroot) {
      return;
    }

    let node = this.aroot;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};