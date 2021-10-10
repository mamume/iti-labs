from Employee import Employee, Manager
from Department import Department
from Database import Database
import yaml

# Get database configuration from yaml file
stream = open("./db_info.yml", 'r')
data = yaml.load(stream, Loader=yaml.FullLoader)

host = data['host']
db_name = data['db_name']
user = data['user']
password = data['password']

# Set configuration
Database(host, db_name, user, password)
# Connect to database
Database.connect()
# Initialize Database tables
Database.initialize_db()
# Load Database data into classes
Department.load_data()
Employee.load_data()

ans = 'y'
while ans.lower() == 'y':
    operation = input(
        '\nEnter Operation (add, transfer, fire, show_details, list_all): ')

    operation = operation.lower()
    if operation == 'add':
        add_type = input('Enter d for department or e for employee: ')

        if add_type.lower() == 'd':
            dept_name = input('Name: ')
            dpt = Department(dept_name)
            Database.insert_department(dpt.id, dpt.name)

        elif add_type.lower() == 'e':
            fname = input('First Name: ')
            lname = input('Last Name: ')
            age = int(input('Age: '))
            dept_id = input('Department ID: ')
            salary = float(input('Salary: '))

            role = input('Role m for manager or e for employee: ')
            if role == 'e':
                try:
                    emp = Employee(
                        fname=fname,
                        lname=lname,
                        age=age,
                        salary=salary,
                        dept_id=dept_id,
                        managed_id=None
                    )
                    Database.insert_employee(
                        id=emp.id,
                        fname=emp.fname,
                        lname=emp.lname,
                        age=emp.age,
                        salary=emp.salary,
                        dept_id=emp.dept_id,
                    )
                except:
                    print('Department is is not found\nOperation Failed!')

            elif role == 'm':
                managed_id = input("Managed Department ID: ")
                try:
                    manager = Manager(
                        fname=fname,
                        lname=lname,
                        age=age,
                        dept_id=dept_id,
                        salary=salary,
                        managed_id=managed_id
                    )

                    Database.insert_employee(
                        id=manager.id,
                        fname=manager.fname,
                        lname=manager.lname,
                        age=manager.age,
                        salary=manager.salary,
                        dept_id=manager.dept_id,
                        managed_id=manager.managed_id
                    )
                except:
                    print('Department is is not found\nOperation Failed!')
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
