function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squaredNums = nums.map(function (num) {
    return Math.pow(num, 2);
  });
  return squaredNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelStr = words[0];
  if (words.length === 1) {
    return camelStr;
  } else {
    for (let i = 1; i < words.length; i++) {
      camelStr = camelStr + (words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
    return camelStr
  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectCount = 0;
  for (let i = 0; i < people.length; i++) {
    for (let key in people[i]) {
      const value = people[i][key]
      if (key === "subjects") {
        subjectCount = subjectCount + value.length
      }
    }
  }
  return subjectCount
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientFound = false;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      ingredientFound = true;
    }
  }
  return ingredientFound
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const compareArray = arr1.filter(element => arr2.includes(element))
  compareArray.sort((a, b) => a - b);
  const uniqueSet = new Set(compareArray)
  const resultArr = [...uniqueSet]
  return resultArr;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
