const Node = require('./node');


class BinaryTree {

  constructor(root) {
    this.root = root;
  }

  breadthFirstTraversal(tree, callback) {
    if (tree == null) {
      return;
    }
    let queue = [tree]

    while (queue.length > 0) {
      let item = queue.shift()
      let value = item.value
      callback(value)

      if (item.left == null && item.right == null) {
        continue
      }
      if (item.left != null) {
        queue.push(item.left)
      }
      if (item.right != null) {
        queue.push(item.right)
      }
    }
  }

  corner() {
    console.log(this.root);
    let array = [];
    let queue = [];
    let x = 0;
    let y = 0;
    array.push(this.root.value);
    console.log(this.root.value);
    queue.push(this.root);

    let _bredth = (node) => {
      console.log(node.value);
      console.log(queue);
      let r = queue.shift();
      console.log(r.value);
      if (r.left) {
        queue.push(r.left);
        // _bredth(node.left);
        if (r.right) {
          queue.push(r.right);
          // _bredth(node.right);
        }
        console.log(r.value);
        x = queue[0];
        console.log(x.value);
        array.push(x.value);
        y = queue[queue.length - 1];
        console.log(y.value);
        array.push(y.value);
        _bredth(r);
      }
    }
    _bredth(this.root);
    console.log(array);
    return array;
  }

  
findPath(pathSum) {
    let bool = false;
    let _walk = (node, sum) => {
      if (node.left) {
        _walk(node.left, sum + node.left.value);
      }
      if (node.right) {
        _walk(node.right, sum + node.right.value);
      }
      if (!node.left && !node.right && sum === pathSum) {
        bool = true;
      }
    };
    _walk(this.root, this.root.value);
    return bool;
  }







  breadthFirstRecursion() {
    let queue = [];
    let output = [];
    queue.push(this.root);
    let _zaymabdk = (node) => {
      let currentNode = queue.shift();
      output.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (queue.length > 0) {
        _zaymabdk(queue[0]);
      }
    };
    _zaymabdk(this.root);
    return output;
  }

  hight() {
    let counter = 1;
    let hight = 0;
    let _rec = (node) => {
      if (node.left) {
        counter++;
        _rec(node.left);
      }
      if (node.right) {
        counter++;
        _rec(node.right);
      }
      if (hight < counter) {
        hight = counter;
      }
      counter--;
    }
    _rec(this.root);
    console.log(hight);
    return hight;
  }

  cusins(value1, value2) {
    let counter = 1;
    let level = 0;
    let parent = 0;
    let level1 = 0;
    let parent1 = 0;
    if (this.root.value === value1 || this.root.value === value1) {
      return false;
    }
    let _rec = (node) => {
      if (node.left) {
        counter++;
        if (node.left.value === value1 || node.left.value === value2) {
          if (level !== 0) {
            level1 = counter;
            parent1 = node.value;
          }
          else {
            level = counter;
            parent = node.value;
          }
        }
        _rec(node.left);
      }
      if (node.right) {
        counter++;
        if (node.right.value === value1 || node.right.value === value2) {
          if (level !== 0) {
            level1 = counter;
            parent1 = node.value;
          }
          else {
            level = counter;
            parent = node.value;
          }

        }
        _rec(node.right);
      }
      counter--;
    }
    _rec(this.root);
    console.log(level, level1, parent, parent1);
    if (level === level1 && parent !== parent1) {
      return true;
    }
    else return false;
  }




};

function identicalTree(tree1, tree2) {
  let rowaid = true;
  let _preOrder = (node, node1) => {
    if (node !== null && node1 !== null) {
      if (node.value === node1.value) {
        if (node.left) {
          _preOrder(node.left, node1.left);
        }
        if (node.right) {
          _preOrder(node.right, node1.right);
        }
      }
      else rowaid = false;
    }
    else rowaid = false;
  }
  _preOrder(tree1.root, tree2.root);
  return rowaid;
}



function mergedTree(tree1, tree2) {
  if (tree1.root === null && tree2.root === null) {
    return 'Hello';
  }
  if (tree1.root === null) {
    return tree2;
  }

  if (tree2.root === null) {
    return tree1;
  }

  let _traverse = (node1, node2) => {

    if (node1 === null && node2 === null) {
      return null;
    }

    if (node1 && node2 == null) {
      return node1;
    }

    if (node2 && node1 == null) {
      return node2;
    }
    node1.value = node1.value + node2.value;
    node1.left = _traverse(node1.left, node2.left);
    node1.right = _traverse(node1.right, node2.right);
    return node1;
  }

  _traverse(tree1.root, tree2.root);
  return tree1;


}

function mirror(tree1, tree2) {
  let value = true;
  if (tree1.root === null || tree2.root === null) {
    return false
  }
  let _traverse = (node1, node2) => {
    console.log(node1.value);
    console.log(node2.value);
    if(node1 === null){
      console.log('hiiiii');
    }
    if(node2 === null){
      console.log('hiiiii');
    }
    if (node1.value === node2.value) {
      if (node1 && node2 ===null){
        console.log('gg');
          return value = false;
      }
      if (node2 && node1 ===null){
        console.log('gg');
         return value = false;
      }
      if (node1.value == node2.value){ 
                  if(node1.left === null && node2.right !==null){
                    value=false;
                  }
                  if(node1.left !== null && node2.right ===null){
                    value=false;
                  }
                  console.log(node1.left);
                  console.log(node2.right);
                  _traverse(node1.left,node2.right);
       
                  _traverse(node1.right,node2.left);

       
}
else value = false;

    }
    else value = false;
  }
  _traverse(tree1.root, tree2.root);
  return value;


}




let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = six;
two.left = three;
// two.right = seven;
// three.right = nine;
// three.left = eight;



let one1 = new Node(1);
let two1 = new Node(2);
let three1 = new Node(3);
let four1 = new Node(4);
let five1 = new Node(5);
let six1 = new Node(6);
let seven1 = new Node(7);
let eight1 = new Node(8);
let nine1 = new Node(9);

one1.left = six1;
one1.right = two1;
// two1.left = six1;
// two1.right = seven1;
// three1.right = nine1;
// three1.left = eight1;
// six.left=eight;
// eight.left=five;
// eight.right=five;
// five.right=four;

// console.log(tree.corner());
// console.log(tree.cusins(9, 8));
// console.log(tree.hight());
// console.log(identicalTree(tree, tree1));
tree = new BinaryTree(one);
tree1 = new BinaryTree(one1);
let rowaid = mirror(tree, tree1);
console.log(rowaid);
// console.log(rowaid.root);

// tree = new BinaryTree(one);
// tree1 = new BinaryTree(one1);
// console.log(mergedTree(tree, tree1).root);
module.exports = BinaryTree;