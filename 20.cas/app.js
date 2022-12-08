function malih(r) {
    let i;
    let brojac=0;
    for (i=0;i<r.length;i++) {
        if (r[i]===r[i].toLowerCase() && r[i]!==" ") {
            brojac++;
        }
    }
    return brojac;
} 
console.log(malih("vidinesto JS"));