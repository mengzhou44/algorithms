function firstNonrepeated(str) {
    let map = new Map()
    for(let c of  str) {
       if (!map.has(c)) {
          map.set(c, 0)
       }
       map.set(c,map.get(c)+1)
    }
    for(let c of str) {
       if (map.get(c) === 1) {
          return c 
       }
    }

    throw new Error('not found!')
}


let str= 'a green apple'
console.log(firstNonrepeated(str))