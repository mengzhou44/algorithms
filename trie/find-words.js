const Trie = require('./trie')

function findWords(wordList, prefix) {
    let trie = new Trie()
    for (let word of wordList) {
        trie.insert(word)
    }
    
}
