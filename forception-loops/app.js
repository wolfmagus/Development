var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function forception(people, alphabet){

    for(var i = 0; i < people.length; i++ ){
        console.log(people[i])
        
        for(var i = 0; i < alphabet.length; i++ ){
            console.log(alphabet[i])
            
        }
        
    }
}

console.log(forception)