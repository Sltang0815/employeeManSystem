DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE departments(
    id INT PRIMARY KEY(id),
    store VARCHAR (30)NOT NULL
    
);

CREATE TABLE roles (
    id INT PRIMARY KEY(id),
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee(
    id INT PRIMARY KEY(id),
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT,
    manager_id INT
);

INSERT INTO  departments (stores)
VALUE ("K-Mart");

INSERT INTO  roles (title, salary, department_id)
VALUE ("manager", 30.50, 123);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUE ("steven", "tang", 23, 234);

