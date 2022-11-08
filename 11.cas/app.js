let recenica = "Omare jesi li speremio test";
let novaRecenica ="";
brojac = 0 ;
const duzina = recenica.length
for (let i=0;i<duzina; i++) {
    if (recenica[i]== " ") {
        brojac++
    }
  // != proverava vrednost , !== da li je razlicita barem jedna vrednost. 
  // 
}
console.log(brojac);
if(x>5) {
    console.log ("x je vece od 5");

} 
    else if (x>5 && x<10) {
        console.log ("x je izmedju 5 i 10");
    }
// napravi neku novu recenicu gde ce umeseto slova "a" pisati "t".Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
const recenica2 = prompt ("unesite recenicu : ")
let novaRecenica2="";
for (let i = 0; i < recenica2.length;i++) {
if (recenica2[i] === "a" && recenica2[i+1] === "n") {
   novaReceica2 += "d";

}else if ( recenica2[i] === "a") {
    novaRecenica2+="t";
}else {
    novaRecenica2+=recenica2[i];
}
}
console.log(novaRecenica2);
if (broj%2 !==0); // pravilnije za provreavanje jel nesto deljivo
// sa plusem mozemo da spajamo stringove i brojeve.
// string se pretvara u broj kao plus ispred promenljive i IsNaN 
// pre zatvaranja while petlje brojac++ built diff