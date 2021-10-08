from uuid import uuid1


class Employee:
    employees = []

    def __init__(self, fname, lname, age, dept, salary):
        self.id = uuid1().hex
        self.fname = fname
        self.lname = lname
        self.age = age
        self.dept = dept
        self.salary = salary

        Employee.employees.append(self)
        # TODO: insert element into database

    def __str__(self):
        return f"""
            ID:         {self.id}
            Name:       {self.fname} {self.lname}
            Age:        {self.age}
            Department: {self.dept}
            Salary:     {self.salary}
        """

    @staticmethod
    def find_emp_index(id):
        for i in range(len(Employee.employees)):
            if Employee.employees[i].id == id:
                return i

        return None

    @staticmethod
    def transfer(id, new_dept):
        index = Employee.find_emp_index(id)

        if index != None:
            Employee.employees[index].dept = new_dept
            print('Employee is Transfered')
        else:
            print('Employee is not found!')
        # TODO: update database

    @staticmethod
    def fire(id):
        index = Employee.find_emp_index(id)

        if index != None:
            del Employee.employees[index]
            print("Employee successfully deleted")
        else:
            print("Employee id is not found")

        # TODO: delete from database

    @classmethod
    def show(cls, id):
        index = Employee.find_emp_index(id)

        if index != None:
            print(Employee.employees[index])
        else:
            print("Employee id is not found!")

    @staticmethod
    def list_employees():
        if len(Employee.employees):
            for emp in Employee.employees:
                print(emp)
        else:
            print("No Employees are found")


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
