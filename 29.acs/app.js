// niz predstavlja strukturu podatak koja moze sadrzati vise od jedne vrednosti 



// nizovi u js su heterogeni (mogu sadrzati elemente razlicith tipova).

const niz= ["Mitar Vranic" ,  20 ,  true];
console.log(niz);


// Dozvoljeno je , cesto i prakticnije pisati svaki element niza u novom

// mozmo prvo kreirati prazan niz , pa nakon toga dodavati rucno elemente.


const automobil = []
automobil[0] = "Audi"
console.log(automobil);
automobil[1] = "Passat"
console.log(automobil);
automobil[5] = "Golf"
console.log(automobil)

automobil[0] = "Merc";
console.log(automobil);



// niz mozemo definisati na vise nacina 

const niz2= new Array ("Hasan", "More" , "Na ovaj nacin");
console.log(niz2);



// radi jednostavnosti , citljivosti koda i brzine izvrsavanja je bolje koristiti[] nego new.
const niz3 =[40];
console.log(niz3);

const niz4=new Array(40);
console.log(niz4);



console.log(automobil[1]);


//postoje dva nacina za ispitavanje da li je neka promenljiva niz:
console.log(typeof automobil)

// 1.Array.isArray(potencijalnoNiz)

console.log(Array.isArray(automobil))
console.log(Array.isArray("neki string"))

// 2. potencijalno niz instance of array

console.log(automobil instanceof Array);
console.log(25 instanceof Array)

// elementi niza mogu biti bilo koje vrednosti :
// Date , Array , Boolean , Function , Number

console.log(automobil.length)


const dani = ["ponedeljak" , "utorak"]
dani.push("sreda");
console.log(dani);


dani.push("cetvrtak",  "petak");
console.log(dani);
const nizz=["Omar"]
let z;
z=[nizz.length];
nizz[z]="makarona";
console.log(nizz)


// nizovi su zapravo vrsta objekata koji imaju brojevne indekse.

// split metoda pretvara string u niz.


const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr);

const noviNiz = daniStr.split(",");
console.log(noviNiz);

const daniStr2 = dani.join();
console.log(daniStr2);
console.log(typeof daniStr2);

// dobijanje stringa i stavljanje nekog znaka izmedju elemenata niza koji smo pretvorili u string.

const daniStr3 = dani.join("*");
console.log(daniStr3);


// pop() metoda brise poslednji element iz niza.

const subota = dani.pop()
console.log(dani);
console.log(subota);

