// funkcija u javascriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
//mozemo je definisati putem:
//1. function keyword
//2.arrow fucntion sintakse.


//1.fucntion keyword :
 

// pravimo funkciju koja sabira broj 3 i broj 5 

function zbirtriipet() {
    const zbir = 3 + 5;

    return zbir;
// moze samo jedan return.
}
console.log(zbirtriipet());

//pravimo funkciju koja sabira dva broja:
function zbirdvabroja(par1,par2) {
return par1 + par2;
}
console.log(zbirdvabroja(5,22));
//par1 i par2 su parametri fukcije 
//5,22 argumenti.


function nesto(x,y) {

    return Math.pow(x,2) + Math.pow (y,2);

}

console.log (nesto(5,2));

//1.nacin
function nesto1(a,b) {
    if (b===undefined) {
        return a**2;

    } else {
        return a**2 + b**2;
    }
}
console.log (nesto1(2,3));
console.log (nesto1(2));

//2.nacin

function nesto2(a,b=0) {
return a**2+b**2;
}
console.log (nesto2(4));
//defaultne vrednosti se stavljaju na kraju.
//defaultna vrednost ne moze biti definisana pre obavezne.


//jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickavrednost = function (k=1,k1=1,k2=1) {
    return (k+k1+k2)/3;
}
console.log(aritmetickavrednost(4,5))

//napraviti funkciju povrsina koja uzima dve vrednosti.
//ako su te dve vrednosti jedanke da vraca povrsiny kvardata uz odredjenu poruku.
//dok ako su razlicite vrednosti da vraca povrsinu pravougaoinika uz odredjenu poruku

function povrsina (a,b) {   
    if (a===b) {
        
       return "povrsina kvadrata iznosi " + a*a;
        
    } else {
        return "povrsina pravougaonika iznosi " +  a*b;
        
    }
    
}
console.log (povrsina(4,6));

//domaci :
// prvi i treci zadatak sa testa preko funkcije.