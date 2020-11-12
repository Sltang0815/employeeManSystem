const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zoey0815!",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    menu();
});


function menu() {
    inquirer.prompt(
        {
            type: "list",
            message: "what would you like to do?",
            name: "choices",
            choices: ["add department", "add roles", "add employees", "view department", "view roles", "view employees", "update employees"]
        }
    ).then(function (answers) {
        switch (answers.choices) {
            case "add department":
                addDepartments();
                break;
            case "add roles":
                addRole();
                break;
            case "add employees":
                addEmployees();
                break;
            case "view department":
                departments();
                break;
            case "view roles":
                role();
                break;
            case "view employees":
                employees();
                break;
            case "update employees":
                updateEmployees();
                break;



        }

    });

}


// DEPARTMENT SECTION INFO

function departments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;

        // Log all results of the SELECT statement
        console.table(res);
        menu();
    });
};

// ADDING A DEPATMENT
function addDepartments() {
    inquirer.prompt(
        {
            type: "input",
            message: "what department do you work in?",
            name: "name",

        },


    ).then(function (answers) {
        connection.query(
            "INSERT INTO departments SET ?",
            {
                store: answers.name,
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " departments inserted!\n");
                menu();
            }
        )

    });
};







// EMPLOYEE SECTION INFO
function employees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;

        // Log all results of the SELECT statement
        console.table(res);
        menu();
    });
};

//ADDING AN EMPLOYEE
function addEmployees() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your first name?",
            name: "firstName",

        },
        {
            type: "input",
            message: "what is your last name?",
            name: "lastName",

        },
        {
            type: "number",
            message: "what is your role id?",
            name: "role",

        },
        {
            type: "number",
            message: "what is your manager id?",
            name: "manager",

        },


    ]).then(function (answers) {
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: answers.firstName,
                last_name: answers.lastName,
                role_id: answers.role,
                manager_id: answers.manager
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " employee inserted!\n");
                menu();
            }
        )

    });
};


// ROLE SECTION INFO
function role() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;

        // Log all results of the SELECT statement
        console.table(res);
        menu();
    });
};

//ADDING A ROLE
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your title?",
            name: "title",

        },
        {
            type: "number",
            message: "what is your salary?",
            name: "salary",

        },
        {
            type: "number",
            message: "what is your department id?",
            name: "department_id",

        },



    ]).then(function (answers) {
        connection.query(
            "INSERT INTO roles SET ?",
            {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department_id

            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " roles inserted!\n");
                menu();
            }
        )

    });
};

function updateEmployees() {
    connection.query("UPDATE employee SET ? WHERE ?",
        {
            type: "list",
            name: "employee",
            message: "who would you like to change?"

        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee updated!\n");
        });

}

