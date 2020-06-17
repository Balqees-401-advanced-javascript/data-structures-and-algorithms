
class BinaryTree {

    constructor(root) {
        this.root = root;
    }

    preOrder() {
        let results = [];

        let _walk = (node)=> {
            if(node.value )
            results.push(node.value);
            if(node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }

        _walk(this.root);

   let newArray = 0;

        for (let i =0 ; i<results.length ; i++){
                if ((results[i] % 2) === 1 ){
                    newArray= newArray+ (results[i]);
                }
        }
        return newArray;
    }
  
}

module.exports = BinaryTree;