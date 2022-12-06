class HashTable {
    // if size isn't provided we use default size of 53 which is a PRIME NUMBER. PRIME NUMBERS limit the amount of collisions we have
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
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // otherwise, we just push the key-value pair into the parent array of that index
        this.keyMap[index].push([key, value]);
    };

    get(key) {
        // accepts a key
        // hash the key
        let index = this._hash(key);

        // retrieve the key-value pair in the hash table
        if (this.keyMap[index]) {
            // if something is found at that index we loop through the child array until we find a match for our key
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        // return undefined if nothing is at that index OR if our key isn't found in that index
        return undefined;
    };

    values() {
        // create arr to return all our values
        let valuesArr = [];

        // loop through our parent array
        for (let i = 0; i < this.keyMap.length; i++) {

            // if something exists at the index of the array also loop through the child array
            if (this.keyMap[i]) {

                // loop through our child array
                for (let j = 0; j < this.keyMap[i].length; j++) {

                    // if our value does not exist in our values array, then we push it to our values arr
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        
        // we return our values arr
        return valuesArr;
    };

    keys() {

    };
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('plum', '#DDA0DD');
ht.set('plum', '#DDA0DD');
ht.set('are we done', 'yes');
console.log(ht.get('are we done'));
console.log(ht.values());
