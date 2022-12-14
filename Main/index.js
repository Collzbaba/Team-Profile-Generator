const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const inquirer = require("inquirer");
// import inquirer from "inquirer";
const fs = require("fs");



const OUTPUT_DIR = path.resolve(__dirname,"output");
const output = path.join(OUTPUT_DIR, "index.html");

const render = require("./lib/RenderHtml");


const employees = [];


employeeType = () => {
    console.log("What is the employee's role?");
    return inquirer.prompt([
        
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern',
                'Im finished',
            
            ],
        }
    ]).then(choice => {
        // if (choice.role === 'Engineer') {
        //     addEngineer();
        // } else {
        //     addIntern();
        // }
        switch (choice.role) {
            case 'Intern':
                console.log(choice.role);
                addIntern();
                break;
            case 'Engineer':
                console.log("addengineer");
                addEngineer();
                break;
            default:
                break;
        }
    })
};


addEngineer = () => {
    return inquirer.prompt([

      {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github, role } = engineerResults;
        const newEngineer = new Engineer(name, id, email, github, role);
        employees.push(newEngineer);

        addEmployee();
    });
};

addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school, role } = internResults;
        const newIntern = new Intern(name, id, email, school, role);
        employees.push(newIntern);
        
        addEmployee();
    });
};

addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Add another Team Member?",
            name: "add",
            choices: [
                "Yes",
                "No"
            ],
        }
    ]).then(choice => {
        if (choice.add === "Yes") {
            employeeType();
        } else {
            RenderHtml();
        };
    });
};

init = () => {
    console.log("Welcome! \nTo Generate a Team, \nAnswer the following prompts \nYour team will be organized in the \noutput folder team.html file.");
    return inquirer.prompt([
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber, role } = managerResults;
        const newManager = new Manager(name, id, email, officeNumber, role);
        employees.push(newManager);
        employeeType();
    })
};

RenderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Team HTML file created in OUTPUT folder!")
        };
    })
};

init();