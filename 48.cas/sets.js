// js set je kolekcija unikantnih vrednosti.


const mySet = new Set ([14,"it camp" , true , [1,23,4]]);
console.log(mySet)

// Metode Setova : 

// Za kreiranje seta koristimo new Set ([1,2,34,5]);

// za dodavanje lemenata koristimo add();

mySet.add(false);
console.log(mySet);
//za brisanje elemenata koristimo delete (vrednost elementa) metodu ;

mySet.delete(true);
console.log(mySet);
//4. za proveru da li set sadrzi odredjenu vrednosto korisimo has() metodu;

console.log(mySet.has(false));

//5 forEach - callback 
mySet.forEach((el)=> console.log(el));
//2-0



//6. values() metoda vraca iterator sa vrednostima seta:

console.log(mySet.values());
//za proveru duzine seta koristi se size property;

console.log(mySet.size);


function dajgi (niz) {
    const novi = []
for (i=0;i<niz.length;i++) {
    if (!newArr.includes(arr[i])) {
        novi.push(niz[i]);

    }
}
return novi;
}


// mpae u js sadrze key-value parove gde keys (kljucevi) mogu biti bilo kog tipa podatka.

//mape pamte origanlni redosled elemenata.


const myMap = new Map ([

    ["apple",60],
    ["orange",198],
    [true,19],
    [false,-19]
])


console.log(myMap);


//glavne metode kod Map-a;

//1. za kreiranje mape koristi se newMap;

//2. za setovanje vrednosti koristimo set() metodu;

myMap.set("strawberry" , 240);
console.log(myMap);


myMap.set(false,0);
console.log(myMap);


//get() metoda se koristi za dobijanje vrednosti odredjenog kljuca.

console.log(myMap.get("apple"));

// delete() metoda sluzi za brisanje key-value para;


myMap.delete("orange");


//5. has() provera na osnovu kljuca da lie je odredjeni key-value par prisutan mapi;


console.log(myMap.has(true));


// entries metoda vraca key-value parove  


function events ()