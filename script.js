let bgColor = prompt("Enter body backgtound color:");
let textColor = prompt("Enter text color");

let pharagraph = document.getElementById("textArea");
pharagraph.style.backgroundColor = bgColor;
pharagraph.style.color = textColor;

document.body.style.backgroundColor = bgColor;