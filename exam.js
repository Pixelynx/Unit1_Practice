// QUESTION 1:
// QUESTION 2:
// QUESTION 3:
// QUESTION 4:
// QUESTION 5:
// QUESTION 6:
// QUESTION 7:

// QUESTION 8:
let aStr = "belly full of jelly."

// check the case of the current letter
// switch case of following letter

const switchCase = (str) => {
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i+=2) {
    str[i] = str[i].toUpperCase();
  }
  return str.join('');
}

// console.log(switchCase(aStr));

// QUESTION 9:

const counter = (str) => {
  let count = {};
  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }
  return count;
}

// let aaStr = 'Belly Belly Full of Jelly Jelly';
// console.log(counter(aaStr));


// ** QUESTION 10: **

const countZeroes = (arr) => {
  let jusZeros = arr.reduce((acc, currEl) => {
    if (currEl === 0) {
      acc++;
    }
    return acc;
  }, 0)
  return jusZeros
}

let zeroArr = [2, 0, 3, 0, 3, 4, 0, 1]
// console.log(countZeroes(zeroArr))


// QUESTION 11:

const isPalindrome = (str) => {
  let garbage = /[\W_]/g;
  str = str.toLowerCase().replace(garbage, '');
  reverse = str.split('').reverse().join('')
  return str === reverse;
}
// console.log(isPalindrome('Race car!'));

// QUESTION 12: **

const includes = (arr, targ) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[i] === targ;
  }
}

let targArry = [3, 5, 7, 3, 7, 9];
// console.log(includes(targArry, 9))

// QUESTION 13:

const getMiddle = (str) => {
  str = str.split('');
  midOdd = Math.floor(str.length/2);
  midEven = (str[str.length/2 - 1] += str[str.length/2]);

  for (let i = 0; i < str.length; i++) {
    if (str.length % 2) {
      return str[midOdd];
    } else {
      return midEven
    }
  }
}

// console.log(getMiddle('apples'))

// QUESTION 14: **
const palindromeSubstrings = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

// console.log(palindromeSubstrings("Rat star"))

// QUESTION 15: **

const disemvowel = (str) => {
  let result = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result += str[i];
      }
  }
  return result;
}

// console.log(disemvowel('Belly jelly'));

// QUESTION 16:

const targetIndices = (arr, targ) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(targ))
    return true;
  }
  return false;
}

let targArr = [3, 5, 7, 3, 7, 9];

// console.log(targetIndices(targArr, 9));

// QUESTION 17:

const rangeWithStep = (min, max, step = 1) => {
  for (let i = min; i <= max; i+=step) {
    console.log(i);
  }
}

// rangeWithStep(2, 8, 2);

// QUESTION 18:
// QUESTION 19:
// QUESTION 20:
// QUESTION 21:

const factors = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
// factors(100);

// QUESTION 22:
// QUESTION 23:
// QUESTION 24:

const getProps = (obj) => {
  return Object.keys(obj);
}

let thisObj = {
  name: 'T\'Keya Stevens',
  age: 99,
  gender: 'Fluid'
};

// console.log(getProps(thisObj));

// QUESTION 25:

const getValues = (obj) => {
  return Object.values(obj);
}

// console.log(getValues(thisObj))

// QUESTION 26:

const getAverageAge = (arr) => {
  let avg = arr.reduce((acc, currEl) => {
    sum = acc + currEl;
    return sum / arr.length;
  })
  return avg;
}

let ages = [22, 32, 21, 45, 38];
// console.log(getAverageAge(ages))

// QUESTION 27: **
// rotate


// QUESTION 28:

const repeat = (str, times = 2) => {
  return str.repeat(times);
}

// console.log(repeat('Belly full of jelly\n'))


// QUESTION 29:

const noDups = (arr) => {
  results = {};
  arr.forEach(el => results[el] = el);
  return Object.values(results);
}

// console.log(noDups(['cat', 'cat', 'dog', 'fish', 'dog', 'cat']))

// QUESTION 30:

function concatAndRemoveDupes(a1, a2) {
  let catty = a1.concat(a2);
  let results = {};
  catty.forEach(el => results[el] = el);
  return Object.values(results);
}

// console.log(concatAndRemoveDupes([1, 2, 3, 4], [2, 4, 6, 8]));

// QUESTION 31:

const elementDivisibleBy = (arr, divisor) => {
  let divisible = arr.filter(el => {
   return el % divisor === 0;
  })
  return divisible;
}

// console.log(elementDivisibleBy([2, 4, 5, 6, 7, 8], 2));

// QUESTION 32:

const numberTimesIdx = (arr) => {
  let results = {};
  arr.forEach((el, idx) => {
    results[el] = el * idx;
  })
  return Object.values(results);
}

