// filter() metoda kreira novi niz sa onim elementima koji su ispunili uslov.


// Novodobijeni niz moze imaati maksimalno elemenata kao niz na koji se primenjuje metoda , takodje moze biti prazan niz.

const godine = [19,17,20,16,15,12];

 const punoletni = godine.filter(function(element) {
    return element > 17;
 })
 console.log(punoletni);

 const niz = ["Bakir" , "haris" , "Hasan" , "Aladin" , "Merisa"]
 const niz2=niz.filter(function(element){
    return element.length<=5;
 })
 console.log(niz2);

 const novi = ["rec"  ,"dve reci" , 26, true,false[true,false] , 49,true]
 const novo =novi.filter(function(element){
    return typeof element === typeof false;
 })
 console.log(novo);



// funckiju koja pravi niz koji ce iz postojeceg niza napraviti 

//value > 2 =>*7
//value >2 and value <8 =>(value*2)

const nizb = [5,2,4,6,8,9,12,3]
const nizz=nizb.filter(function(element) {
    return element>2;
    
}) 
const nik=nizz.map((wolves)=> wolves > 2 && wolves <8 ? wolves*2 : wolves*7);
console.log(nik)


// reduce() metoda vraca jednu vrednost.Iteracija se vrsi kroz ceo niz 

// sabrati sve elemente niza : 
const zbirGodina = godine.reduce((previousValue,currentValue)=>previousValue+currentValue)
console.log(zbirGodina)
;
//dodati pocetni vrednost 350;


const iznos= godine.reduce((previousValue,currentValue)=>previousValue+currentValue,350)
console.log(iznos)
;


const prosecna = godine.reduce((previousValue,currentValue)=>previousValue+currentValue)
console.log(prosecna/niz.length)


const milje = [55,78,140,121,96,100,67]
const kilo=(arr)=>{
    const prsti=milje.map((element)=>element*1.6);
    const suma=prsti.reduce((previousValue,currentValue)=>previousValue+currentValue);
    return suma;
}
console.log(kilo(milje))
const areja = [1,0,2,3,4]
const areja2 = [2,3,4,5,6]

const funk = (areja,areja2) => {
    let neus= [];
    let i;
    if (areja.length>areja2.length) max=areja.length
    else max=areja2.length
    if (areja[i]===undefined){
        neus.push(areja2[i])
    } else {
    for ( i=0;i<max;i++) {
       neus.push(areja[i]+areja2[i])
    }
}
return neus;
}
console.log(funk(areja,areja2))


