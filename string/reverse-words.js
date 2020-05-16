function reverseWords(str) {
    let words = str.split(' ')
    let temp = []
    for (let i = words.length - 1; i >= 0; i--) {
       if (words[i]!=='') {
           temp.push(words[i].trim())
       }
        
    }
    return temp.join(' ')
}


console.log(reverseWords('this is my cup   '))