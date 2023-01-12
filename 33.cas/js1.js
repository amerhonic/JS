// js array iteration // 

// array iteration metode prolaze kroz svaki element niza.


// forEach() metoda poziva callback funkciju za svaki element niza.



//forEach() moze imati 3 parametra : 
//1.element niza
//2.indeks niza
//3. ceo niz

const niz = ["rikta" , "hamko" , "eko nemo da im saljes" , "bako" , "dzenan"];
niz.forEach((element) => { 
    console.log(element);
})

//ne moramo koristiti nazive od pre.
niz.forEach((student,pozicija) => { 
    console.log(`${student} se nalazi na ${pozicija+1} mestu u nizu.`);
})

