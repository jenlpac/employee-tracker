INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Enineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Sales Person', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('AR/AP Clerk', 90000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sharon', 'Estep', 1, null),
    ('Michelle', 'Mora', 2, 1),
    ('Wayne', 'Russell', 3, null),
    ('Mario', 'Martinez', 4, 3),
    ('Ben', 'Affleck', 5, null),
    ('Sara', 'James', 6, 5),
    ('Joe', 'Kampa', 7, null),
    ('Joe', 'Melton', 8, 7);
