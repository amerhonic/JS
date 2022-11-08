//m koliko?
 let brojanje=0
 let recenica =prompt("unesi neku recenicu")
 for(let i=0;i<recenica.length;i++){
     if(recenica[i]==="m"||recenica[i]==="M"){
         brojanje++
     }
    console.log(brojanje);
 }