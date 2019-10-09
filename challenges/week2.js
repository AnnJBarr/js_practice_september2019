function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester") {
    return true
  } else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  // 1 bus per 40 people
  let busPeople = people / 40
  let roundedNum = Math.round(busPeople);
  let busesReq;
  if (roundedNum < busPeople) {
    busesReq = roundedNum + 1;
    return busesReq
  } else {
    busesReq = roundedNum;
    return busesReq
  }
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let sheepCount = 0;
  arr.forEach(function (creature) {
    if (creature === "sheep") {
      sheepCount++
    }
  })
  return sheepCount
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  // I originally did the secondChar via a series of OR statements but refactored to ASCII codes as neater
  // Left OR logic in comments to remind myself how I did it
  //let secondChar = person.address.postCode[1];
  if (person.address.postCode[0] === "M") {
    if (person.address.postCode.charCodeAt(1) > 48 && person.address.postCode.charCodeAt(1) < 58)
    //secondChar ==="1" || secondChar ==="2" || secondChar ==="3"|| secondChar ==="4" || secondChar ==="5" || secondChar ==="6" || secondChar ==="7" || secondChar ==="8" || secondChar ==="9") {
    {
      return true
    } else {
      return false
    }

  } else {
    return false
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
