//JSON javascript object notation

//JSON je format za skladistenje i prenos podataka
//najcesce se koristi kada se podaci salju sa servera ka WEB stranici

//json podaci su vrlo slicni js objektu i one se zapisuju:

//kets/names zahtevaju duple navonike za razliku od



// const person = {
//     "firstName":"Amer",
//     "lastName" : "Honic",
//     "age":19
// }


//1.JSON.stringify()
//JSON.stringify() pretvara nas objekat u JSON format pa JSON u string.
//koristi se za slanje podataka

const strObject =JSON.stringify(person)
console.log(strObject)



// 2. JSON.parse()
//analizira se neki string i u slucaju mogucnosti pretvara objekat (nama citljiv podatak)


const obj=JSON.parse(strObject)
console.log(obj)

