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
    .finally(()=> console.log("uvek"))

    