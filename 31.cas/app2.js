// sortiranje nizova //

const voce = ["jagoda" , "nesto" , "keks" , "kruska" , "jabuka"]

//sort() metoda nam sortita niz abecedno.

voce.sort();
console.log(voce);

//reverse() metoda sortira niz obrnutim redosledom.
voce.reverse();
console.log(voce);


//ako zelimo sortiranje (a-z) moramo prvi izvrsiti sort (), a onda reverse ( ) logicno ne znam sto pisem ovo, ipak sam ja polozio c.


const neki = [2,4,6,299,12,15,3,1,7,6,8,9];
//neki.sort(); // ne radi sa minusima. 


// za resvanje datog problema se koristi callback funkcija unutar sort metoda.


//funkcija koja se salje  kao argument unutar neke druge funkcije se zove callabck funkcija.

//funkcija za poredjenje dva broja;
function poredi (a,b) {
    return a-b;
} 
neki.sort(poredi)
console.log(neki);


// ovako je bolje

neki.sort(function(a,b) {
    return a-b;
});

neki.sort((a,b)=> a -b );
console.log


neki.sort((a,b)=> b-a );
console.log
//najveci ka najmanjem 


//ako zelimo da niz sortira brojeve random.

neki.sort (()=>0.5 - Math.random())
console.log(neki);


