console.log(document.domain)
// console.dir(document)
console.log(document.title)
console.log(document.body)
// const headerTitle = document.all;
// headerTitle.innerHTML="<h1>new logo</h1>"

// get element by id 


// const headerTitle= document.getElementById("logo")
// console.log(headerTitle)
// headerTitle.textContent="dajgi logo"
// headerTitle.innerHTML = "<em>new logo </em"

// const cont = document.getElementsByClassName("hero");
// console.log(cont)
// const contt = cont[0];
// contt.style.backgroundColor = "orange";
// contt.style.borderColor = "black";

const listItems = document.getElementsByTagName("li")

for (let i=0;i<listItems.length;i++) {
    if (i===1) {
    listItems[i].style.color="brown";
    }
    else {
        listItems[i].style.color="blue";
    }
}

const glava = document.querySelector("#logo")
const I = document.querySelector(".container")
const d = document.querySelector("input");


const input2 = document.querySelector("input[type =`email`]")
input2.placeholder = "Enter your email";

const listItems2 = document.querySelector("li")

const evenLi= document.querySelector("li:nth-child(even)");
const oddLi = document.querySelector("li:nth-child(odd)");

for (let i=0; i < oddLi.length;i++) {
    oddLi[i].style.backgroundColor = "blue";
    evenLi[i].style.backgroundColor = "orange"
}