class Set {
    constructor(value) {
        this.items = {}
        if (value) this.items.add(value)
    }

    has(value) {
        return this.items.hasOwnProperty(value)
    }

    add(value) {
        if (!this.has(value)) {
            switch (Object.prototype.toString.call(value)) {
                case '[object Object]':
                    return false
                case '[object Array]':
                    value.flat(Infinity).forEach(k => this.items[value] = value)
                    return true
                default:
                    this.items[value] = value
                    return true
            }
        }
        return false
    }

    remove(value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    get size() {
        return Object.keys(this.items).length
    }

    get values() {
        return Object.keys(this.items)
    }

    union(otherSet) {
        const unionSet = new Set()
        this.values.forEach((v, i) => unionSet.add(this.values[i]))
        otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
        return unionSet
    }

    intersection(...set) {
        const intersectionSet = new Set()
        this.values.forEach((v, i) => {
            if (otherSet.has(v)) {
                intersectionSet.add(v)
            }
        })
        return intersectionSet
    }

    difference(otherSet) {
        const difference = new Set()
        this.values.forEach(k => {
            if (!otherSet.has(k)) difference.add(v)
        })

        return difference
    }

    subset(otherSet) {
        if (this.size > otherSet.size) {
            return false
        } else {
            return !this.values.some(k => !otherSet.has(k))
        }
    }
}