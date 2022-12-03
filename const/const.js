const zbir=(br) => {
    if (br>=1000 && br<=9999) {
        let suma=0;
        let cifre;
        let i=1;
        while (i<=4) {
            cifre = br%10;
            suma+=cifre;
            br=Math.floor(br/10);
            i++;
        }
        return suma;
    } else return "uneti broj nije cetvorocifren."
}
console.log(zbir(4212));
