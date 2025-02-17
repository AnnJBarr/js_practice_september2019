function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * 100 + (originalPrice * vatRate)) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round(originalPrice * 100 - (originalPrice * reduction)) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let mid = str.length / 2;
  if (str.length % 2 === 0) {
    return str[mid - 1].concat(str[mid]);
  } else {
    return str[Math.round(mid) - 1];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reverseWord = word.split("").reverse().join("");
    reversedWords.push(reverseWord);
  }
  return reversedWords
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let key in users) {
    const value = users[key];
    if (value.type === "Linux") {
      count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore = totalScore + scores[i];
  }
  let meanScore = Math.round(totalScore * 100 / scores.length) / 100;
  return meanScore;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let response;
  if ((n % 3 === 0) && (n % 5 === 0)) {
    response = "fizzbuzz";
  } else {
    if (n % 5 === 0) {
      response = "buzz";
    } else {
      if (n % 3 === 0) {
        response = "fizz";
      } else {
        response = n;
      }
    }
  }
  return response
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
