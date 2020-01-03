function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true
  } else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
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
