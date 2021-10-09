from uuid import uuid1
from Database import Database


class Employee:
    # TODO: populate the list with data
    employees = []

    def __init__(self, fname, lname, age, dept_id, salary):
        self.id = uuid1().hex
        self.fname = fname
        self.lname = lname
        self.age = age
        self.dept_id = dept_id
        self.salary = salary

        # TODO: insert element into database
        department_found = Department.department_found(dept_id)

        if department_found:
            inserted = Database.insert_employee(
                self.id,
                self.fname,
                self.lname,
                self.age,
                self.dept_id,
                self.salary
            )

            if inserted:
                Employee.employees.append(self)
                print("Employee is inserted successfully!")
        else:
            print("Employee id is not found!")

    def __str__(self):
        return f"""
            ID:         {self.id}
            Name:       {self.fname} {self.lname}
            Age:        {self.age}
            Department: {self.dept_id}
            Salary:     {self.salary}
        """

    @staticmethod
    def find_emp_index(id):
        for i in range(len(Employee.employees)):
            if Employee.employees[i].id == id:
                return i

        return None

    @staticmethod
    def transfer(emp_id, new_dept_id):
        emp_found = Employee.employee_found(emp_id)
        dept_found = Department.department_found(new_dept_id)

        if emp_found and dept_found:
            # TODO: update database
            transfered = Database.transfer_employee(emp_id, new_dept_id)

            if transfered:
                index = Employee.find_emp_index(id)
                Employee.employees[index].dept = new_dept_id
                print('Employee is Transfered')
        else:
            print('Employee or department id is not found!')

    @ staticmethod
    def fire(emp_id):
        emp_found = Employee.employee_found(emp_id)

        if emp_found:
            # TODO: delete from database
            deleted = Database.delete_employee(emp_id)

            if deleted:
                index = Employee.find_emp_index(id)
                del Employee.employees[index]
                print("Employee successfully deleted")
        else:
            print("Employee id is not found")

    @ classmethod
    def show(cls, id):
        index = Employee.find_emp_index(id)

        if index != None:
            print(Employee.employees[index])
        else:
            print("Employee id is not found!")

    @ staticmethod
    def list_all():
        if len(Employee.employees):
            for emp in Employee.employees:
                print(emp)
        else:
            print("No Employees are found")

    @ staticmethod
    def employee_found(emp_id):
        for emp in Employee.employees:
            if emp.id == emp_id:
                return True

        return False


class Manager(Employee):
    def __init__(self, fname, lname, age, dept_id, salary, managed_dept):
        super().__init__(fname, lname, age, dept_id, salary)
        self.managed_dept = managed_dept

    def __str__(self):
        return f"""
            ID:                 {self.id}
            Name:               {self.fname} {self.lname}
            Age:                {self.age}
            Department:         {self.dept_id}
            Salary:             confidential
            Managed Department: {self.managed_dept}
        """


class Department:
    # TODO: populate the list with data
    departments = []

    def __init__(self, name, manager_id):
        self.id = uuid1().hex
        self.name = name
        self.manager_id = manager_id

        manager_found = Employee.employee_found(manager_id)

        if manager_found:
            inserted = Database.insert_department(
                self.id,
                self.name,
                manager_id
            )

            if inserted:
                Department.departments.append(self)
                print("Department is inserted successfully!")
        else:
            print("Manger id is not found!")

    @staticmethod
    def department_found(department_id):
        for dept in Department.departments:
            if dept.id == department_id:
                return True

        return False

    @staticmethod
    def list_all():
        for dept in Department.departments:
            print(dept)

    def __str__(self):
        return f"""
            Department ID:          {self.id}
            Department Name:        {self.name}
            Department Manager ID:  {self.manager_id}
        """

# print('Createing Objects')
# emp1 = Employee('mah', 'met', 20, 'd1', 200)
# emp2 = Employee('moh', 'met', 28, 'd2', 394)
# emp3 = Employee('ahm', 'medo', 30, 'd3', 32493)

# print('\nlist all employees')
# Employee.list_employees()

# print('\n transfer emp1 to d3')
# emp1.transfer('d3')

# print('\nlist all employees')
# Employee.list_employees()

# print('\nshow each employee')
# Employee.show(emp1.id)
# Employee.show(emp2.id)
# Employee.show(emp3.id)
# print('\nshow not exist employee')
# Employee.show(123)

# print('\nfire emp2')
# Employee.fire(emp2.id)
# print('\fire not exist employee')
# Employee.fire(123)

# print('\nlist all employees')
# Employee.list_employees()
