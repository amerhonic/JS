function menjajCifre (broj) {
    const strBroja= broj.toString
    if (strBroja.length!==4 || isNaN(strBroja)) {
        return "dati argument mora biti majka";
    }else { 
        const prviDeo =strBroja.slice(0,2)
        const drugiDeo =strBroja.slice(2)
        const noviBroj =drugiDeo.concat(prviDeo);
        return noviBroj;
    } 
}
console.log(menjajCifre(1243));



// 2.parseInt()- analizira argument i vraca nam ceo broj ako je moguce.
//..log(parseInt("23+5")) // vraca 28
//parseInt dozovljava da uz nesto sto nije broj stavimo broj.


//console.log(parseInt("23 56")) // 23


//3. praseFloat()
//console.log(parseFloat(23)) // number
//console.log(parseFloat(23.75))


//                                                                                                                        