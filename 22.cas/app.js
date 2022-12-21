//js prepoznaje samo jedan tip podataka za brojeve 
//u pitanju je number tip podataka i oni mogu biti zapisani sa ili bez decimalnog zareza

//veliki brojevi mogu biti zapisani sa tzv exponent oznakom:

const petica =5e6
console.log(petica)

const noviBroj = 555e-5
console.log(noviBroj)

const x=0.1;
const y = 0.2;
const z=x+y;
console.log(z)


console.log("10"+10) // 1010
conosle.log("10"-2)  // 8

//NaN

console.log(isNaN(100/"Apple"));

//infinity

const a= 25;
const b=0;
const c=-1;
console.log(a/b);
 console.log(c/b);
 

 console.log(typeof Infinity)
 console.log (typeof -Infinity)

// rgb(0,255,123)
//#12ab33

//hexadecimal numbers :
//ako su brojevi napisani prefiksom 0xFF rezultat ce biti 255.



//12 = 1*16 + 2*1 = 18
//ab=10*16 + 11*1=171
//33=3*16 + 3*1 = 48+3=51

// pored osnovnog nacina dodeljivanja vrednosti nekoj promenljivoj mozemo to uraditi preko new

const k = 22 ;
 const l= new Number(33)
 console.log(l)
 console.log(k)
 console.log(k+1)


 console.log(typeof k)
 console.log(typeof l)


// 

// function nesto(br) {
//     br=br/2.54;
//   return br;
// }
// console.log(nesto(120))






