const countVowels = word => {
    const vowels = ['a','e','i','o','u'];
    let vowelCount = 0;

    for(let letter of word.toLowerCase()){
        if(vowels.includes(letter)){
            vowelCount++;
        }
    }
    return vowelCount;
};

const countVowels2 = word => {
    const vowels = ['a','e','i','o','u'];
    let vowelCount = 0;

    for(let letter of word.toLowerCase()){
        if(vowels.indexOf(letter) != -1){
            vowelCount++;
        }
    }
    return vowelCount;

};

let start1 = new Date().getTime();
console.log(countVowels('Aeroplane'));
let end1 = new Date().getTime();
console.log("countVowels execution Time : " + (end1-start1));

let start2 = new Date().getTime();
console.log(countVowels2('Aeroplane'));
let end2 = new Date().getTime();
console.log("countVowels2 execution Time : " + (end2-start2));