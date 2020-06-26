// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee{
    constructor(name,id,email,title,officeNumber){
    super(name,id,email,title)
    this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return this.title
    }
}
module.exports = Manager;