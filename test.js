Array.prototype.myMap = function(callback) {
  let newMap = [];
  for (let i = 0; i < this.length; i++) {
      newMap.push(this[i]);
      callback(this[i]);
  }
  return newMap;
}
let arr = [1, 2, 3, 4, 5];
let mapped = arr.myMap(el => {
  return el;
})

// console.log(mapped)


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


const includes = (arr, targ) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targ) {
      return true;
    };
  }
  return false;
}

let targArr = [3, 5, 7, 3, 7, 9];
// console.log(includes(targArr, 99))


// Array.prototype.mySlice = function(start, end) {
//   let blah = this.filter((el, idx) => {
//     if (idx >= start && idx < end) {
//       return el;
//     } else {
//       if (idx >= start && !end) {
//         return el;
//       }
//     }
//   })
//   return blah;
// }
// let anotherArr = [1, 2, 3, 4, 5, 6, 7];
// let aThing = anotherArr.mySlice(1, 4);
// console.log(aThing)
// 2, 3, 4

String.prototype.mySlice = function(start, end = this.length) {
  let str = '';
  for (let i = start; i < end && i < this.length; i++) {
    str += this[i];
  }
  return str;
}
let thisIsStr = 'this is a string';
// console.log(thisIsStr.mySlice(4))





const secLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];

      } else {
        if (secondLargest < arr[i]) {
          secondLargest = arr[i]
        }
      }
  }
  return secondLargest;
}

let arrs = [1, 4, 3, 76, 43, 0];
// console.log(secLargest(arrs))
