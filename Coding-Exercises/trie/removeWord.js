// Trie Exercise - removeWord

// Write a function called removeWord which accepts a string and removes the word from the Trie. addWord is implement to help you test the function.

// ============================================================================================================================================================================================

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            let char = word[index];
            let subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    removeWord(word) {

        let toRemove = [];
        let current = this;
        for (let i = 0; i < word.length; i++) {
            if (current.characters[word[i]]) {
                toRemove.push(current);
                current = current.characters[word[i]];
            }
        }
        for (let i = toRemove.length - 1; i >= 0; i--) {
            if (i == toRemove.length - 1 &&
                Object.values(toRemove[i].characters[word[i]].characters).length) {
                toRemove[i].characters[word[i]].isWord = false;
                break;
            }
            delete toRemove[i].characters[word[i]];
            if (Object.values(toRemove[i].characters).length) {
                break;
            }
        }
    }
}