const formAdd = document.addition
const formSub = document.subtraction
const formMult = document.multiplication

 //Listen for submit event
formAdd.addEventListener("submit", function(event){
    event.preventDefault()
    const addBox1 = document.getElementById("addBox1")
    const addBox2 = document.getElementById("addBox2")
    const addOutput = document.getElementById("addOutput")

    let sum = Number(addBox1.value) + Number(addBox2.value)

    addOutput.textContent = sum
    
})


//Listen for submit event
formSub.addEventListener("submit", function(event){
    event.preventDefault()
    const subBox1 = document.getElementById("subBox1")
    const subBox2 = document.getElementById("subBox2")
    const subOutput = document.getElementById("subOutput")

    let dif = Number(subBox1.value) - Number(subBox2.value)

    subOutput.textContent = dif
    
})

//Listen for submit event
formMult.addEventListener("submit", function(event){
    event.preventDefault()
    const multBox1 = document.getElementById("multBox1")
    const multBox2 = document.getElementById("multBox2")
    const multOutput = document.getElementById("multOutput")

    let mult = Number(multBox1.value) * Number(multBox2.value)

    multOutput.textContent = mult
    
})

