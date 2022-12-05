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
        let index = this._hash(key);

        // STORE THE KEY-VALUE PAIR IN THE HASH TABLE ARRAY VIA SEPARATE CHAINING
        // if there is nothing(unoccupied) at the index SET it to an empty array
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // otherwise, we just push the key-value pair into the parent array of that index
        this.keyMap[index].push([key, value]);
    };

    get(key) {
        // accepts a key
        // hashes the key

        // retrieves the key-value pair in the hash table
    };
}

let ht = new HashTable();
ht.set('hello world','goodbye');
ht.set('dogs','are cool');
ht.set('cats','are fine');
ht.set('i love','pizza');
ht.set('hi', 'bye');
ht.set('french', 'fries');
console.log(ht);