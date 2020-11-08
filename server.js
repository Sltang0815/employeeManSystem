var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zoey0815!",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    departments();
});

function departments() {
    connection.query("SELECT name FROM departments", function (err, res) {
        if (err) throw err;

        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}