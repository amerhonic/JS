// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.







//  1.
const niz = [5,2,4,6,9,12,45];
const fill=niz.filter(function(element){
    return element%2===0;
})
const suma=fill.reduce((proslo,sadasnje)=>proslo+sadasnje);
console.log(suma)

//  2.

const nizz = niz.filter(function (element) {
  return element % 2 === 0;
});
const nizz2 = nizz.map(function (element) {
  return element * 2;
});
const nizz3 = nizz2.reduce(function (par1, par2) {
  return par1 + par2;
});
console.log(nizz3);




//  3.
const arrr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let element;
let pojavljivanje = 1;
let br = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      br++;
      if (pojavljivanje < br) {
        pojavljivanje = br;
        element = arr1[i];
      }
    }
  }
  br = 0;
}
console.log("Element je " + element);
console.log("Pojavljuje se " + pojavljivanje + " " + "puta");

//4.
const stringg = "The Quick Brown Fox";
 

function zamena(recenica) {
    let nova = "";
    for (let i = 0; i < recenica.length; i++) {
        recenica[i] === recenica[i].toUpperCase() ? (nova += recenica[i].toLowerCase()) : (nova += recenica[i].toUpperCase());
           
    }
    return nova;
  }
  console.log(zamena(stringg));




  

