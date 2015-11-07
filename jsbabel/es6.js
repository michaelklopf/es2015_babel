// done with help of https://leanpub.com/understandinges6/read/

function aCondition(condition) {
  if (condition) {
    var blue = "blue"
    let red = "red"
    return blue
  } else {
    blue = "blau" // this line shouldn't be allowed with es6, but is
    red = "rot" // this line is throwing an error as predicted
    return blue
  }
}

console.log(aCondition(true))
console.log(aCondition(false))
