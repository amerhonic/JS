const brojevi = [-5,4,3,10,14,-5]
const brojevi1 = brojevi.map((nekako) => nekako < 0 ? nekako*(-1) : nekako*nekako);
console.log(brojevi1)

const brojevi2= brojevi.map((brighton) => brighton*brighton);
console.log(brojevi2);

const brojevi3=brojevi.map((manchester) => Math.sqrt(manchester))
console.log(brojevi3);

const stringovi = ["bakir" , "manchester osvaja" ,"brighton dobija" , "marchu spomenik da se digne"];
const string2=stringovi.map((kako) => kako.toUpperCase())
console.log(string2);


