const form = document.getElementById("airline-form");
//const submit = document.getElementById(submit);

function formAlert() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const location = document.getElementById("travel-location").value;
    var diet = [];

    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    
    } else if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    
    } else if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById("paleo").value);

    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + 
    "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    formAlert()
})



// const firstName = document.getElementById("firstName").value;
// const lastName = document.getElementById("lastName").value;
// const age = document.getElementById("age").value;
// const gender = document.getElementById("gender").value;
// const location = document.getElementById("travel-location").value;
// var diet = [];


//document.addEventListener("click", formAlert).submit();


// var lastName = document.getElementById("lastName").value;
//     var age = document.getElementById("age").value;
//     var gender = document.getElementById("gender").value;
//     var location = document.getElementById("travel-location").value;

// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;

// //var query = document.querySelector;

// function formAlert() {
//     var firstName = form.elements["firstName"].value;
//     var lastName = form.elements["lastName"].value;
//     var age = form.elements["age"].value;
//     var gender = form.elements["gender"].value;
//     var location = form.elements["travel-location"].value;
//     var diet = {};
//     if (form.elements['vegan'].checked) {
//         var diet.pop(document.getElementById("vegan").value);
//     }
//     if (form.elements['gluten'].checked) {
//         diet.push(document.getElementById('gluten').value);
//     }
//     if (form.elements['paleo'].checked) {
//         diet.push(document.getElementById('paleo').value);
//     }


//     alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
// }


// submit.addEventListener("click", formalert);