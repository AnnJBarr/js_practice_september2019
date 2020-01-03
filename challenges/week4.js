function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNumbers = nums.filter(number => {
    return number < 1;
  });
  return smallNumbers;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const charNames = names.filter(function (item) {
    if (item[0] === char) {
      return true;
    } else {
      return false;
    }
  });
  return charNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbsFound = words.filter(function (word) {
    const findTo = (word.slice(0, 3));
    if (findTo === "to ") {
      return true
    } else {
      return false
    }
  })
  return verbsFound;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
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
  const userCities = users.map(function (user) {
    const userData = user.data.city.displayName
    return userData
  })
  return userCities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(n => {
    return Math.round(Math.sqrt(n) * 100) / 100
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
  let longestSides = [];
  triangles.forEach(function (triangle) {
    longestSides.push(Math.max(...triangle));
  })
  return longestSides
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
