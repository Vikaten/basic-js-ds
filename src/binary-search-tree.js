const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



class Node {
  constructor(data) {
    this.data = data,
      this.left = null,
      this.right = null
  }

}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  addNewNode(newNode, node) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.addNewNode(newNode, node.left);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.addNewNode(newNode, node.right);
      }
    }
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode == null) {
      this.rootNode = newNode;
    } else {
      this.addNewNode(newNode, this.rootNode);
    }
  }

  has(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (!node) {
      return false;
    }
    if (data > node.data) {
      return this.search(node.right, data);
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data > node.data) {
      return this.findNode(node.right, data);
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return node;
    }
  }

  remove(data) {
    return this.removeNode(this.rootNode, data)
  }

  removeNode(node, data) {
    if (node == null) {
      return node;
    }
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
      
    }
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    else {
      if (node.right == null && node.left == null) {
        return null;
      }
      else if (node.right == null) {
        return node.left;
      }
      else if (node.left == null) {
        return node.right;
      }
      let minNode = this.minNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data)
      return node;
    }
  }

  minNode(node) {
    if (node == null) {
      return node;
    }
    else {
      while (node.left !== null) {
        node = node.left;  
      }
      return node;
    }
  }

  min() {
    let node = this.rootNode;
    if (node == null) {
      return node;
    }
    else {
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    let node = this.rootNode;
    if (node == null) {
      return node;
    }
    else {
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};