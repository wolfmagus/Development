const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function combineArray(ppl, alph){

    const newArray = [];

    for(var i = 0; i < ppl.length; i++ ){
        newArray.push(ppl[i] + ":")
        

        for(var j = 0; j < alph.length; j++ ){
            newArray.push(alph[j])
        }
        
    }
    return newArray
}
console.log(combineArray(people, alphabet))