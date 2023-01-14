// napraviti funkciju koja  pravi novi niz gde ce se pozitivni elementi kvadrirati , negativni pomnoziti sa (-1) a ako se neki element pojavljuje vise puta u originalnom nizu  , na svako sledece pojavljivanje ce se u novom nizu dodati element  " ovde je bio duplikat"


const second = (arr) => {
    const newArr = []
    let br=0;
    for (let i=0;i<=arr.length;i++) {
    for (let j=i+1;j<=arr.length;j++) {
        if (arr[i]===arr[j]) br++;
        if (br>0) {
            newArr.push("ovde je bio duplikat");
        }
    }
    br=0;


     } return newArr;

}
console.log(second([5,2,3,1,4,5]))
brojevi = [5,32,1,24,12,3]

const brojevi1= brojevi.map((element,index) => {
    if (index===0 || index===3 || index === 5) {
        return element**2;
    } else return element;
})
console.log(brojevi1);


const numbers = [2,5,10,3,4,8] 

const numbers2=  numbers.map((element,index,arr)=> {
if (element%2===0) {
    return element **2;
} else {
    return+((arr[index-1] +element+arr[index+1])/3).toFixed(2);
}
})
console.log(numbers2);

//pomocu for petlje napraviti novi niz koji ce sadrzati samo godoine vece od 17.
