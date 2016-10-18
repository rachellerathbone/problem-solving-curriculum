// Write a function that will allow the following code to work. You only need the addition and subtraction operations:
//
// calc(10)('+')(12) >> 22
// calc(90)('-')(10) >> 80

function calc (num1) {
  return (op) => {
    return (num2) => {
      return op === '+' ? num1 + num2 : num1 - num2
    }
  }
}

console.log('Expect: calc(10)("+")(8) >> 18 ::', calc(10)('+')(8));
console.log('Expect: calc(10)("-")(8) >> 2 ::', calc(10)('-')(8));

// Write a function that takes two numbers. For each number, you'll increase each digit by 1. Then you'll add the two numbers together. For example:
//
// oddAdd(13, 50) >> 24 + 61 >> 85
// oddAdd(49, 16) >> 50 + 27 >> 77

function oddAddition (num1, num2) {
  function oddify (el) {
    let num = parseInt(el)
    return (num + 1 > 9) ? 0 : num + 1
  }

  let newNum1 = parseInt(num1.toString().split('').map(oddify).join(''))
  let newNum2 = parseInt(num2.toString().split('').map(oddify).join(''))

  return newNum1 + newNum2
}

console.log('Expect oddAddition(13, 50) >> 85 ::', oddAddition(13, 50));
console.log('Expect oddAddition(49, 16) >> 77 ::', oddAddition(49, 16));

// Write a function that will allow the following code to work. Assume that the numbers will not be negative and that all strings will not be empty.

// spacer('-', 3)('hello world')('_', 2) >> '---hello world__'
// spacer(' ', 3)('hello world')(' ', 0) >> '   hello world'

function spacer (char1, num1) {
  return (str) => {
    return (char2, num2) => {
      let result = ''

      for (let i = 0; i < num1; i++) {
        result += char1
      }

      result += str

      for (let j = 0; j < num2; j++) {
        result += char2
      }

      return result
    }
  }
}

console.log("Expect: spacer('-', 3)('hello world')('_', 2) >> '---hello world__' ::", spacer('-', 3)('hello world')('_', 2));
console.log("Expect: spacer(' ', 3)('hello world')(' ', 0) >> '   hello world' ::", spacer(' ', 3)('hello world')(' ', 0));


// Write a function called `deal` which will evenly and randomly split an array into multiple new arrays. For example:
//
// deal([1,2,3,4], 2) >> [[1,4], [2,3]]
// deal(['10C','9C','10H','3S','9D','KH'], 3)
// >> [['10C','3S'],['KH','9D'],['9C','10H']]

function deal (arr, groups) {
  arr.forEach((el, i, arr) => {
    let rand = Math.floor(Math.random() * arr.length)
    let temp = arr[i]
    arr[i] = arr[rand]
    arr[rand] = temp
  })

  let result = []

  for (var i = 0; i < groups; i++) {
    result.push([])
  }

  arr.forEach((el, i) => {
    let index = i % groups
    result[index].push(el)
  })

  return result
}

console.log("Expect: 2 groups of 2 numbers", deal([1,2,3,4], 2))
console.log("Expect: 3 Groups of 2 Cards", deal(['10C','9C','10H','3S','9D','KH'], 3))
