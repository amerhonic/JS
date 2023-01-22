const array = () => {
    const str = prompt("unesite potrebno voce: ")
    //const arr=Array.from()
    const arr =str.split(",")
    if(arr.some((el)=>el==="jagoda")){
        return `jagoda se nalazi na ${arr.indexOf("jagoda")+1}`
    }else {
        arr.sort() //menja redosled unutar postojeceg niza
        arr.unshift(10);
        arr.push(100);
        return arr;

    }
}
console.log(array())