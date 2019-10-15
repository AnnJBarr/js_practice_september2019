function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNumsArr = [];
  nums.forEach(function (smallNum) {
    if (smallNum < 1) {
      smallNumsArr.push(smallNum);
    }
  })
  return smallNumsArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let foundNames = [];
  names.forEach(function (firstLetter) {
    if (firstLetter[0] === char) {
      foundNames.push(firstLetter)
    }
  })
  return foundNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbsFound = [];
  words.forEach(function (findTo) {
    //if (findTo[0] === "t" && findTo[1] === "o" && findTo[2] === " ") 
    if (findTo.slice(0, 3).match(/to /)) {
      verbsFound.push(findTo);
    }
  })
  return verbsFound;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let areIntegers = [];
  nums.forEach(function (eachNums) {
    if (Number.isInteger(eachNums)) {
      areIntegers.push(eachNums)
    }
  })
  return areIntegers
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let userCities = []
  users.forEach(function (userData) {
    userCities.push(userData.data.city.displayName)
  })
  return userCities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoots = [];
  nums.forEach(function (n) {
    squareRoots.push(Math.round(Math.sqrt(n) * 100) / 100);
  });
  return squareRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let resultSentences = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str)) {
      resultSentences.push(sentence)
    }
  })
  return resultSentences
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
