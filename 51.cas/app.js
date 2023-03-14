// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1000)
//   }
//   //012
  
//   for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1000)
//   }
//   //333




                        //funkcija za prikupljanje podataka sa servera; //


// const getUsers = () => {
//  return fetch("https://jsonplaceholder.typicode.com/users")
//  .then((response)  => response)
//  .then ((data) => console.log(data))
//  .catch((error)=> console.log(error.message))
// // .finally(() => setTimeout(getUsers,1000*60*5))
// }
// getUsers();


                                //user sa datim id-em//
const getUsers = async () => {
    const users = await fetch (`https://jsonplaceholder.typicode.com/users${id}`);
    const data = await data.json;
    console.log(users);
}
getUsers(5);

//prikupiti usere , da vrati id, name , phone ,email malim slovima , website , adresa(suite,street)
const users2 = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users${id}`);
        const use = await data.json();
        const map = use.map((use) => {
            return {
                id:use.id,
                name:use.name,
                username:use.username,
                email:use.email.toLowerCase(),
                phone:use.phone,
                address: {
                    street:use.address.street,
                    suite: use.adress.suite,

                },

            };
        })
        return map;
}

users2().then((data)=> console.log(data))
.catch((error) => console.log(error));
