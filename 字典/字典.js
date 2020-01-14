class Dictionary {

    constructor() {
        this.item = {}
    }

    set(key, value) {
        this.item[key] = value
    }

    get(key) {
        return this.item[key]
    }

    remove(key) {
        delete this.item[key]
    }

    get keys() {
        return Object.keys(this.items)
    }

    get values() {
        return Object.values(this.items)
    }
}

