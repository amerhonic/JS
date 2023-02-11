function kl(niz,nizb) {
    const c = [];
    const x= []
    for (let i=0;i<niz.length;i++) {
        if (nizb[i]<niz.length) {
          c.push(nizb[i]);  
        }
    }

    for (i=0;i<niz.length;i++) {
        x.push(niz[c[i]]);
    }
    return x;

}
console.log(kl([23,52,38,44],[3,1,1,2]))


function ck(niz) {
    let br=0;
    let i=0;
    for (i=0;i<niz.length-1;i++) {
        if (niz[i]===niz[i-1]*2 && niz[i]===niz[i+1]-10) br++;
    }
    return br;
}
console.log(ck([10,20,30]))
