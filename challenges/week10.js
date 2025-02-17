/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  const result = null;
  let total = 0;
  if (typeof (n) === "number") {
    const numberToString = n.toString().replace(/[.]/g, '');
    for (let i = 0; i < numberToString.length; i++) {
      total = total + parseFloat(numberToString[i]);
    }
    return total;
  }
  return result;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  const range = [];
  if (step === undefined) {
    step = 1;
  }
  if ((step > 0 && start > end) || (step < 0 && end > start) || step === 0) {
    return "it is not possible to create a range with these parameters"
  }
  if (step < 0) {
    for (let i = start; i >= end; i = i + step) {
      range.push(i);
    }
  }
  for (let i = start; i <= end; i = i + step) {
    range.push(parseFloat(i.toPrecision(3)));
  }
  return range
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const alertedUsers = []
  users.forEach(x => {
    x.screenTime.forEach(y => {
      if (y.date === date) {
        let totalMinutes = 0
        for (let key in y.usage) {
          totalMinutes += y.usage[key]
        }
        if (totalMinutes > 100) {
          alertedUsers.push(x.username)
        }
      }
    })
  })
  return alertedUsers
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr[0] !== '#' || hexStr.length > 7 || !/^[a-f\d #]+$/i.test(hexStr)) throw new Error("your hex string is not in the correct format");
  const hexToDec = str => {
    switch (str.toUpperCase()) {
      case '0': return 0
      case '1': return 1
      case '2': return 2
      case '3': return 3
      case '4': return 4
      case '5': return 5
      case '6': return 6
      case '7': return 7
      case '8': return 8
      case '9': return 9
      case 'A': return 10
      case 'B': return 11
      case 'C': return 12
      case 'D': return 13
      case 'E': return 14
      case 'F': return 15
    }
  }
  const twoDig = num => {
    return (hexToDec(num[0])) * 16 + hexToDec(num[1])
  }
  return ("rgb(" + twoDig(hexStr.slice(1, 3)) + ',' + twoDig(hexStr.slice(3, 5)) + ',' + twoDig(hexStr.slice(5, 7)) + ")")
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  const checkBoard = (board) => {
    let noughtCrossBoard = true
    board.forEach(line => {
      if (line.length !== 3) { noughtCrossBoard = false }
    })
    return noughtCrossBoard
  }
  if (board.length < 3 || checkBoard(board) === false) throw new Error("this is not a valid noughts and crosses board!")
  const sameCaseBoard = board.map(function (line) {
    return line.map(function (playItem) {
      if (playItem !== null) {
        return playItem.toUpperCase()
      } else {
        return null
      }
    })
  })
  switch (true) {
    case sameCaseBoard[0][0] === sameCaseBoard[0][1] && sameCaseBoard[0][0] === sameCaseBoard[0][2] && sameCaseBoard[0][0] !== null:
    case sameCaseBoard[0][0] === sameCaseBoard[1][0] && sameCaseBoard[0][0] === sameCaseBoard[2][0] && sameCaseBoard[0][0] !== null:
    case sameCaseBoard[0][0] === sameCaseBoard[1][1] && sameCaseBoard[0][0] === sameCaseBoard[2][2] && sameCaseBoard[0][0] !== null: return sameCaseBoard[0][0]
    case sameCaseBoard[1][0] === sameCaseBoard[1][1] && sameCaseBoard[1][0] === sameCaseBoard[1][2] && sameCaseBoard[0][0] !== null: return sameCaseBoard[1][0]
    case sameCaseBoard[2][0] === sameCaseBoard[2][1] && sameCaseBoard[2][0] === sameCaseBoard[2][2] && sameCaseBoard[0][0] !== null:
    case sameCaseBoard[0][2] === sameCaseBoard[1][1] && sameCaseBoard[0][2] === sameCaseBoard[2][0] && sameCaseBoard[0][0] !== null: return sameCaseBoard[2][0]
    case sameCaseBoard[0][1] === sameCaseBoard[1][1] && sameCaseBoard[0][1] === sameCaseBoard[2][1] && sameCaseBoard[0][0] !== null: return sameCaseBoard[0][1]
    case sameCaseBoard[0][2] === sameCaseBoard[1][2] && sameCaseBoard[0][2] === sameCaseBoard[2][2] && sameCaseBoard[0][0] !== null: return sameCaseBoard[0][2]
    default: return null
  }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
