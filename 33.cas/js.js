//callback funkcije // 


function glavnaFunkcija(func) {
    console.log("radnja unutar glavne funkcije");
    func();
    console.log("kraj glavne funkcije");
}

function callback() {
    console.log("radnja uutar callback funkcije");
}
glavnaFunkcija(callback)

// callback funckija predstavlja funckiju koju slajemo kao argument neke druge funckije.
// sam argument ne treba da bude izvrsavanje callback funckije vec reference na datu radnju.




//napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja a celu stvar ce da izbrsi callback funckija;

function nesto(call) {
console.log("unutar ove funkcije izvrsavamo stepenovanje dva broja");

call(5,4);
   
    
}

function callback(par1,par2) {
    console.log(par1**par2);
} 

nesto(callback);
// 