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

function isLeftBracket(c) {
    return '[{('.includes(c)
}

function isRightBracket(c) {
    return ']})'.includes(c)
}

function isMatched(leftBracket, rightBracket) {
    if (leftBracket === '[' && rightBracket === ']') return true
    if (leftBracket === '{' && rightBracket === '}') return true
    if (leftBracket === '(' && rightBracket === ')') return true

    return false
}

let exp = '[2+3{]*{4+5}}'
console.log(isBalancedExpression(exp))
