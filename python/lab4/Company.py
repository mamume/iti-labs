# from shortuuid import uuid
from Database import Database
from uuid import uuid1


class Employee:
    employees = []

    def __init__(self, fname, lname, age, salary, dept_id, managed_id, id=None):
        self.id = id if id else uuid1().hex[:8]
        self.fname = fname
        self.lname = lname
        self.age = age
        self.dept_id = dept_id
        self.salary = salary
        self.managed_id = managed_id

        department_found = Department.department_found(dept_id)

        if department_found:
            Employee.employees.append(self)
        else:
            raise Exception("Department id is not found!")

    def __str__(self):
        return f"""
            ID:             {self.id}
            Name:           {self.fname} {self.lname}
            Age:            {self.age}
            Department ID:  {self.dept_id}
            Salary:         {self.salary}
        """

    @staticmethod
    def load_data():
        employees_data = Database.get_all_employees()

        for emp in employees_data:
            if emp[6]:
                Manager(
                    id=emp[0],
                    fname=emp[1],
                    lname=emp[2],
                    age=emp[3],
                    salary=emp[4],
                    dept_id=emp[5],
                    managed_id=emp[6]
                )
            else:
                Employee(
                    id=emp[0],
                    fname=emp[1],
                    lname=emp[2],
                    age=emp[3],
                    salary=emp[4],
                    dept_id=emp[5],
                    managed_id=emp[6]
                )

        print("Employees Data loaded Successfully!")

    @staticmethod
    def find_emp_index(id):
        for i in range(len(Employee.employees)):
            if Employee.employees[i].id == id:
                return i

        return False

    @staticmethod
    def transfer(emp_id, new_dept_id):
        employee_found = Employee.employee_found(emp_id)
        dept_found = Department.department_found(new_dept_id)

        if employee_found and dept_found:
            transfered = Database.transfer_employee(emp_id, new_dept_id)

            if transfered:
                index = Employee.find_emp_index(emp_id)
                Employee.employees[index].dept_id = new_dept_id
                print('Employee is Transfered')
        else:
            print('Employee or department id are not found!')

    @ staticmethod
    def fire(emp_id):
        employee_found = Employee.employee_found(emp_id)

        if employee_found:
            # TODO: delete from database
            deleted = Database.delete_employee(emp_id)

            if deleted:
                index = Employee.find_emp_index(emp_id)
                del Employee.employees[index]
                print("Employee successfully deleted")
        else:
            print("Employee id is not found")

    @staticmethod
    def show(id):
        employee_found = Employee.employee_found(id)

        if employee_found:
            index = Employee.find_emp_index(id)
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
    def __init__(self, fname, lname, age, dept_id, salary, managed_id, id=None):
        id = id if id else uuid1().hex[:8]
        super().__init__(fname, lname, age, salary, dept_id, managed_id, id)

    def __str__(self):
        return f"""
            ID:                 {self.id}
            Name:               {self.fname} {self.lname}
            Age:                {self.age}
            Department ID:      {self.dept_id}
            Salary:             confidential
            Managed Department: {self.managed_id}
        """


class Department:
    # TODO: populate the list with data
    departments = []

    def __init__(self, name, id=None):
        self.id = id if id else uuid1().hex[:8]
        self.name = name

        Department.departments.append(self)

    @ staticmethod
    def department_found(department_id):
        for dept in Department.departments:
            if dept.id == department_id:
                return True

        return False

    @ staticmethod
    def list_all():
        if len(Department.departments):
            for dept in Department.departments:
                print(dept)
        else:
            print("No departments are found!")

    def __str__(self):
        return f"""
            Department ID:      {self.id}
            Department Name:    {self.name}
        """

    @ staticmethod
    def load_data():
        departments_data = Database.get_all_departments()

        for dept in departments_data:
            Department(
                dept[1],
                dept[0]
            )

        print("Department Data loaded Successfully!")

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


# mang = Manager('mah', 'met', 20, 'd1', 200, 'd3')
# Manager.list_all()
# Employee.list_all()
