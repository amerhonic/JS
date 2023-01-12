const addSomething = (num) => {
    let newNum="";
    for (let i=0;i<num.length-1;i++) {
        if (num[i]%2===0 && num[i+1] % 2===0) {
            newNum+=num[i] + "-";

    } else {
newNum+=num[i];
    }
}
return newNum;
};
console.log(addSomething("0205668"));