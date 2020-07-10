const findMostOccurringCharacter = (word) => {
  let characterMap = {};

  for (let letter of word) {
    if (characterMap[letter]) {
      characterMap[letter]++;
    } else {
      characterMap[letter] = 1;
    }
  }

  let mostCount = 0;
  let mostChar = "";

  for (let key in characterMap) {
    if (characterMap[key] > mostCount) {
      mostCount = characterMap[key];
      mostChar = key;
    }
  }
  return `${mostChar} : ${mostCount}`;
};

// const start1 = new Date().getTime();
// console.log(findMostOccurringCharacter('antidisestablishmentarianism'));
// const end1 = new Date().getTime();
// console.log('Execution Time : ' + (end1-start1));

const findMostOccurringCharacter2 = (word) => {
  const wordArr = [...word];
  let mostCharacter = "";
  let mostCount = 0;
  let mostTempCount = 1;

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i; j < wordArr.length; j++) {
      if (wordArr[i] == wordArr[j]) {
        mostCount++;
      }

      if (mostCount > mostTempCount) {
        mostTempCount = mostCount;
        mostCharacter = wordArr[j];
      }
    }
    mostCount = 0;
  }

  return `${mostCharacter} : ${mostTempCount}`;
};

const start2 = new Date().getTime();
console.log(findMostOccurringCharacter2("antidisestablishmentarianism"));
const end2 = new Date().getTime();
console.log("Execution Time : " + (end2 - start2));