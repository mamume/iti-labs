from Company import Employee, Manager, Department
from Database import Database
import yaml

# TODO: Get data from yaml file
stream = open("db_info.yml", 'r')
data = yaml.load(stream)
print(data)

host = data['host']
db_name = data['db_name']
user = data['user']
password = data['password']

Database(host, db_name, user, password)
Database.connect()
Database.initialize_db()

ans = 'y'

while ans.lower() == 'y':
    operation = input(
        '\nEnter Operation (add, transfer, fire, show_details, list_all): ')

    if operation == 'add':
        add_type = input('Enter d for department or e for employee: ')

        if add_type.lower() == 'd':
            dept_name = input('Name: ')
            manager_id = input('Manager ID: ')
            Department(dept_name, manager_id)
        elif add_type.lower() == 'e':
            fname = input('First Name: ')
            lname = input('Last Name: ')
            age = int(input('Age: '))
            dept_id = input('Department ID: ')
            salary = float(input('Salary: '))
            role = input('Role m for manager or e for employee: ')
            if role == 'e':
                emp = Employee(fname, lname, age, dept_id, salary)
                # print(f"Employee successfully added with id: {emp.id}")
            elif role == 'm':
                managed_dept = input("Managed Department: ")
                manger = Manager(fname, lname, age, dept_id,
                                 salary, managed_dept)
                # print(f"Manager successfully added with id: {manger.id}")
            else:
                print("Wrong role input")
        else:
            print("Invalid input!")

    elif operation == 'transfer':
        emp_id = input("Employee ID: ")
        new_dept_id = input("New Department ID: ")
        Employee.transfer(emp_id, new_dept_id)

    elif operation == 'fire':
        id = input("ID: ")
        Employee.fire(id)

    elif operation == 'show_details':
        id = input("ID: ")
        Employee.show(id)

    elif operation == 'list_all':
        list_type = input('Enter d for department, e for employees: ')

        if list_type.lower() == 'd':
            Department.list_all()
        elif list_type.lower() == 'e':
            Employee.list_all()
        else:
            print('Invalid Input!')

    else:
        print("Invaild Operation!")

    ans = input("Press y to make another operation or any key to exit: ")

Database.close_connection()
