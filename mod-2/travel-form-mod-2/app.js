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
    "\nThank you for choosing Maegus Airlines!");
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    formAlert()
})