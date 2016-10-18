// Write a function that takes an array of numbers and returns an array of the sums of each consecutive pair.

function pairAndSum (input) {
  if (input.length < 2) return input
  return input.reduce((acc, el, i, array) => {
    if (array[i+1]) acc.push(el + array[i+1])
    return acc
  }, [])
}

console.log('Expect: [ 10, 11, 7, 4, -3 ]', pairAndSum([ 3, 7, 4, 3, 1, -4 ]));
console.log('Expect: [ 5, 12 ]', pairAndSum([ 1, 4, 8 ]));

// Write a function that finds all the numbers separated by one. Assume all numbers in the array will be unique.

function separatedByOne (arr) {
  return arr.reduce((acc, num, i, array) => {
    if (array.some(el => (el-1 === num) || (el+1 === num))) acc.push(num)
    return acc
  }, [])
}

console.log('Expect: [ 1, 5, 2, 4 ]', separatedByOne([ 1, 5, 2, 4, 9 ]))
console.log('Expect: [ 90, 88, 89, 25, 26 ]', separatedByOne([ 90, 88, 89, 1, 25, 26 ]))

// Write a function that takes an array of strings and returns an object with a count of how many of those strings start with the same letter.

function countFirstLetter (strs) {
  return strs.reduce((acc, str) => {
    (acc[str[0]]) ? acc[str[0]] += 1 : acc[str[0]] = 1
    return acc
  }, {})
}

console.log('Expect: { l: 2, a: 1 }', countFirstLetter([ 'loquacious', 'liquidity', 'amorphous' ]))
console.log('Expect: { e: 3 }', countFirstLetter([ 'extraneous', 'effervescent', 'ecstatic' ]))

// Write a function that takes an array of words and replaces those words with only the vowels where vowels are “a”, “e”, “i”, “o”, and “u”.

function vowelize (arr) {
  const vowels = ['a','e','i','o','u']
  return arr.map(str => {
    return str.split('').filter(letter => {
      return vowels.includes(letter)
    }).join('')
  })
}

console.log("Expect: [ 'ea', 'i', 'aue' ]", vowelize([ 'extra', 'spicy', 'sauce' ]))
console.log("Expect: [ 'ai', 'aie', '' ]", vowelize([ 'david', 'blaine', 'FTW' ]))

// Write a function that takes an array of arrays of numbers. Return a row of only the positive numbers.

function stayPositive (matrix) {
  return matrix.reduce((acc, arr) => {
    return acc.concat(arr)
  }, []).filter(num => {
    return num > 0
  })
}

console.log('Expect: [ 1, 9, 9 ]', stayPositive([[ -1, 0, 1 ], [ -4, 9, 9 ]]))
console.log('Expect: [ 0.43 ]', stayPositive([[ -74, -23 ], [ 0.43 ]]))
