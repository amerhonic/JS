// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
    { title: "Inception", rating: 8, budget: "230M" },
    { title: "Interstelar", rating: 9, budget: "200M" },
    { title: "Godfather", rating: 9, budget: "280M" },
    { title: "Home Alone", rating: 4, budget: "300M" },
    { title: "Bad boys", rating: 8, budget: "180M" },
  ];
  

  const movies2 = movies.map((element) => {
    return {
        title:element.value,
        budget:element.budget
    }
  } )
  console.log(movies2);



const padanje = [
{

}   
]