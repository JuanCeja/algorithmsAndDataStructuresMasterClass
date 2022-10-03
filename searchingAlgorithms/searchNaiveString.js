function naiveSearch(long, short) {
    // create counter variable 
    let count = 0;
    
    // loop through our long string
    for(let i = 0; i < long.length; i++) {

        // loop through our short string
        for(let j = 0; j < short.length; j++) {
            
            // if our current iteration does not match move on to our next element in our long string 
            if(short[j] !== long[i + j]) break;

            // if j is equal to our short string length increase count because we have a match
            if(j === short.length - 1) count++;
        }
    }

    // after our loop finishes return count
    return count;
}

console.log(naiveSearch('lorie loled', 'lol'));