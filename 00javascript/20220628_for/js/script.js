console.log('ok1');

document.getElementsByClassName("box")[0].innerHTML = "안녕하세요.";

// let btn = document.getElementsByClassName("btn")[0];
// let box = document.getElementsByClassName("box")[0];

// let btn = document.querySelector("button.btn");
// let box = document.querySelector("div.box");

let btn = document.querySelectorAll("button.btn")[0];
let box = document.querySelectorAll("div.box")[0];


btn.addEventListener("click",function(){
    console.log('click');
    box.innerHTML = "안녕1.";
})

let han = ""
let num = 0;
let array = [1,2,3,4]