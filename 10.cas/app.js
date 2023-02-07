// //stringovi su immutable promenljive nije moguce vrsiti modifikaciju postojeceg stringa.
// //alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo.
// let rec1 = "petak"
// console.log (rec1[2]);
// //toUpperCase () -metoda koja pretvara ceo string u velika slova.
// //
// let PETAK = rec1.toUpperCase()
// //usless iskreno
// console.log(rec1);
 

// //toLowerCase () -metoda koja pretvara ceo string u velika slova.
// let rec2="PETAK"
// let petak = rec2.toLowerCase()
// console.log(petak);


// const recenica0="zelimo daTu recenicu PriKazAti maLim isto tako I velikIm slovOm"
// let nova=recenica0.toUpperCase()
// let nova1=recenica0.toLowerCase()
// console.log(nova);
// console.log(nova1);




// ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
// const recenica="sledece subote cemo imati test, koji predstavlja kraj prvog ciklusa.Nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa."

// let novaRecenica= ""
// let novaRecenica2= " "
// console.log(Boolean(novaRecenica2))
// console.log(Boolean(novaRecenica))
// for (let i=0; i< recenica.length; i++) {
//     if (i === 0 ) {
//        novaRecenica += recenica[i].toUpperCase();
//     }else if (recenica[i-1] === " ") {
//        novaRecenica+=recenica[i].toUpperCase(); 
//     } else {
//        novaRecenica+=recenica[i];
//     }
// }
// console.log(novaRecenica)

const recenica="sledece subote cemo imati test, koji predstavlja kraj prvog ciklusa.Nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa."

let novaRecenica= ""
let novaRecenica2= " "
console.log(Boolean(novaRecenica2))
console.log(Boolean(novaRecenica))
for (let i=0; i< recenica.length; i++) {
     
    if (recenica[i+1] === " ") {
       novaRecenica+=recenica[i].toUpperCase(); 
    }  
    else if (i===recenica.length-2) {
       novaRecenica+=recenica[i].toUpperCase();dzenankosuta
    }
    else {
        novaRecenica+=recenica[i];
    }
    }
console.log(novaRecenica);
// preborojati koliko se puta u unetom stringu pojavljuje slovo M (i veliko i malo).Npr za strima mam ima momu dobija se rezultat 5.

//2. prebrojati koliko ima znakova koji su cifre u unetom stringu.