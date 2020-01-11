class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(element) {
        let node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
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
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
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

    findIndex(element) {
        let current = this.head
        let index = -1
        while (current) {
            index++
            if (current.element == element) {
                return index
            }
            current = current.next
        }
        return -1
    }

    remove(element) {
        let index = this.findIndex(element)
        return this.removeAt(index)
    }

    isEmpty() {
        return !this.length
    }

    size() {
        return this.length
    }

    toString() {
        let current = this.head
        let string = 'head-'
        while (current) {
            string += `${current.element}-`
            current = current.next
        }

        return string
    }
}

module.exports = {
    Node,
    LinkedList
}

// const linkedList = new LinkedList()

// console.log(linkedList)
// linkedList.append(2)
// linkedList.append(6)
// linkedList.append(24)
// linkedList.append(152)

// linkedList.insert(3, 18)
// console.log(linkedList)
// console.log(linkedList.findIndex(24))
// console.log(linkedList.toString())

