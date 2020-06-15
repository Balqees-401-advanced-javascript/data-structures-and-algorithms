const Node = require('./node');

        
class BinaryTree {

    constructor(root) {
        this.root = root;
    }
    
     breadthFirstTraversal(tree,callback){
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

}

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// tree = new BinaryTree(one);
// // console.log(preOrder(tree))
// tree.breadthFirstTraversal(tree.root , console.log);


module.exports = BinaryTree;