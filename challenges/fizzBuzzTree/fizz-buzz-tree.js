const Node = require('./node');

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
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

// tree = new BinaryTree(one);

class BinaryTree {

    constructor(root) {
        this.root = root;
    }

    preOrder() {
        let results = [];

        let _walk = (node)=> {
            // 1. read TreeNode
            if(node.value )
            results.push(node.value);
            // 2. go Left
            if(node.left) _walk(node.left);
            // 3. go Right
            if (node.right) _walk(node.right);
        }

        _walk(this.root);
        return results;
    }
  
    
}

tree = new BinaryTree(one);
function FizzBuzzTree(tree){
    let _walk = (node)=> {
        
        if(node.value % 5 === 0 && node.value % 3 ===0 ){
            node.value = 'FizzBuzz';
        }
        if (node.value % 5 === 0){
            node.value = 'Buzz';
        }
        else if (node.value % 3 === 0){
            node.value = 'Fizz';
        }
        else {
            node.value = `${node.value}`
        }
        if(node.left) _walk(node.left);
       
        if (node.right) _walk(node.right);
    }
    _walk(tree.root);

    return tree;
}


// console.log('pree', tree.preOrder());
// console.log('fuzzbuzz' ,FizzBuzzTree(tree).preOrder());

module.exports = BinaryTree;