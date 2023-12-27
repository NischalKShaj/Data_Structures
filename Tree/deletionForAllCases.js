// ===================> file for showing deletion of nodes in tree <==========================

class Node{
    constructor(value){
        this.value= value
        this.left = null;
        this.right = null;
    }
}
class Binary{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root===null){
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node;
            } else {
                this.insertNode(this.root, node)
            }
        } else {
            if(root.right === null){
                root.right = node;
            } else {
                this.insertNode(this.root, node)
            }
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value){
        
    }
}