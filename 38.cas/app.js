const prom1=55
const prom2=!55
const prom3=!!55

const prom4=!!true
const prom5=!""
const prom6=!(55+"");
console.log(prom6);




//Rekruzivna funkcija poziva izvrsavanje same sebe unutar funckije.


//Efekat petlje mozemo postici rekruzivnom funkcijom.


//Ispisati brojeve od 10 do 1 ;
for (i=10;i>0;i--) {
    console.log(i);
}


const ispisivanje = (n) => {
    console.log(n)
    if (n-1 > 0) {
        ispisivanje(n-1)
    }
}
ispisivanje(10)



// flat() metoda se koristi kada unutar niza imamo element koji je niz  , i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza. postovanje

const niz = ["jabuka ", "narandja" , "kivi", "jabuka" ,"mess dresivej" , "van persie" , ["dajgi ovoga" , "luk" ,"paradakz"] , ["pite" ,  "razno" ,"cevapi" ,"doha"]];
const niz2=niz.flat()
console.log(niz2);

const a=[]
const nekad = (arr)=>{
    let str=""
    for (i=0;i<arr.length;i++) {
        str+=`row ${i}  \n`;
        for (k of arr[i+1]) {
            str+=`${k}`   
        }
    } return str;
}
console.log(nekad(a))


const leap=(from,to)=>{
    const leapY=[]
    for (i=from;i<=to;i++) {
        if((i%4 && i%100!=0) || (i%400===0)) {
            leapY.push(i);
        }
    }return leapY;
    }
