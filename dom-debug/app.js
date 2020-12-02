const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(event){
    const subItem = createSubItem(event)
    document.getElementById("list").appendChild(subItem)
}) 

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("onchange", function(event){
        event.target.parent.backgroundColor = event.target.value
    })
    return dropDown
}

function createSubItem(event){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}