// nastavak math metoda 


// MATH MIN() - vraca nam najmanji broj od poslatih.Moze imati neograniceno argumenata.

console.log(Math.min(45,56,-66,35,-19))

// Math.max - najveci

// console.log(Math.max(x));

// const najmanji = Math.min.apply(null,[19,55,33]);s\
// console.log(najmanji)



// Math.random() nam daje broj izmedju nula i jedan, nula je ukljucena.

console.log(Math.round(Math.random()*5)) 
// e ja bi batalio da mi je on predavo fiziku,24 puta padnes


// izracunati rastojanje izmedu dve taka u prostoru ako su zadatke koordinate krajnjih tacaka.

function rasotajnje (xa,ya,xb,yb) {

    return Math.sqrt((xb-xa) ** 2 + (yb-ya) ** 2) 
}


function pobednik (m,p,m1,p1) {
    let a;
    let b;
    a=(m+p)
    b=(m1+p1)
    if (a===b && p===p1) {
        return "prvi lik"
    }
    else if (a===b&& p > p1) {
        return "prvi lik";
    } else if (a>b) return "prvi";
    else if (b>a) return "drugi";
     else return "drugi lik";
}

console.log(pobednik(21,32,42,49))
console.log(pobednik(49,32,1,1))
console.log(pobednik(12,12,12,12))
console.log(pobednik(12,13,13,12))


function najveci(x,y) {+++++++++++++++++++++++++
    let i;
    let c;
    c=Math.min(x,y)
    for (i=c;i>=1;i--) {
        if (x%i==0 && y%i==0) {
            return i;
        }
    }
}
console.log(najveci(10,4))


function nzs(z,d) {
    let i;
    
}