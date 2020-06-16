
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

   let newArray = 0;

        for (let i =0 ; i<results.length ; i++){
                if (results[i] > newArray){
                    newArray= (results[i]);
                }
        }
        return newArray;
    }
  
    
}

module.exports = BinaryTree;