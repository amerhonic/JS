// number properties - konstante //


// sledecim knostatama mozemo pristupiti jedino pomocu number : 
//number property


// napomena :
//konstante ne mogu biti primenjene na varijable.

// 1. MAX_VALUE - vraaca najveci broj u JS.

const najveci = Number.MAX_VALUE;
console.log(najveci);

// isto moze i za min value

//2. POSITIVE_INFINITY  - vraca infinity


//3. NEGATIVE_INFINITY - VRACA -infinity

//4. NaN-.

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


function dva(jedan,dva){
    if((jedan>40&&jedan<60||jedan>70&&jedan<100)&&(dva>40&&dva<60||dva>70&&dva<100))return "da"
    else return "nisu"
}
console.log(dva(11,25))

