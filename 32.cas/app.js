// const niz = [2,5,1,10,46,-21,-22];
// console.log(Math.max.apply(null,niz));

// function max(rizz) {
//     let max = Number.NEGATIVE_INFINITY
//     for (let broj of niz) {
//         if (broj>max) {
//             max=broj;
//         }

//     } return max;
// }


// indexof() metoda vraca poziciju elementa koji predstavalja arugement date metode.

const niz = ["Ja" ,"Ti" , "Kasika","Hazard"];
const bakir = niz.indexOf("Bakir");
console.log(bakir);

const omar = niz.indexOf("Omar") === -1 ? "nije dolazio" : 
niz.indexOf("omar") + 1;


const hatidza = niz.indexOf("Hatidza");
console.log(hatidza);


//Array.from() nam vraca niz , koji se pravi od nekog objekta koji ima length.
const noviNiz = Array.from("svako slovo ce biti poseban element niza")



console.log(noviNiz);


// includes() vraca boolean;


console.log (niz.includes("Emin"));


// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza.

const indeksi = niz.keys()
console.log(indeksi)
for (let index of indeksi) {
    console.log(index)
}

// entries() metoda vraca  Array Iterator Object sa key/value parovima nekog niza.

const entries = niz.entries();
console.log(entries);
for (let pair of entries) {
    console.log(pair);
}
const nesto = [5,7,12,4,-12,-25,1]
function n(niz,a) {    
    let b = niz.slice(0,a);
    if (a===undefined) return niz[0];
   else return b;
}
console.log(n(nesto))