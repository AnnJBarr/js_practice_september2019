/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      total = total + arr[i];
    }
  }
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  let chars = str.toLowerCase().split('');
  const newArr = chars.filter(function (item) {
    if (item === "c" || item === "g" || item === "t" || item === "a") {
      return false;
    } else {
      return true;
    }
  })
  if (newArr.length > 0) {
    return false
  } else {
    return true
  }
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str) === false) {
    return "your input wasn't valid DNA"
  } else {
    const compDNAStr = (str.toUpperCase().split('').map(function (item) {
      switch (item) {
        case "G":
          return "C";
        case "C":
          return "G";
        case "T":
          return "A";
        case "A":
          return "T";
      }
    })).join('');
    return compDNAStr;
  }
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (Number.isInteger(n) && typeof n === "number" && n > 1) {
    if ((n !== 2 && n % 2 === 0) || (n !== 3 && n % 3 === 0) || (n !== 5 && n % 5 === 0) || (n !== 7 && n % 7 === 0)) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  var array = []
  var matrix = []

  for (let i = 0; i < n; i++) {
    array.push(fill)
  }
  if (n !== 1) {
    for (let i = 0; i < n; i++) {
      matrix.push(array)
    }
  } else {
    matrix = array
  }
  return matrix
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) {
    return false
  }
  if (day.toLowerCase() === "monday" || day.toLowerCase() === "tuesday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "thursday" || day.toLowerCase() === "friday" || day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
    let staffCount = 0
    for (let i = 0; i < staff.length; i++) {
      const lcDays = staff[i].rota.map(function (staffDay) {
        return staffDay.toLowerCase();
      })
      for (let i = 0; i < lcDays.length; i++) {
        if (lcDays[i].includes(day.toLowerCase())) {
          staffCount += 1
        }
      }
    }
    if (staffCount > 2) {
      return true
    } else {
      return false
    }
  } else { return 'please make sure you enter a day' }
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
