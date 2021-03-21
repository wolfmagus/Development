// //Create a form object linked to mathForm by name
 const form = document.mathForm

 

 //Listen for submit event
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    //Assign empty array to addition answer li and add id.
    answerStorage1.value = [];
    resultList.className = "list";
    answerStorage1.id = "add-result";      
    
    //Get input boxes from html 
    const inputBox1 = document.getElementById("num1")
    const inputBox2 = document.getElementById("num2")
    //Make the input box values equal to 
    const enteredValue1 = inputBox1.value
    const enteredValue2 = inputBox2.value
    
    addition(enteredValue1, enteredValue2)

    form.numVal1.value = ""
    form.numVal2.value = ""
})

//This function needs to take two numeric values
function addition(item1, item2){

    //Get result ul from html and create li element.
    const resultList = document.getElementById("result")
    const answerStorage1 = document.createElement("li")
    const answerStorage2 = document.createElement("li")
    
    //Assign empty array to addition answer li and add id.
    answerStorage1.value = [];
    resultList.className = "list";
    answerStorage1.id = "add-result";    
    //Count through answers in array  
    
    for(let i = 0; i < answerStorage1.length; i++ ){
        additionAnswer = Number(answerStorage1.length[i].value) 
        
        for(let i = 0; i < answerStorage2.length; i++ ){
            additionAnswer = additionAnswer + Number(answerStorage2.length[i].value)
        }
    }
    
    //Get the element with the id add-todo and append li to the list in the DOM. 
    document.getElementById("result").append(additionAnswer)
    
    }


return Number(numVal1.value) + Number(numVal2.value)
console.log(player.inventory[i].name)















// function add(num1, num2){
//     return Number(numVal1) + Number(numVal2)
// }

// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")
// console.log(add())
// console.log(additionAnswer)
    
//mathFunctionAdd()
    
    
    
    

    

