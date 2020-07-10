const reverseStringOne = (word) => {
    let reducer = (a,b) => b+a;
    return [...word].reduce(reducer);
};

const reverseStringTwo = (word) => {
    let result = '';
    for(let char of word){
        result = char + result;
    }
    return result;
};

console.log(reverseStringOne('dushantha'));
console.log(reverseStringTwo('dushantha'));
