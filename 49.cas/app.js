// const bakir = new User ("Bakir" , "Ujkanovic");
// console.log(bakir);

class Person {
    ime = "Moje ime";
    prezime = "Default" ;
    godine = "";
    constructor(ime,prezime,brGodina){
        this.ime = ime;
        this.prezime=prezime;
        this.godine=godine;
    }
    imeIPrezime() {
        return `${this.ime} ${this.prezime}`;
    }
}
const person1= new Person("Mehmed" , "Kucevic" , 15);
console.log(person1) 


