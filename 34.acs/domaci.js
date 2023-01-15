 

// 1.pomocu for petlje napraviti novi niz koji ce sadrzati samo godoine vece od  17.







const godine = [2,6,22,44,16,15,12,49,24,22];
const godinicie = (arr) => {
    const puno = [];
    for (let i=0;i<godine.length;i++) {
        if (godine[i]>17) {
            puno.push(godine[i]);
        }
    }return puno;
}
console.log(godinicie(godine))


// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const pomoc = (a,a1) => {
    let pomocni = []
    const parni = []
    let n;
    let k=0;
    n=DATA1.length+DATA2.length;

   for (let i=0;i<DATA1.length;i++) {
        pomocni.push(DATA1[i]);
        
        }
        for (i=0;i<DATA2.length;i++) {
            pomocni.push(DATA2[i]);
        }

        for (i=0;i<n;i++) {
            if (pomocni[i]%2===0) {
                parni.push(pomocni[i]);
            }
        }
        return parni;
        

}

console.log(pomoc(DATA1,DATA2))