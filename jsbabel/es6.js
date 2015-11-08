// done with help of https://leanpub.com/understandinges6/read/

function aCondition(condition) {
  if (condition) {
    var blue = "blue"
    let red = "red"
    let blue = "BLAU"
    return blue
  } else {
    blue = "blau" // this line shouldn't be allowed with es6, but is
    //red = "rot" // this line is throwing an error as predicted
    return blue
  }
}

console.log(aCondition(true))
console.log(aCondition(false))

// let vs Swift let
let colorBlack = "Black"
colorBlack = "Blue" // does not behave like the Swift let
console.log(colorBlack)

// const is the Swift let analogue
const RED = "red"
console.log(RED)

// objects as const with editable attributes
const address = {
  street: "Main Street",
  countryCode: "12345"
}

address.street = "Side Street"
address.countryCode = "54321"

console.dir(address)

// better loop
for (let i = 0; i < 3; i++) {
  console.log(i)
}

var funcs = []
for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs.forEach(function(func) {
  func()
})

funcs = []
for (let i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs.forEach(function(func) {
  func()
})
