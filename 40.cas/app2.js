//JS objekti su mutable (promenljvi)//

const dzenan = {
    ime:"Dzenan",
    prezime:"Mec" , 
    godine:19
}
const dzenan2=dzenan;

console.log(dzenan2)


dzenan2.prezime = "Kosuta"
dzenan2.godine=26;
console.log(dzenan2) 
console.log(dzenan) 

//brisanje svojstava iz objekata;
const person = {
    ime : "Mitar",
    prezime : "Vranic",
    age:20,
    skola:"Prva Tehnicka"
}

 delete person.skola; // delete brise element // delete obj.property brise i key i value;
 console.log(person);
 

//delete person["skola"]

//napomena
//vrednosti nekog objekta mogu biti :

//objekti
//nizovi
//funkcije ...

//konvertovanje objekta u niz:

const niz= Object.values(person);
console.log(niz);

//dodavanje novih svojstava

person.punoletsnost = 12
console.log(person)



// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
 
const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
    

  };
  myCar.trenutnaBrzina=0,
  myCar.maksimalnaBrzina=260  
  console.log()



 myCar.povecavanjeBrzine=  function(par) {
     
    this.trenutnaBrzina+par > 260 ? "ne more" : this.trenutnaBrzina+=par;

    },
    myCar.smanjeneBrzine =  function(par1) {
        this.trenutnaBrzina-par1 <= 0 ? "zaustavili ste se " : this.trenutnaBrzina-=par1;

    }

    myCar.povecavanjeBrzine(30);
    console.log(myCar)

    myCar.smanjeneBrzine(30);
    console.log(myCar);


    myCar.koci=function() {
        this.trenutnaBrzina=0;
    };
    myCar.koci();
    console.log(myCar)

    