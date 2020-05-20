function isBalanced(str) {
    let stack = []
    for (let c of str) {
        if ('([{'.includes(c)) {
            stack.push(c)
        } else if (')]}'.includes(c)) {
            if (stack.length === 0) {
                return false
            }
            if (!isMatched(stack.pop(), c)) {
                return false
            }
        }
    }

    return stack.length === 0
}

function isBalancedExpression(str) {
    let array = []
    for (let c of str) {
        if (isLeftBracket(c)) {
            array.push(c)
        } else if (isRightBracket(c)) {
            if (array.length === 0) return false

            let temp = array.pop()
            if (!isMatched(temp, c)) {
                return false
            }
        }
    }
    return true
}

function isMatched(left, right) {
    if (left === '(' && right === ')') return true
    if (left === '[' && right === ']') return true
    if (left === '{' && right === '}') return true
    return false
}

console.log(isBalanced('(23+4+ [3*7'))
