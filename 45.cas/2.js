arr1=[2,5,1,2,14];

const move=(arr,pos1,pos2) => {
    const element = arr[pos1]
    arr.splice(pos1,1);
    arr.splice(pos2,0);
    return arr;
}

console.log(move([10,20,30,40,50],0,2));