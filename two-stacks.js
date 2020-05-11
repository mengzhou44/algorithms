class TwoStacks {
    constructor() {
        this.data = ['|']
    }

    push1(item) {
        this.data.unshift(item)
    }

    pop1() {
        if (!this.isEmpty1()) {
            return this.data.shift()
        }
        return null 
    }
    push2(item) {
        this.data.push(item)
    }

    pop2() {
        if (!this.isEmpty2()) {
            return this.data.pop()
        }
        return null 
    }

    isEmpty1() {
        return this.data[0] === '|'
    }

    isEmpty2() {
        return this.data[this.data.length - 1] === '|'
    }
}

 let twoStacks= new TwoStacks()
 twoStacks.push1(1)
 twoStacks.push1(2)

 twoStacks.push2(1)
 twoStacks.push2(2)

 console.log(twoStacks.pop1())
 console.log(twoStacks.pop1())

 console.log(twoStacks.pop2())
 console.log(twoStacks.pop2())

 console.log(twoStacks.isEmpty1())
 console.log(twoStacks.isEmpty2())