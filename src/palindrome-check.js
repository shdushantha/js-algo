const palindromeCheck = word => {
    const array = word.toLowerCase().split('');

    let result = array.every((letter,index) => {
        return (letter === array[array.length - 1 - index]);
    });

    return result;
};

console.log(palindromeCheck('civic'));

const palindromeCheck2 = word => {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
};

console.log(palindromeCheck2('civic'));