var points = [3, 5, 2, 8, 1,];

function numOrder() {
  var i, j, k;
    for (i = points.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = points[i]
      points[i] = points[j]
      points[j] = k
      console.log(points)
    }
    return points
  }

  console.log(numOrder())

  
  var fruitArray = ["apple", "orange", "grapes", "banana", "plum"];
var characterFilter = fruitArray.filter(filterFunction);



function filterFunction(array, char) {
  
  let emptyArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].includes(char)){
      emptyArray.push(array[i])
    }
  }
  
  return emptyArray


}
  console.log(filterFunction(fruitArray, "u"))


var num2 = 2;
var num3 = 3;

function isDivisible(){
     
  if (num3 % num2 === 0){
     console.log("num3 is divisible by num2")
   } else { num3 % num2 != 0 
     console.log("num3 is not divisible by num2")
   }
}

console.log(isDivisible())















  


