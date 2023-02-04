// consturctor function for objects:

// ne moze arrow function;
function User(firstName,lastName,score) {
    this.firstName=firstName
    this.lastName=lastName
    this.score=score
    
}
const nikola = new User("Nikola" , "Bozovic" , 4);
console.log(nikola);



//svi objekti u js-u su povezani sa nekim prototip objektom.Svaki objekat ima prototip;


//prototype objekat koji sadrzi odredjena svojsta i metode.


User.prototype.incrementScore=function(){
    this.score+=1;
}
nikola.incrementScore();
console.log(nikola)

const obj4=new object ({
    name:"Aladin" , 
    age:19,

})
console.log(obj4)



