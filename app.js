const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer.js");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

function teamBuild(){
    inquirer.prompt(
        {
            type: "list",
            message:"Please select the employee's title",
            name:"title",
            choices:[
                "Manager","Engineer","Intern"
            ],
        }
    ).then(function({title}){
        if(title==="Intern"){
            createIntern();
        }if(title==="Manager"){
            createManager();
        }if(title==="Engineer"){
            createEngineer();
        }
        
    })
    
}

teamBuild();
function createManager(){
    inquirer
    .prompt([{
        type: "input",
        message: "Please enter the name of the manager",
        name:"managerName"
    },
    {
        type:"input",
        message:"Please input the manager's email",
        name:"managerEmail"
    },
    {
        type:"input",
        message:"Please input the manager's ID number",
        name:"managerId"
    },{
        type:"input",
        message:"Please input the manager's office number",
        name:"officeNumber"
    }
]).then(answers =>{
    const manager = new Manager(answers.managerName, "Manager", answers.managerId,answers.managerEmail, answers.officeNumber);
    teamMembers.push(manager);
    console.log(teamMembers);
    //createEngineer();
    //htmlBuild();
    //teamBuild();
    inquirer
            .prompt({
                type: "list",
                message:"Would you like to add another team member?",
                name:"newMember",
                choices:[
                    "yes","no"
                ]
            }).then(function({newMember}){
                if(newMember==="yes"){
                    teamBuild();
                }else{
                    htmlBuild();
                }
            })
})
}
function createEngineer(){
    inquirer
    .prompt([{
        type: "input",
        message: "Please enter the name of the Engineer",
        name:"engineerName"
    },
    {
        type:"input",
        message:"Please input the engineer's email",
        name:"engineerEmail"
    },
    {
        type:"input",
        message:"Please input the engineer's ID number",
        name:"engineerId"
    },{
        type:"input",
        message:"Please input the engineer's Github",
        name:"github"
    }
]).then(answers =>{
    const engineer = new Engineer(answers.engineerName,  "Engineer",answers.engineerId,answers.engineerEmail, answers.github);
    teamMembers.push(engineer);
    console.log(teamMembers);
    //htmlBuild()
    //teamBuild();
    inquirer
            .prompt({
                type: "list",
                message:"Would you like to add another team member?",
                name:"newMember",
                choices:[
                    "yes","no"
                ]
            }).then(function({newMember}){
                if(newMember==="yes"){
                    teamBuild();
                }else{
                    htmlBuild();
                }
            })
})
}
function createIntern(){
    inquirer
    .prompt([{
        type: "input",
        message: "Please enter the name of the Intern",
        name:"internName"
    },
    {
        type:"input",
        message:"Please input the intern's email",
        name:"internEmail"
    },
    {
        type:"input",
        message:"Please input the intern's ID number",
        name:"internId"
    },{
        type:"input",
        message:"Please input the intern's school",
        name:"school"
    }
]).then(answers =>{
    const intern = new Intern(answers.internName,"Intern",answers.internId,answers.internEmail, answers.school);
    teamMembers.push(intern);
    console.log(teamMembers);
    // htmlBuild()
    // createManager();
    //teamBuild();
    inquirer
            .prompt({
                type: "list",
                message:"Would you like to add another team member?",
                name:"newMember",
                choices:[
                    "yes","no"
                ]
            }).then(function({newMember}){
                if(newMember==="yes"){
                    teamBuild();
                }else{
                    htmlBuild();
                }
            })
})
}



function htmlBuild(){
    console.log(teamMembers);
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}



// ​inquirer
//     .prompt([{
//         type: "input",
//         message: "Please enter the name of the employee",
//         name:"name"
//     },
//     {
//         type: "list",
//         message:"Please select the employee's title",
//         name:"title",
//         choices:[
//             "Manager","Engineer","Intern"
//         ],
//     },
//     {
//         type:"input",
//         message:"Please input the employee's email",
//         name:"email"
//     },
//     {
//         type:"input",
//         message:"Please input the employee's ID number",
//         name:"id"
//     }
// ]).then(function({title}){
//     if(title === "Manager"){
//         inquirer.prompt({
//             type:"input",
//             message:"Please input the Employee's office number",
//             name:"office"
//         })
//     }if(title === "Engineer"){
//         inquirer.prompt({
//             type:"input",
//             message:"Please input the Employee's github ID",
//             name:"github"
//         })
//     }if(title === "Intern"){
//         inquirer.prompt({
//             type:"input",
//             message:"Please input the Employee's School",
//             name:"school"
//         })
//     }
// }).then(answers => {
//     const Intern = new Intern(answers.name,answers.id,answers.title,answers.email,answers.school);
//     const Manager = new Manager(answers.name,answers.id,answers.title,answers.email,answers.office);
//     const Engineer = new Engineer(answers.name,answers.id,answers.title,answers.email,answers.github);
//     teamMembers.push(Intern);
//     teamMembers.push(Manager);
//     teamMembers.push(Engineer);
//     console.log(teamMembers);
//     inquirer
//         .prompt({
//             type: "list",
//             message:"would you like to add another team member",
//             name:"new",
//             choices:[
//                 "yes","no"
//             ]
//         }).then(function(answers){
//             if(answers.new === "yes"){
//                 teamBuild();
//             }else{
//                 if(!fs.existsSync(OUTPUT_DIR)){
//                     fs.mkdirSync(OUTPUT_DIR)
//                 }
//                 fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//             }
//         })
//     //createTeam();
// });