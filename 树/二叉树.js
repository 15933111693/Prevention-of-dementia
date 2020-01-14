class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    // 中序遍历 左侧子节点 => 节点本身 => 右侧子节点
    inOrderTraverse(callback) {
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback)
                callback(node.key)
                inOrderTraverseNode(node.right, callback)
            }
        }
        inOrderTraverseNode(this.root, callback)
    }

    // 先序遍历 节点本身 => 左侧子节点 => 右侧子节点
    preOrderTraverse(callback) {
        const preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node.key)
                preOrderTraverseNode(node.left, callback)
                preOrderTraverseNode(node.right, callback)
            }
        }
        preOrderTraverseNode(this.root, callback)
    }

    // 后序遍历 左侧子节点 => 右侧子节点 => 节点本身
    postOrderTraverse(callback) {
        const postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback)
                postOrderTraverseNode(node.right, callback)
                callback(node.key)
            }
        }
        postOrderTraverseNode(this.root, callback)
    }

    min(node){
        const minNode = node => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }

        minNode(node || this.root)
    }

    max(node){
        const maxNode = node => {
            return node ? (node.right ? minNode(node.right) : node) : null
        }

        maxNode(node || this.root)
    }
}