//2.prebrojati koliko ima znakova koji su cifre u stringu
 let brojanje=0
 let recenica =prompt("unesi neku recenicu")
 for(let i=0;i<recenica.length;i++){
     if(recenica[i]==="0"||recenica[i]==="1"||recenica[i]==="2"||recenica[i]==="3"||recenica[i]==="4"||recenica[i]==="5"||
     recenica[i]==="6"||recenica[i]==="7"||recenica[i]==="8"||recenica[i]==="9")
     {
         brojanje++    
     }    
     //moze da se uradi preko ISNAN ako ne dobijemo broj (true) ili ako dobijemo broj (false )
 }
 console.log(brojanje)