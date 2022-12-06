const litar=(l,f) => {
    let kiks;
  
    if(isNaN(l) || isNaN(f)) return "uneli ste pogresne vrednosti";
    kiks=Math.trunc(l/f);

return "broj punih flasa za unetu kolicinu litara je : " + kiks;
}
console.log(litar(290,2.6));