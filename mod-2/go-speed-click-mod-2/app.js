let btn = document.getElementById("counter");
let newCount = document.getElementById("count");
let newCount2 = document.getElementById("count2");

let count = 0;

function clickCount(){
  count++
  localStorage.setItem("count", count)
  newCount.textContent = count
}

function stopCounting(){
  if(localStorage.getItem("count")){
    localStorage.setItem("count2", count)
    //newCount2.textContent = count
    //count2.textContent = localSorage.getItem("count")

  }
  //btn.removeEventListener("click", clickCount)
}

function replacementNum(){
  newCount.textContent = localStorage.getItem("count")
}

btn.addEventListener("click", clickCount)

setTimeout(stopCounting, 10000)
setTimeout(replacementNum, 50)






// let button = document.getElementById("click")
 
// let count = 0;

//   button.onclick = function() {
//   count += 1;
//   list.innerHTML = "Go Speed Go! : " + count;
//   let storeClicks = localStorage.setItem("numOfClicks", count)
//   }
  
    // if(count > 0){
    
    // list.innerHTML = ""
    // //button.onclick = list.append(localStorage.getItem("numOfClicks"))
    // list.append(localStorage.getItem("numOfClicks"))
    // }
    // let count = 0; 

    // if(localStorage.getItem("numOfClicks")) {
      // button.onclick = function() {
      //   count += 1;
      //   list.innerHTML = "Go Speed Go! : " + count;
      //   localStorage.setItem("numOfClicks", count)
      
  //       count.textContent = localStorage.getItem("numOfClicks")
  //     localStorage.setItem("numOfClicks", count)
  //     list.innerHTML = ""
  //     list.append(localStorage.getItem("numOfClicks"))
  //  }

  //  let button = document.getElementById("click")
 
  // button.onclick = function() {
  // count += 1;
  // list.innerHTML = "Go Speed Go! : " + count;
  // let storeClicks = localStorage.setItem("numOfClicks", count)
  // }
  
  //}

// let button = document.getElementById("click")
//   count = 0;

//   button.onclick = function() {
//   count += 1;
//   list.innerHTML = "Go Speed Go! : " + count;

//   //Loop to create lasting effect?
  
//   localStorage.setItem("numOfClicks", count)
  
//   let numOfClicks = localStorage.getItem("numOfClicks")
  
  //document.getElementById("list").append(numOfClicks)
  
  //document.getElementById("list2").append(list)
  
  //localStorage.removeItem("numOfClicks")
//}

  
  // list2 = document.getElementById("list2") 
  // list2 = localStorage.getItem("numOfClicks")
  // list.innerHTML = "Go Speed Go! : " + count;
  //Loop to create lasting effect?
  
 
  
 
  
  //document.getElementById("list").append(numOfClicks)
  
  //document.getElementById("list2").append(list)
  
  //localStorage.removeItem("numOfClicks")
//}


