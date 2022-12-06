// search() metoda nam daje index nekog stringa (argumenta date metode).

const recenica="Desila se poseta."
const niz=recenica.search("Desila");
console.log(niz);

//Razlike izmedju indexOf() i search metoda:
//indexOf metoda dozvoljava drugi arguemnt (pozicija odakle krece trazenje stringa).
//search() metoda dozvoljava Regualar Expresion. 

const recenica2="haris ne zna kad se pocinje sedanas insensitive danas bez regular danas cetvrt finalima."
const position=recenica2.search("danas");
const position2=recenica2.search(/danas/i);
console.log(position2);

//match() metoda 
const matchingDanas=recenica2.match("danas");
const matchingDanas2=recenica2.match(/danas/gi);
console.log(matchingDanas2);
console.log(matchingDanas);



//includes() metoda nam vreaca boolean u zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.

const otac="nesto nekad niko nicemo nikome svemu";
const inc=otac.includes("nesto");
console.log(inc);

//sadrzi opcioni drugi argument koji omugcava da odredimo od kog indeksa da trazi dati string.

//startsWith() i endWith() metoda nam vracaju boolean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode.

const okupati="danas mi otkolsimo srebro od ljudova";
const drugo=okupati.startsWith("danas");
console.log(drugo);
const drugo1=okupati.endsWith("danas");
console.log(drugo1);



                                    // JS Template Literals //   



//prednosti 
//1. mozemo koristiti navodnike (obicne ili duple) unutar stringa.

const recenica3 = `neki"dobri" ljudi.`

//2.Template literals dozvoljavaju multitilne stringove.


const recenica4="djaslkfjdsklfj kadsjlfklsadjkfljads iofhasio faewiofuweofuwieohfwieu fiewjfioewa jfiejf ioiOSDJIOJOIAHioshdjskfh oiJFKLDJ AKLFJDSIF JDSIF JADSLKFJklajfkljda klsjfkl dsjklfj asdklfjds kjfkdsajflk jdsklfjiewhiour9uewro iwejkl dkl jdiajfkldsj klfjfj dsklaja"

console.log(recenica4);

//3.Interpolacija - Omogucava laksi nacin interpolaicje promenljivih (ili izraza) unuatar nekog stringa. 

let a = 5;
let b = 35;
const recenica6=`jedna flasa ima zapreminu ${a}l , ukupna kolicina limunade 
je ${b}l s toga mozemo napuniti ${b/a} flasa .`

console.log(recenica6);




//napraviti funkicju koja ispisuje argument.

//ako se u recenici nadje rec skola neka se vrati pozicija prvog pojavljivanja date reci.

const zbir=(br) => {
   if(br.indexOf("skola")!==-1) {
    return br.indexOf("skola");
   }
   if (br.startsWith("Automobil")) {
    return br.startsWith("Automobil");
   } let brojac=0;
   let i;
   if (br.includes("kuca")) {
   if (recenica.length%2===0) {
    for (i=0;i<=recenica.length-1;) {
        if (recenica.includes("kuca",i)) {
        brojac++;
        i+=3;
    }
   }
}
return `broj pojavljivanja reci "kuca" unutar majke je ${brojac}`;

}
console.log(zbir("skola jesmo dobili nuludajgi dajgi dajgi dajgi"));