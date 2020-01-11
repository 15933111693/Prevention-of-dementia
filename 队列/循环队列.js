const Queue = require('./队列')

class LoopQueue extends Queue{
    constructor(){
        super()
    }
    
    getIndex(index){
        let length = this.items.length
        return index > length ? (index % length) : index
    }

    find(index){
        return this.isEmpty ? this.items[this.getIndex(index)] : null
    }
}
