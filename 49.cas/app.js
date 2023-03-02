// const bakir = new User ("Bakir" , "Ujkanovic");
// console.log(bakir);

class Person {
    ime = "Moje ime";
    prezime = "Default" ;
    godine = "";
    constructor(ime,prezime,godine) {
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
//person1 moze pristupiti bilo kojoj metodi iz clase Person (koja je napravljena na standardan nacin.);



class product {
    static IncreaseForTen  = 1.1;
    constructor(name,price,desc,weight) {
        this.name = name;
        this.price = price;
        this.descritpion = desc;
        this.weight=weight;

    }
    static IncreasePrice () {
        console.log(` `)
    }
}


const socks = new product ("white socks" , "100% cotton" , 50);
console.log(socks)
// console.log(socks.increasePrice());
console.log(product.IncreaseForTen);
console.log(product.IncreasePrice());
// ne mozemo pristupiti statickoj metodi iz objekta vec samo direktno preko klase;

class person2  {
    constructor(ime,prezime,pol,starost) {
        this.ime=ime;
        this.prezime=prezime;
        this.pol=pol;
        this.starost=starost;
        
        

    }
    getInfo() {
        console.log((`${this.ime} ${this.prezime} ima ${this.starost} godina`))
    }
}
const person3 = new Person ("Mitar" , "Vranic" , 20);
console.log(person3);
console.log(person2.getInfo)


class student extends person2 {
    constructor (ime,prezime,pol,starost,brojIndeksa,godinaStudija,prosecnaOcena) {
        super(ime,prezime,pol,starost)
        this.brojIndeksa = brojIndeksa
        this.godinaStudija = godinaStudija
        this.starost=starost;
        this.prosecnaOcena = prosecnaOcena
    }
    getInfo() {
        console.log((`${this.ime} ${this.prezime} ima ${this.starost} godina`))
    }
}
const student1 = new student ("Amer" , "Honic" , "M" , 1912 , 19,1,7.77)
console.log(student1)
console.log(student1.getInfo())