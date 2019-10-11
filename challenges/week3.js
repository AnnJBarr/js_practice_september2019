function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  const squaredNums = nums.map(function (num) {
    return Math.pow(num, 2);
  });
  return squaredNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  //if array.length < 2 return str=arr[0]
  //for >=2 each item in turn, capitalise str=str+arr[i]
  let camelStr = words[0];
  if (words.length === 1) {
    return camelStr;
  } else {
    for (i = 1; i < words.length; i++) {
      camelStr = camelStr + (words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
    return camelStr
  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  //array of objects
  // for each item of array get .subjects length and count
  let subjectCount = 0;
  for (i = 0; i < people.length; i++) {
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
  // Your code here!
  let ingredientFound = false;
  for (i = 0; i < menu.length; i++) {
    for (let key in menu[i]) {
      const value = menu[i][key]
      if (key === "ingredients" && value.includes(ingredient)) {
        ingredientFound = true;
      }
    }
  }
  return ingredientFound
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
