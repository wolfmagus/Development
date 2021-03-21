const xhr = new XMLHttpRequest()
//      method               url                  ansyc?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        //pass data to pokemonArray?
       // addPokemonData(data.objects[0].pokemon)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)

        console.log(typeof data)
        console.log(data)
        console.log(xhr.responseText)
    }
    
}

function showData(pokemon){
    
    for (let i = 0; i < pokemon.length; i++) {

    const h1 = document.createElement('h1')
    h1.textContent = pokemon[i].name
    document.body.appendChild(h1)

    }
}

//console.log(showData())
// //Take data from request and make it the value of the array
// function addPokemonData(pokemon){

//     let pokemonArray = [];
//     pokemonArray.push(data[0])


// }

// const pokeDex= pokemonArray.map(function pokemonPrint(pokemon){

//     for (let i = 0; i < pokemon.length; i++) {

//         const h1 = document.createElement('h1')
//         h1.textContent = pokemon.length
//         document.body.appendChild(h1)

// }
// const showPokemonData = pokemon.map(function(pokemon){

//     const h1 = document.createElement('h1')
//     h1.textContent = pokemon.name
//     document.body.appendChild(h1)

//  })
// const printPokemon = celebs.map(function(print){
//     const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data)
//         console.log(typeof data)
//  })


//  xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data)
//         console.log(typeof data)
//     }

    //  else if(xhr.readyState === 4 && xhr.status !== 200){
    //     console.log(xhr.responseText)
    // }

//}
// const goToMatrix = celebs.map(function(celeb){

//     if(celeb.age >= 18){
//         return `${celeb.name} can go to The Matrix.`
//     } else if(celeb.age < 18){
//         return `${celeb.name} is under age!`
//     }

//  })

// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://swapi.co/api/people/1", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText)
//     }
// }