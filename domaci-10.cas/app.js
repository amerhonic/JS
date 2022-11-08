// Domaci zadatak.
 //1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

 const recenica = prompt("Unesite necega.");
 let s = 0;
 let i = 0;
 let duzina = recenica.length
 while(i<duzina){
     if(recenica[i] === "M"){
         s++;
     }
     else if(recenica[i] === "m"){
         s++;
     }
    
    i++
    console.log(s);
 }