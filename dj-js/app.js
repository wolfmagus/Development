var box = document.getElementById('box')

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
}) 

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})

box.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})

box.addEventListener("mouseout", function(){
    backgroundColor = "orange"
})


//removed .which
window.addEventListener("keydown", function(event){
    if(event === 66){
        box.style.backgroundColor = "blue"
    } else if(event === 82){
        box.style.backgroundColor = "red"
    } else if(event=== 89){
        box.style.backgroundColor = "yellow"
    } else if(event === 71){
        box.style.backgroundColor = "green"
    }else if(event === 79){
        box.style.backgroundColor = "orange"
    }
  
})

//var box = document.getElementById('box')

//box.addEventListener("click", function(event){
    //console.log(event)
//})

//window.addEventListener("keydown", function(event){
    //if(event.which === 82){
        //box.style.backgroundColor = "red"
    //} else if(event.which === 66){
        //box.style.backgroundColor = "blue"
    //} else if(event.which === 71){
        //box.style.backgroundColor = "green"
    //}
//})

// The two objects provided when we link an HTML page to a JS page
// console.dir(document)
// console.dir(window)

//var divArr = document.getElementsByTagName("div")
//console.log(divArr)

//var myBtn = document.getElementById('my-btn')

//myBtn.addEventListener("click", generateH1ForRick)

//function generateH1ForRick(){
    // 1. Create an element
    //var myH1 = document.createElement("h1")

    // 2. Edit element (styling, events, classes, attribute, ect.)
    //myH1.tectContent = "Rick"
    //myH1.style.backgroundColor = "dodgerblue"

    // 3. Display it, (append it to the DOM)
    //var listDiv = document.getElementById("list")
    //listDiv.appendChild(myH1)
//}