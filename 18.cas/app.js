// SPLIT() metoda nam vraca niz na osnovu nekog stringa koji je primenjena.

const recenica = "zalimodecembar omara"

const niz = recenica.split()
console.log(niz)


//ako se kod split metode izostavi argument , dobicemo niz od jednog elementa.

// 
const niz2 = recenica.split("decembar")
console.log(niz2)

const niz3 = recenica.split(4)
console.log(niz3)

// napraviti niz od stringa , tako da se elementi niza prave do svake reci decembar 

const recenica4="Decembar je poslednji mesec u godini.U decembar pocinje zima,decembar je najhladniji mesec u godini."
const niz4=recenica4.split("decembar")
console.log(niz4)
const niz5=recenica4.split(/decembar/i)



//Search metode 


//indexOf() metoda vraca broj indeksa poslatog karaktera.

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const position = recenica2.indexOf("mesec")
console.log(position)

//Ako trazimo poziciju nepostojeceg stringa unutar nase recenice rezulat u konzoli ce biti -1.
//Drugi argument predstavlje pozicju od koje krecemo trazenje datong stringa.

const pozicija4=recenica2.indexOf("meseci" , 30);



//lastIndexOf("mesec");


//Napraviti funckiju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja", ako se pojavljuje vise puta dati string , vratiti poziciju prvog i poslednjg,ako se pojavljuje jednom vratiti poziciju tog pojavljivanja

const nesto = (x) => {
    if (1) {
        
        const pozicija = br1.indexOf("ko osvaja");
        const pozicija2 = br1.lastIndexOf("ko osvaja");
     
        return "furka" + pozicija + "drugaa" +pozicija2; 
    }
}
console.log(nesto("ko osvaja osvojio je jer zeko reto ko osvaja ko osvaja"))


//nije dobro.
// 