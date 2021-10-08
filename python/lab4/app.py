from Employee import Employee
from Manager import Manager

ans = 'y'

while ans.lower() == 'y':
    operation = input(
        'Enter Operation (\nadd, transfer, fire, show_details, list_all): ')

    # require python 3.10 or newer
    match operation:
        case 'add':
            fname = input('First Name: ')
            lname = input('Last Name: ')
            age = int(input('Age: '))
            dept = input('Department: ')
            salary = float(input('Salary: '))
            role = input('Role m for manager or e for employee: ')
            if role == 'e':
                emp = Employee(fname, lname, age, dept, salary)
                print(f"Employee successfully added with id: {emp.id}")
            elif role == 'm':
                managed_dept = input("Managed Department: ")
                manger = Manager(fname, lname, age, dept, salary, managed_dept)
                print(f"Manager successfully added with id: {manger.id}")
            else:
                print("Wrong role input")

        case 'transfer':
            id = input("ID: ")
            new_dept = input("New Department: ")
            Employee.transfer(id, new_dept)

        case 'fire':
            id = input("ID: ")
            Employee.fire(id)

        case 'show_details':
            id = input("ID: ")
            Employee.show(id)

        case 'list_all':
            Employee.list_employees()

        case _:
            print("Invaild Operation!")

    ans = input("Press y to make another operation or any key to exit: ")
