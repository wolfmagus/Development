const addItUp = document.addition
const minus = document.subtraction
const multiply = document.multiplication

addItUp.addEventListener("submit", function(event){
    event.preventDefault()
    let add1 = addItUp.add1.value
    let add2 = addItUp.add2.value
    let sum = +add1 + +add2
    document.getElementById("addOutput").textContent = "The answer is " + sum
    
})
console.log(sum)

minus.addEventListener("submit", function(event){
    event.preventDefault()
    let sub1 = minus.sub1.value
    let sub2 = minus.sub2.value
    let dif = +sub1 - +sub2
    document.getElementById("subOutput").textContent = "The answer is " + dif
    

})

multiply.addEventListener("submit", function(event){
    event.preventDefault()
    let mult1 = multiply.add1.value
    let mult2 = multiply.add2.value
    let prod = +mult1 + +mult2
    document.getElementById("multOutput").textContent = "The answer is " + prod
    
})

