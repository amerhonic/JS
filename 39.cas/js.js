const main=(other) => {
    console.log("radnja glavne funkcije ...");
     return other(1,2,3)
}
const ars = (first,second,third) => {
    return +((first + second + third)/3).toFixed(2)
}
main(ars);



// closure funckije //

// poznata je cinjenica da kada se izvrsi funkija, sve njene lokalne promenljie pokupi garbage colector i one prestaju da postoje u memoriji.
//medjutim , to nije slucaj za fucnkije cije promenljvive zahteva neka druga fucnkija.



// closure je funkcija koja ima pravo pristupa promenljivim iz domena druge funkcije.

//to se najcesce postize ugradjivanjem funkije unutar druge funkcije , nakon cega se postize tzv.Block chain.

// lancana reakcija?




function dajgi() {
    const prom1="Hi"
    return `${prom1} guys.`
}
//console.log(dajgi())
//console.log(prom1)



function tebe() {
    const a=2
    const b=9
    function closure(c) {
        return a*c;
    }
    return closure(3)
}

console.log(tebe())


