function divide (a,b) {
    try {  //desava se kad moze
        if (b===0) {      
        throw new Error("deljenje nulom nije moguce.");  // umesto reference errora pise ovo.
        }
        return a/b;
    }
    catch (error)  {
        console.log(error.message) 
    }
    finally {
        console.log()   //desava se uvek
      }

}