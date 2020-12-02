var userName = "aaron";
var nameLength = userName.length


function lowerToUpperCase(name){
    
    var allCaps = name.toUpperCase()
    var allLower = name

    return allCaps.concat(allLower)

  
}

 console.log(lowerToUpperCase(userName))

 

 function halfString(name){

    return (Math.floor(name.length/2))

 }

 console.log(halfString(userName))



  function firstHalf(name){
     
    if (nameLength % 2 != 0) {
       return name.slice(0, nameLength/2);
     }
 }
  console.log(firstHalf(userName))



  function firstHalfCapital(name){
     
    var string1 = name.slice (0, nameLength/2).toUpperCase();
    var string2 = name.slice (nameLength/2)

    if (nameLength % 2 != 0) {
       
       return string1.concat(string2)
       
     }
 }
  console.log(firstHalfCapital(userName))