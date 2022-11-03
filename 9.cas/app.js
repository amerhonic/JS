let recenica ="danas cemo raditi neke operacije sa stringovima.";
console.log (recenica)
let omar="Omar"
 
//pristupanje nekom karakteru stringa se vrsi preko indeksa.
omar[0] 
// ide se od nule
console.log (omar[0]);
console.log (omar[2]);

//metoda za dobijanje ukupne duzine stringa je length;
let duzinaRecenice = recenica.length;
console.log (duzinaRecenice);
console.log (omar.length);

// primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.
// iteretor predstavlja indeks. 

 recenica ="danas cemo raditi neke operacije sa stringovima.";
 const duzina = recenica.length
 for (let i = 0; i=duzina; i++ ) {
    console.log(recenica[i]);
 }
 
//let moze samo jednom da se deklarise.Mogul da mu vidim specifikacije

//na osnovu  unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.Dok ako je neki karakter =a neka se ispise broj 5 a u slucaju da je karakter jednak s neka se ne ispise nista.