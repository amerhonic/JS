// replace() metoda vrsi zamenu nekoliko karaktera datog stringa.Ima dva argumenta;
//Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.


const recenica = "Danas smo podelili sertifikate za HTML, CSS I JS."

let recenica2 = recenica.replace("Danas", "Juce")
console.log(recenica2);
recenica2=recenica.replace("s", "t");
console.log(recenica2);

// za promenu svih pronalazenja datog stringa cemo koristiti regular expressions:
//1. g(global)
recenica2 = recenica.replace(/s/gi,"A")
console.log(recenica2)
// 1. i (insenstivie)

//to.uppercase() sve reci velika slova
//to.lowercase() sve reci mala slova

//concat() metoda vrsi spajanje dva ili vise stringova.

let a = "danas je 16.cas java scripta";
let b = "bice javascripta i preko 50 casovac";
let c = a + " "+ b;
console.log(c);

c=a.concat(b);
console.log(c);

//napomena.
//sve string metode prae nocu promeljivu (jer su strinogvi imutale vrednosti).


//napraviti funkciju koja kod stringa koji predstavlaja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
//pravi novi string koji ce biti isecak od pola do kraja originalnog stringa.Nakon toga novom stringu menjamo sva mala slova "a" sa velikom slovom "B" , i funkcija ce vratiti  novi string koji je sastavljen od "ovo je novodobijena recenica ,  " i poslednjeg izmenjenog isecka.

// ako string ima duzinu <= 9 :
// funkcija treba vratiti  poruku :
// argument + njena duzina + "nedovoljno za dalje ispitivanje."


const mojaFunkcija = function(recenica) {
    if (recenica.length>9) {
            let polaDuzine;
            // if (recenica.length%2===0) {
            //     polaDuzine = recenica.length / 2
            // } else if (recenica.length / 2 !==0 ) {
            //     polaDuzine = Math.ceil(recenica.length / 2 )
            // }
            polaDuzine= recenica.length%2 === 0 
            ? recenica.length / 2
            :Math.ceil(recenica.length / 2);
            const isecak = recenica.slice (polaDuzine,recenica.length) 
            const novaRecenica = isecak.replace(/a/g , "B")
            const konacno = " ovo je novodobijena recenia".concat(novaRecenica);
            
            return konacno;
    } else {
        const recenica2 = recenica.concat(recenica.length ,"nedovoljon za dalje ispitvanje.")
        return recenica2;
    }
}

console.log(mojaFunkcija("ovo je je ohrid i iran-usa"));

//napravitu funkciju koja trazi od korisnika da unese neku recenicu zatim funkcija vraca ,

// datu recenicu u vise oblika (spojenu u jedan string).
//1.recenicu ispisanim velikim slovima.
//2. recenicu ispisanu malim slovima 
//3.pola recenice ispisano velikim slovima pola recenice ispisano malim slovima

//4.ako su recenici nadje rec skola neka bude zamenjena recju fakultet, 
//5. neka bude ispisano prvih 10 karaktera unete recenice , 
//6. neka bude ispisano poslednjih 10 karaktera unete recenice.