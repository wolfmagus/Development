const h1 = document.createElement("h1");

h1.textContent = "JavaScript made this!!";
h1.className = "header";

document.getElementById("header").appendChild(h1);

var message = document.createElement("messages") 

const messages = document.getElementsByClassName("message");

for (var i = 0; i < messages.length; i++) {

messages[0].textContent = "You're great.";
messages[1].textContent = "Thanks!";
messages[2].textContent = "You're welcome.";
messages[3].textContent = "You're great too!";

}

messages.textContent = [i]

//var message = document.createElement("messages")

document.getElementById("clear-button").addEventListener('click', function(){
    
    for (var i = 0; i < messages.length; i++) {

        messages[0].textContent = "";
        messages[1].textContent = "";
        messages[2].textContent = "";
        messages[3].textContent = "";
        
        } 
})

//const messages = document.getElementsByClassName("message");


document.getElementsByClassName("message")

const subTitle = document.createElement("subTitle")

subTitle.innerHTML = '<span class="name">Aaron</span> wrote the JavaScript';

document.getElementById("header").appendChild(subTitle);










