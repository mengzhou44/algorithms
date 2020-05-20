function reverse(str) {
    let stack =[]
    for(let c of str) {
       stack.push(c)
    }
    let result = []
    while(stack.length>0){
       result.push(stack.pop())
    }

    return result.join('')
}

console.log(reverse("ABCD"))