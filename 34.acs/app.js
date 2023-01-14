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