class MyArray {
    constructor() {
        this.data = []
    }

    insert(item) {
        this.data.push(item)
    }

    print() {
        console.log(`[${this.data.join(',')}]`)
    }

    getLength() {
        return this.data.length
    }

    removeAt(index) {
        let temp = []
        for (let i = 0; i < this.data.length; i++) {
            if (i !== index) {
                temp.push(this.data[i])
            }
        }
        this.data = temp
    }

    indexOf(item) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === item) {
                return i
            }
        }
        return -1
    }

    reverse() {
        let result = new MyArray()
        result.data = [...this.data].reverse()
        return result
    }

    max() {
      let max= Number.MIN_SAFE_INTEGER
      for(let num of  this.data) {
         max= Math.max(num, max)
      }
      return max 
    }
}

let array = new MyArray()
array.insert(1)
array.insert(2)
array.insert(3)
array.insert(4)

array.removeAt(1)

array.print()

console.log(array.indexOf(3))

let newArray = array.reverse()
console.log("max", newArray.max())
newArray.print()
