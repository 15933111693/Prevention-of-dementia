class HashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static djb2HashCode(key) { 
        let hash = 5381
        for (let codePoint of key) {
            hash = hash * 33 + codePoint.charCodeAt()
        }
        return hash % 1013
    }

    // 修改和增加元素
    put(key, value) {
        const position = HashTable.djb2HashCode(key)
        console.log(`${position} - ${key}`)
        this.table[position] = value
    }

    get(key) {
        return this.table[HashTable.djb2HashCode(key)]
    }

    remove(key) {
        this.table[HashTable.djb2HashCode(key)] = undefined
    }
}
