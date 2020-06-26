// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Intern extends Employee{
    constructor(name,title,id,email,school){
    super(name,title,id,email)
    this.school = school;
    }
    getRole(){
        return this.title;
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;