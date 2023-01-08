// splice () metoda je najmocnija alatka kod nizova u JS.


//omogucava nam promene u nizu na zeljenoj poziciji.
//1.Mozemo dodati (koliko hocemo) elemenata na nekom mestu.
//uzima najmanje dva argumenata.


// 2. Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu;


const niz = ["Dzenan" , "Bakir" , "Amer" , "Alen", "Hamed" , "Miona","Merisa"];



// niz.splice(2,3)
// console.log(niz);

// //prvi argument je indeks od kog krece da se brise , drugi argument je broj clanova koje zelimo da izbrisemo.

// //hocemo da dodamo tarika , 

// niz.splice(2,0,"Tarik");
// //dodo se tarik na drugom mestu , 0 ljudi izbrisano,covek koji se dodaje


//iz niza izbrisati sve devojke
//na petom elementu dodati tarika
//na kraju niza dodati omara

niz.splice(5,2);
niz.splice(4,0,"Tarik")
niz.push("Omar")
console.log(niz)

//console.log(niz.splice(2,3)) elementi koji su izbirani.

//slice() mteoda vraca deo niza;
const skraceniNiz  = niz.slice(3,5);
console.log(skraceniNiz);
// vraca novi niz sa uzetim delom originalnog niza

const skraceniNiz2 = niz.slice(5);
console.log(skraceniNiz2);

//sortiranja niza brojova i sortiranja niza stringova nije isto.

