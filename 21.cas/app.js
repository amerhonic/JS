// function neka (sta) {
// for (i=0;i<recenica.lenght;i++) {
//     if (recenica[i]!== recenica.lenght-1-i) {
//     return "rec nije"      
//     }
// } return "jes";

// }
function neko (rec) {
    let n = rec.indexOf(" ");
    let y = rec.lastIndexOf(" ");
    let z="";
    let x="";
    for (i=0;i<=n-1;i++) {
        
        z+=rec[i];
    }
    for (i=y+1;i<rec.length;i++) {
        
        x+=rec[i];
    } 
    return z+" "+x;
}  console.log(neko("daj mi ovo sto trazim"))



//

// function nikad (rc,n,m) {
//     let a="";
//     let i;
//     a=rc.slice(n,n+m)
// } return a;
// console.log (nikad("recenica nema veze nismo radili" , 7,8))




function mada(r,znak) {
    let i;
    let recica=""
    for (i=0;i<r.length;i++) {
        if (r[i]!==znak) {
            recica+=r[i];
        }
    } return recica;
}
console.log(mada("mogli bi na more u februar", "i"));