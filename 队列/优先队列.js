const Queue = require('./队列')

class PriorityQueue extends Queue{
    constructor(){
        super()
    }
    enqueue(element, priority){
        let queueElement = {element, priority}
        if(this.isEmpty){
            this.items.push(queueElement)
        }else{
            let preIndex = this.items.findIndex(item => queueElement.priority < item.priority)
            if(preIndex > -1){
                this.items.splice(preIndex, 0, queueElement)
            }else{
                this.items.push(queueElement)
            }
        }
    }

}

let a = new PriorityQueue()
a.enqueue(1,2)
a.enqueue(2,2)
a.enqueue(3,3)
a.enqueue(4,4)
a.print()