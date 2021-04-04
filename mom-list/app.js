// //Create a form object linked to addItem by name
 const form = document.addItem

//Listen for submit event
form.addEventListener("submit", function(event){
    event.preventDefault()

    //Save the value entered. Then clear the value from box after entered.
    // Input box named title becomes a JS object.
    const inputBox = document.getElementById("title")
    //Variable todoText is equal to whatever value is entered into the input box.
    const todoText = inputBox.value
    addItemToList(todoText)
    form.title.value = ""
})

     //Adds an item to the list.
function addItemToList(item) {
    
    //Create a variable called grocery and give it a newly created li element.
    const list = document.getElementById("list")
    const grocery = document.createElement("li")
    const deleteButton = document.createElement("button")
    
    //Assign the attribute value as the content of grocery. 
    grocery.textContent = item 
    list.className = "list";
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete-button";
    
    deleteButton.addEventListener("click", function(event) {
        event.preventDefault()
        removeItem()
    })

    //Get the element with the id add-todo and append li to the list in the DOM. 
    document.getElementById("list").appendChild(grocery)
    grocery.append(deleteButton)

    function removeItem(){
    
        grocery.remove()
    }

}




// form.addEventListener("click", function(event){
//     event.preventDefault()
//     removeItem()
    
// })






// document.getElementById("delete-button").addEventListener("click", function(event){
//     event.preventDefault()
    
//     removeItemFromList()
    
// })

// function removeItemFromList(){
    
//     const deleteItem = document.getElementById("todoText");
//     deleteItem.removeChild(deleteItem.todoText.childNodes[0]);
// }




//form.addEventListener("click", function(deleteButtonFunc){
    
    //const deleteButtonFunc = 


    //document.getElementById("list").apppendChild("button")

//})

    //const editButton = document.createElement("button")

    //editButton = document.textContent = "edit"
    //editButton.className = "editButton"

    //document.getElementById("grocery").appendChild("edit")



//document.getElementById("add-todo").addEventListener("submit", function() {
//})

//function handleSubmit(event) {
    //eveny.preventDefault()
    //const inputBox = document.getElementById("title")
    //const todoText = inputBox.value
    //addItemToList(todoText)
    //inputBox.value = ""
//}

//function addItemToList(item) {

    //const list = document.getElementById("list")
    //const newLi = document.createElement("li")


