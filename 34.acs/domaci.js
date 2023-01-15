 

// 1.pomocu for petlje napraviti novi niz koji ce sadrzati samo godoine vece od  17.



// 2. kod dzena.uzima dva argumenta salju se dva niza



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