let body = document.querySelector("body");
body.style.backgroundColor = "rgba(211,211,211)"

let title = document.querySelector("#title");
title.style.color = "green";

let subTitle = document.querySelectorAll("h3").forEach(item =>
    item.innerHTML=item.textContent.toLocaleUpperCase())

let addition = document.createElement("li")
addition.appendChild(document.createTextNode("Avocado"))
let avocado = document.getElementById("avocado").appendChild(addition)

let addition2 = document.createElement("li")
addition2.appendChild(document.createTextNode("Broccoli"))
let broccoli = document.getElementById("broccoli").appendChild(addition2)