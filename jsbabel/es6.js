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

for (let key in funcs) {
  console.log("The key is " + key)
}

// recommentation: use const for let

// String manipulation:
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}

let exampleString = "😬b"
console.log("length of string is " + exampleString.length)
console.log("is 32 bit string? " + is32Bit(exampleString)) // returns false for "12b"
let exStrPt1 = exampleString.codePointAt(0)
console.log(exStrPt1)
console.log(String.fromCodePoint(exStrPt1))
let exStrPt2 = exampleString.codePointAt(1)
console.log(exStrPt2)
console.log(String.fromCodePoint(exStrPt2))
let exStrPt3 = exampleString.codePointAt(2)
console.log(exStrPt3)
console.log(String.fromCodePoint(exStrPt3))

var searchSubStringTest = "     The World Beyond     "
searchSubStringTest = searchSubStringTest.trim()
console.log(searchSubStringTest)
console.log(searchSubStringTest.startsWith("The"))
console.log(searchSubStringTest.endsWith("d"))
console.log(searchSubStringTest.includes("World"))

console.log(" star wars ".repeat(4))

console.log("end of test")
