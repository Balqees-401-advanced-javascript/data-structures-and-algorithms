'use strict';

function tree_intersection(tree1, tree2) {
  let arr = [];
  tree1 = tree1.preOrder();
  tree2 = tree2.preOrder();
  for (let i = 0; i < tree1.length && i < tree2.length; i++) {
    if (tree2[i] === tree1[i]) arr.push(tree2[i]);
  }
  return arr;
}

module.exports = tree_intersection;




