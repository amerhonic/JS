// // console.dir(document);

// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);

// // document.title = "New Title";
// // // console.log(document.title);

// // // console.log(document.body);
// // // console.log(document.all);
// // // const headerTitle = document.all[10];
// // // console.log(headerTitle);

// // // headerTitle.textContent = "new logo";
// // // headerTitle.innerHTML = "<h1>new logo</h1>";

// // // console.log(document.forms);
// // // console.log(document.images);

// // // GET ELEMENT BY ID

// // // const headerTitle = document.getElementById("logo");
// // // console.log(headerTitle);

// // // headerTitle.textContent = "new logo";
// // // headerTitle.innerHTML = "<em>new logo</em>";

// // // PROMENA STILOVA

// // // headerTitle.style.borderBottom = "solid 3px #000";

// // // GET ELEMENTS BY CLASS NAME

// // // const containers = document.getElementsByClassName("container");
// // // // console.log(container);
// // // const container = containers[0];
// // // container.style.backgroundColor = "#ABABAB";
// // // container.style.border = "1px solid #f00";

// // // GET ELEMENTS BY TAG NAME

// // const listItems = document.getElementsByTagName("li");
// // // console.log(listItems);

// // // listItems.style.color = "blue"; ne radi na taj nacin, vec mora kroz iteraciju

// // // for (let i = 0; i < listItems.length; i++) {
// // //   if (i === 1) {
// // //     listItems[i].style.color = "brown";
// // //   } else {
// // //     listItems[i].style.color = "blue";
// // //   }
// // // }

// // // QUERY SELECTOR

// // const firstLogoId = document.querySelector("#logo");
// // const firstCont = document.querySelector(".container");
// // const firstLi = document.querySelector("li");

// // // console.log(firstLogoId);
// // // console.log(firstCont);
// // // console.log(firstLi);

// // // firstLi.textContent = "first item";

// // // const input = document.querySelector("input");
// // // input.value = "Hello World";

// // const input2 = document.querySelector("input[type='email']");
// // // input2.value = "test@test.com";
// // // input2.placeholder = "Unesite vasu email adresu";

// // // QUERY SELECTOR ALL

// // const listItems2 = document.querySelectorAll("li");
// // // console.log(listItems2);

// // // const evenLi = document.querySelectorAll("li:nth-child(even)");
// // // const oddLi = document.querySelectorAll("li:nth-child(odd)");

// // // for (let i = 0; i <= oddLi.length; i++) {
// // //   oddLi[i].style.backgroundColor = "blue";
// // //   evenLi[i].style.backgroundColor = "orange";
// // // }

// // // parentNode

// // // const title = document.getElementById("add");
// // // console.log(title.parentNode);

// // // parentElement

// // const title = document.getElementById("add");
// // console.log(title.parentElement);

// // // childNodes   (vraca sve elemente i razmake)

// // // const container = document.querySelector(".container");
// // // console.log(container.childNodes);

// // // children (vraca samo elemente)

// // // const container = document.querySelector(".container");
// // // console.log(container.children);

// // // firstElementChild

// // const container = document.querySelector(".container");
// // console.log(container.firstElementChild);

// // // lastElementChild
// // // nextElementSibling
// // // previousElementSibling

// // // createElement

// // const newDiv = document.createElement("div");

// // // add class

// // newDiv.className = "newDiv";

// // // add id

// // newDiv.id = "newId";

// // const textForNewDiv = (document.createTextNode = "Hello World");

// // newDiv.append(textForNewDiv);

// // container.appendChild(newDiv);

// // input2.setAttribute("placeholder", "Unesite vasu email adresu");





// ///             NASTAVAK                 ///



// // EVENTS 




// let button = document.querySelector("button");
// button.addEventListener("click" , buttonClicked)

// function buttonClicked(event) {
   
//    button.style.backgroundColor="red";
//    button.style.color = "purple";
// } 

// //ima mouseleave , mouseup , mouseenter , mousemove,keypress
// newDiv.addEventListener("dblclick" , runEvent);
// function runEvent (e) {
//     console.log("Type of event" + e.type)
// }



// let inputs = document.querySelectorAll("input")
// let input = inputs[1];
// // console.log(input);

// input.addEventListener("keypress" , getValue);
// function getValue (e) {
//     let itemValue = e.target.value;
//     console.log(itemValue)
// }


// let form = document.querySelector("form");
// form.addEventListener("submit" , getValues);
// function getValues (e) {
//     e.preventDefaults();
//     let inputs = document.querySelectorAll("input");
//     let itemName = inputs[1].value;
//     let email = inputs[2].value;
//     console.log(itemName)
//     console.log(email)
//     inputs[1].value = "";
//     inputs[2].value = "";
    
// }





const input = document.querySelector("#inpt");
const button1 = document.querySelector("#btn");
const list = document.querySelector(".hero");
const deleteBtn = document.querySelector(".buttons1");
const filter = document.querySelector("#filter");
const divs = document.querySelectorAll(".p");
const arr = [];
button1.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value != "") {
    const div = document.createElement("div");
    div.classList.add("item");
    const newItem = document.createElement("p");
    newItem.innerText = input.value;
    newItem.classList.add("p");
    div.appendChild(newItem);
    list.appendChild(div);
    input.value = "";
    const newBtn = document.createElement("button");
    newBtn.classList.add("buttons1"); //pricam ti pricu
    const newText = document.createElement("span");
    newText.innerText = "X";
    newText.classList.add("btn-text");
    newBtn.appendChild(newText);
    div.appendChild(newBtn);
    arr.push(newItem.innerText);
  }

  var deleteBtns = document.querySelectorAll(".buttons1");
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});

filter.addEventListener("input", function (event) {
  const value = document.querySelector("#filter");
  const text1 = value.value.toLowerCase();
  const list = document.querySelectorAll("p");
  list.forEach((item) => {
    let text = item.textContent.toLowerCase();

    if (!text.includes(text1)) item.parentElement.style.display = "none";
  });
  list.forEach((item) => {
    let text = item.textContent.toLowerCase();

    if (text.includes(text1)) item.parentElement.style.display = "";
  });
});

