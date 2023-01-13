// Trie Exercise - addWord

// This function should add the given word starting from the given index to the Trie.

// It will be recursive and notify the correct child of this Trie to add the word starting from a later index.

// Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.

// You must mark nodes which are the ends of words so that the words can be reconstructed later.

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
}