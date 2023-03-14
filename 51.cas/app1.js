const getComments = () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then((response)=> console.log(response))
    .catch((error)=> console.log(error));

}
getComments();
