// Domaci:
// 34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};







//1.


function najveci(niz, b) {
    const naj = niz.sort((a, b) => b - a);
    return naj[b - 1];
  }
  console.log(najveci([43, 56, 23, 89, 88, 90, 99, 652], 2));





//2.

const arr = [58, "", "abcd", true, null, false, 0];

const filter = (arr) => {
  const n = [];
  arr.filter((element) => {
    if (element) n.push(element);
  });
  return n;
};
console.log(filter(arr));




//3.





//4.

let size = Object.keys(student).length;
console.log(size)