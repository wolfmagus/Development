var employees = [];

function Employee(name, job, salary, status ){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
    //this.printEmployeeForm = function(){
        //console.log(Employee())
//}

this.speak = function printEmployeeForm() {
  console.log(this.name, this.job, this.salary, this.status);
}

}
var roger = new Employee("Roger", "Chef", "$20/hour", "Status: Full Time" )
var sally = new Employee("Sally", "Register", "$8/hour", "Status: Full Time")
var kevin = new Employee("Kevin", "Manager", "$30/hour", "Status: Full Time")


var roger = new Employee("Roger", "Chef", "$20/hour", "Status: Part Time")

roger.speak();
sally.speak();
kevin.speak();

employees.push(roger,sally,kevin)
console.log(employees)