// console.log(numberTimesIdx([2, 3, 4, 5]))

// QUESTION 33:
// MY FLATTEN

Array.prototype.myFlatten = function() {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      output = output.concat(this[i].myFlatten());
    } else {
      output.push(this[i])
    }
  }
  return output;
}

// console.log([1,2, [3, 4, [5, 6]]].myFlatten())

// QUESTION 34:
// forEach

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

let eachArr = [1, 2, 3, 4];

// eachArr.forEach(el => {console.log(el * 2)})

// QUESTION 35:
// myMap

Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.forEach(el => {
    newArr.push(callback(el));
  })
  return newArr;
}

let newMap = eachArr.myMap(el => {return el});
// console.log(newMap)

// QUESTION 36:
// myReduce

Array.prototype.myReduce = function(callback, initialValue) {
  let startingIdx = 0

    if (!initialValue) {
      initialValue = this[0];
      startingIdx++;
    }

    for (let i = startingIdx; i < this.length; i++) {
      initialValue = callback(initialValue, this[i]);
    }
    return initialValue;
}

let reduced = eachArr.myReduce((acc, currEl) => {return acc + currEl})

// console.log(reduced);

// QUESTION 37:
// myEvery

Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
    return false;
  }
}

let randNumArr = [2, 3, 3, 2, 5, 70];

const greaterThan10 = (num) => {
  return num > 10;
};

let meh = randNumArr.myEvery(greaterThan10);

// console.log(meh);

// QUESTION 38:
// mySome

Array.prototype.mySome = function() {
  return false;
  if (this[i], i, this) {
    return true
  }
}

let mehh = randNumArr.mySome(greaterThan10);
console.log(mehh)

// QUESTION 39:
// myFilter

Array.prototype.myFilter = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

let odds = [1, 2, 3, 4, 5].myFilter(el => {
  return el % 2;
});
// console.log(odds);

// QUESTION 40:
// myTranspose

Array.prototype.myTranspose = function() {
  let grid = [];
  for (let i = 0; i < this.length; i++) {
    grid[i] = [];
    for (let j = 0; j < this.length; j++) {
      grid[i][j] = this[j][i];
    }
  }
  return grid;
}

let mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(mtx.myTranspose())

// QUESTION 41:
// myJoin

Array.prototype.myJoin = function(joiner = '') {
  let output = '';
  for (let i = 0; i < this.length; i++) {
    output += this[i];

    if (i !== this.length - 1) {
      output += joiner;
  }
  }
  return output;
}

let anArr = [1, 2, 3];
// console.log(anArr.myJoin(' '))

// QUESTION 42:
// mySlice

String.prototype.mySlice = function(start, end = this.length) {
  let str = '';

  for (let i = start; i < end && i < this.length; i++) {
      str += this[i];
    }
    return str;
  }
  let thisIsStr = 'this is a string';
  // console.log(thisIsStr.mySlice(1, 4))


const secLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else {
        if (secondLargest < arr[i]) {
          secondLargest = arr[i];
        }
      }
  }
  return secondLargest;
}

let arr = [1, 4, 3, 76, 43, 0];
// console.log(secLargest(arr))


const rotate = (arr, shift = 1) => {
  if (shift > 0) {
    for (let i = 0; i < shift % arr.length; i++) {
      let shifted = arr.shift();
      arr.push(shifted);
    }
    if (shift < 0) {
    for (let i = 0; i > shift % arr.length; i--) {
      let popped = arr.pop();
      arr.unshift(popped);
    }
    }
    return arr;
  }
}

// console.log(rotate(arr, 2));

Array.prototype.myReduce = function(callback, initialValue) {
  let startVal = 0;
  if (!initialValue) {
      initialValue = startVal;
      startVal++;
  }
  for (let i = initialValue; i < this.length; i++) {
    initialValue = callback(initialValue, this[i]);
  }
  return initialValue;
}

let reducee = [1, 2, 3, 4].myReduce((el, currEl) => {
  return el + currEl;
});

// console.log(reducee);

const secondLargest2 = (arr) => {
  // first idx of arr to keep track of largest [accCopy];
  // sec idx of arr to keep track of sec largest [accCopy]

  let largAndsecLarg = arr.reduce((acc, el) => {
    let accCopy = acc;
    if (acc[0] === undefined || el > acc[0]) {
      accCopy[1] = accCopy[0];
      accCopy[0] = el;

      // 'else if' so the loop isn't just changing the result to sec larg
      // -- which a simple 'if' statement would do

    } else if (acc[1] === undefined || el > acc[1]) {
      accCopy[1] = el;
    }
    return accCopy;
  }, [])
  return largAndsecLarg
}
// console.log(secondLargest2([3, 1, 2, 6, 44, 0, 23]))
