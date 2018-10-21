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

// let targArr = [3, 5, 7, 3, 7, 9];
// console.log(includes(targArr, 9))

// QUESTION 13:

const getMiddle = (str) => {
  str = str.split('');
  midOdd = str.length/2;
  midEven = ((midOdd - 1), (midOdd));

  for (let i = 0; i < str.length; i++) {
    if (str % 2) {
      return str[midOdd];
    } else {
      return str[midOdd], str[midOdd-1]
    }
  }
}

// console.log(getMiddle('apples'))

// QUESTION 14: **

// QUESTION 15: **

const disemvowel = (str) => {
  str = str.split('');

  let remove = str.filter(el => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (el !== vowels) {
      return el;
    }
  })
  return remove;
}

// console.log(disemvowel('Belly jelly'));

// QUESTION 16:

const targetIndices = (arr, targ) => {

  let target = arr.reduce((acc, currEl) => {
    if (acc + currEl === targ) {
      return (acc, currEl)
    }
  })
  return target;
}

let targArr = [3, 5, 7, 3, 7, 9];

// console.log(targetIndices(targArr, 8));

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



// QUESTION 38:
// mySome

// QUESTION 39:
// myFilter

// QUESTION 40:
// myTranspose

// QUESTION 41:
// myJoin

// QUESTION 42:
// mySlice
