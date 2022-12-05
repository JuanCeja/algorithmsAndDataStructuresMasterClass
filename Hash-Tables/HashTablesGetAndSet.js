class HashTable {
    // if size isn't provided we use default size of 53 which is a PRIME NUMBER
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        // our variables
        let total = 0;
        let WEIRD_PRIME = 31;

        // loop through our word and generate a hash value
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        // return our hash value
        return total;
    }

    set(key, value) {
        // accepts a key and a value

        // hash the key

        // stores the key-value pair in the hash table array via separate chaining
    };

    get(key) {
        // accepts a key

        // hashes the key

        // retrieves the key-value pair in the hash table
    };
}