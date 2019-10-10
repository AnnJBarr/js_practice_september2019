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
  //console.log(words[0])
  //console.log(words.length)
  if (words.length === 1) {
    //console.log(camelStr);
    return camelStr;
  } else {
    //console.log("array of 2+ items")
    for (i = 1; i < words.length; i++) {
      //console.log(words[i].charAt(0).toUpperCase() + words[i].slice(1));
      camelStr = camelStr + (words[i].charAt(0).toUpperCase() + words[i].slice(1))
      //console.log(camelStr)
    }
    return camelStr
  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
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
