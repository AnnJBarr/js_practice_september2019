const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let nextNum = null;
  for (let i = 0; i < (nums.length); i++) {
    if (nums[i] === n && (i + 1) < nums.length) {
      return nums[i + 1]
    }
  }
  return nextNum
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var arrayObj = { 1: (([...str].filter(char => char === "1")).length), 0: (str.length - ([...str].filter(char => char === "1")).length) };
  return arrayObj
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
