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
  //console.log(busPeople);
  let roundedNum = Math.round(busPeople);
  //console.log(roundedNum);
  let busesReq;
  if (roundedNum < busPeople) {
    busesReq = roundedNum + 1;
    return busesReq
    //console.log(busesReq);
  } else {
    busesReq = roundedNum;
    //console.log(busesReq);
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
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
