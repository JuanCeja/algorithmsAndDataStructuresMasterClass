/*
 * Complete the 'mostPoeticalWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING poem as parameter.
 */

// VOWELS: 'a', 'e', 'i', 'o', 'u', 'y'

function mostPoeticalWord(poem) {
    let words = poem.split(' ');
    // [ 'like', 'feeble', 'age' ]

    poeticScore = [];
    
    for(let i = 0; i < words.length; i++){
        let count = 0;
        for(let j = 0; j < words[i].length; j++){
            if('a' === words[i][j]) count++;
            if('e' === words[i][j]) count++;
            if('i' === words[i][j]) count++;
            if('o' === words[i][j]) count++;
            if('u' === words[i][j]) count++;
            if('y' === words[i][j]) count++;
            if('k' === words[i][j]) count--;
            if('x' === words[i][j]) count--;
        }
        poeticScore.push(count);
    }

    return poeticScore;
}

console.log(mostPoeticalWord('like feeble age'));