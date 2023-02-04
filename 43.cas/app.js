const niz = [4,5,5,6,4,9,-1,5];
let niz2=[];
//klonirati niz;
for (let i=0;i<niz.length;i++) {
    niz2.push(niz[i]);
}
console.log(niz2);

// spread operator (...)
//pomocu njega kloniramo niz ili objekat;

const niz3=[120,110,...niz]
console.log(niz3)

const obj ={
firstName:"Haris",
lastName: "Muslic",
status:"samo liverpul",
age:12
};

const obj2={...obj};
console.log(obj2)


const obj3={...obj,status:false,age:obj.age+1}
console.log(obj3);
