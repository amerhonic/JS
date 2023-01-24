//const niz = ["Bakir" , "ALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLADIN" , "SALADIN IBN AYUB"];
///             0                        1                                 2


// AKO IZBIRSEMO NEKI ELEMENT BRISE SE  I KEY (INDEKS) I VALUE

//objekti su promenljive koje sadrze vise vrednosti.


//predstavaljaju se u key:value parovima 


const person = {
    firstName: "Nikola",
    lastName: "Bozovic",
    age:18,
    adult:true
}
console.log(person)


//pristupanje odredjenim vrednostima objekta mozemo izvrsiti na 2 nacina.

//jedan key:value par se zove property(svojstvo).

//1. objectName.propertyName(person.firstName)


//2.objectName["propertyName"] (person ["firstName"])



console.log(person.firstName)
const punoletnost=person.adult===true ? "jeste" : nije
console.log(`${person["firstName"]} ${punoletnost} punoletna.`)

// object methods //

//objekti takodje mogu imati metode.
//metode su funkcije koje ce se izvrstiti na objektu.
//metode su skladistene u svojstvima kao definicije funkcija.



const person2 = {
    firstName: "Alen",
    lastName: "Mula",
    age:17,
    adult:false,
    fullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person2.fullName())


// u JS this je keyword (rezervisana rec) koja ukazuje na neki objekat
//this nije promenljiva i ne mozemo promeniti vrednosti this.



//this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi .


// *u nekom objektu this ukazuje na taj objekat;

// * u global scope this ukazuje na globaj object 



// DOMACI KOJI CE DA IMA VREDNOSTI(PO ZELJI)
 

const snubStr = (str) => {
    const substrArr=[];
    for (i=0;i<str.length;i++) {
        for (let k=i;k<str.length;k++) {
 substrArr.push(str.slice(i,k+1))           
        }
    }
}