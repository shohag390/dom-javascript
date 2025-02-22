const tagName = document.getElementsByTagName('h3');

for (const tag of tagName) {
    tag.style.color = "green";
    tag.style.listStyle = "none"
}

// const lists = document.getElementsByClassName("list-item")
// for (const element of lists) {
//     element.style.color = "red"

// }

const lists = document.querySelectorAll(".list-item");
for (const list of lists) {
    list.style.color = "blue";
    list.style.listStyle = "none"
}

const listContanear = document.getElementById("list-contaner-two");
const li = document.createElement("li");
li.innerText = "List item-5";
console.log(li);
listContanear.appendChild(li)












