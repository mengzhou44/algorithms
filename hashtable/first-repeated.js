function firstRepeated(str) {
     let set = new Set()
     for(let c of str) {
          if (set.has(c)) {
               return c
          }
          set.add(c)
     }
     throw new Error("Not found")
}


console.log(firstRepeated("hello, world!"))