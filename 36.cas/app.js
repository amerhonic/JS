// const niz=[1,1]
// let f=1
// let fpp=1
// let fp=2;
// let s=0;
// let i=2;
// while (niz[i-1]+niz[i-2]<4000000) {
//     niz.push(niz[i-1]+niz[i-2]);
//     i++;
// }
//     const niz2=niz.filter(function(element) {
//         return element%2===0;
//     })
    
//    for(i=0;i<niz2.length;i++){
//     s+=niz2[i];

//    }


// console.log(s);


function pali(palindrom) {
    let br=palindrom;
    let broj;
    let cifra=0;
   while(br>0) {
    broj=br%10;
    cifra+=broj*10;
   }
   if (cifra===palindrom){
    return "dajgi"
   } else return "nije"
   
}
console.log(pali(10000))


for (let i=100;i<999;i++) {
    for (let j=100;j<999;j++) {

    }
}