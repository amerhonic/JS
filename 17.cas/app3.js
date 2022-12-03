// trim () metoda brise razmake sa obe strane stringa.

const recenica = "              DA LI VAM JE HLADNO OVDE       ";
console.log(recenica);
console.log(recenica.length);
const recenica2 = recenica.trim();
console.log (recenica2);
console.log(recenica.length)

// postoje 3 metode za ekstraktovanje jednog karaktera nekog stringa:

// 1.charAt(index) - vraca nam karakter nekog stringa za poslatim indeksom.
// 2.charCodeAt(index) - vraca nam kod karaktera nekog stringa za poslatim indeksom.
// 3.string[index(036024)] - vrlo slicno charAt metodi (sa jedno razlikom). //undefined i NaN.
const novaRecenica = "spava mi se."
const char1 = novaRecenica.charAt(3)
const char11 = novaRecenica.charAt(43) // rezultat ce biti prazan string ""
console.log(char1);


const char2 = novaRecenica.charAt(3)
console.log(char2);


const char3 = novaRecenica[3];
const char33 = novaRecenica[23]; // rezulat je undefined //
console.log(char3)
console.log(char33)
