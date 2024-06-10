

/**
 * implement tree data structure using javascript
 * create a binary tree structure
 */

class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
        }else{

        }
    }
    insertNode(node,newNode){
     if(newNode.value<node.value){
          if(node.left===null){
            node.left = newNode;
          } else{
            this.insertNode(node.left,newNode);
          }
     }else{
        if(node.right===null){
            node.right = newNode;
            this.insertNode(node.right,newNode);
        }
     }
    }
}

//  complete tree data structure ...