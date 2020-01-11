const {
    Node,
    LinkedList
} = require('./链表')

class cycleLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(element) {
        let node = new Node(element)
        if (this.head == null) {
            this.head = node
            node.next = this.head
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.next = this.head
        }
        this.length++
    }

    insert(position, element) {
        let node = new Node(element)
        if (position >= 0 && position <= this.length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = node
                node.next = this.head
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                if (position == this.length - 1) {
                    node.next = this.head
                }
            }
            this.length++
            return true
        }
        return false
    }

    removeAt(position) {
        if (position > -1 && position < length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = current.next
                while (current.next) {
                    current = current.next
                }
                current.next = this.head
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }
        return null
    }
}