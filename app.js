// // const hello =document.querySelector(".test");
// console.log(hello);
// const button =document.querySelector("button");
// console.log(button);
// const h4 = document.querySelector('#h1-4');
// console.log(h4);
// let curs = 15
// if (curs>14){
//     h4.style.color = "green";
// }else {
// h4.style.color = "red";
// }
// h4.innerHTML = "Hello world 1"
// h4.innerText = "Hello world 2"
// h4.textContent = "Hello world 3"
// h4.textContent = "Hello world 4"

// const h3 = document.querySelector('#h1-3');
// console.log(h3);
// h3.remove()
// button.remove();

const inputs = document.querySelectorAll("input");
const buttonSend = document.querySelector("button");
// DOM EVENTS(onclick,onchange,onfocus,onkeydown,onkeypress,onblur)
const userdata = {
    name:"salamat",
    email:"salamat@gmail.com",
    ps:"salamat7",

}

buttonSend.onclick = () => {
    if(inputs[1].value === userdata.email && inputs[2].value === userdata.ps) {
        alert("hello world "+userdata.name);
        inputs[1].style.border = ""
        inputs[2].style.border = ""

    }else (
        inputs[1].style.border = "1px solid red",
        inputs[2].style.border = "1px solid red"
    )

};