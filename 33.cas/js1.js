// js array iteration // 

// array iteration metode prolaze kroz svaki element niza.


// forEach() metoda poziva callback funkciju za svaki element niza.



//forEach() moze imati 3 parametra : 
//1.element niza
//2.indeks niza
//3. ceo niz

const niz = ["tarik" , "kako" , "bandzo" , "hamko"];
niz.forEach((element) => { 
    console.log(element);
})

//ne moramo koristiti nazive od pre.
niz.forEach((student,pozicija) => { 
    console.log(`${student} se nalazi na ${pozicija+1} mestu u nizu.`);
})

//array.map() meotda kreira novi niz (iste duzine kao originalni) sa logikom predstavljenom unutar callback funkcije unutar date meode.

// preko pretlje napraviti novi niz koji ce imati sve elemente originalnog niza
const niz2=[];
for (let student of niz) {
    niz2.push(student);

}
console.log(niz2);


// const niz3 = niz.map(function(student){
//     return student;
// })

const niz3=niz.map((student) => student );
console.log(niz3);

//prekom map() metode napraviti novi niz gde ce imena svih studenata pocinjati veilkim slovom
const niz4=niz.map((neko)=>neko[0].toUpperCase() + neko.slice(1))
console.log(niz4);


const brojevi = [5,121,4,31,21,34,5,7,8,-15,-12]
const brojevi1=brojevi.map((nekako)=>nekako )
console.log(brojevi1)
//negativne pomnoziti sa -1 , pozitivne kvadrirati
//onst brojevi [-5,4,3,10,14,-5]

//3. napraviti noiv niz koji sadrzi kvadrate elemenata postojeceg niza ;

//4 napraviti niz koji sasdrzi kvadratene korene elemenata postojeceg niza

//velikim slovima ispisati niz


