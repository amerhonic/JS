new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });

  // promise je js objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.

const ciz = new Promise ((resolve,reject)=> {

        const response = 200;
        if (response >=20&&response <300 ) {
            resolve()
        } else {
            reject()
        }
}) 
    

ciz
 .then(()=> console.log("dobio sam ciz"))
 .catch(()=> console.log("nisam dobio obrok"))
 .finally(() => console.log("first"))

const dajgi = [1,2,3,4]
 const promise = new Promise ((resolve,reject) => {
    const response =1;
    if (response ===1) {
        resolve(dajgi);
    }
    else {
        reject("poruka");
    }
 }) 
    promise
    .then((dajgi)=> console.log(dajgi))
    .catch((error)=> console.log(error))
    .finally(()=> console.log(""))



    //
function funkcija(string) {
const poslati = new Promise ((resolve,reject) => {
  let brojac=0;
  string1=string.toLowerCase();

  for (i=0;i<string1.length;i++) {
    if (string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u") {
      brojac++;
    }
  }
  if (brojac>10) {
    resolve(string);

  } else {
    reject("nece");
  }
} ) 

 poslati
.then((string)=> console.log("string zadovoljava uslov"))
.catch((error)=> console.log("string ne zadovoljava uslov"))
.finally(() => console.log("funkcija uspesno izvrsena"))
}
console.log(funkcija)