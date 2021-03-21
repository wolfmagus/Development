const form = document.mushroomKingdom

 //Listen for submit event
 mushroomKingdom.addEventListener("submit", function(event){
    event.preventDefault()
    
    const goomba = document.getElementById("goombaBox")
    const bobomb = document.getElementById("bobombBox")
    const cheep = document.getElementById("cheepBox")
    const totalOutput = document.getElementById("totalOutput")

    let cost = Number(goomba.value) * 5 + Number(bobomb.value) * 7 + Number(cheep.value) * 11 + " coins"

    totalOutput.textContent = cost
    
})


