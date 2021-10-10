from Database import Database
from Department import Department
# uuid is used to generate unique id
from uuid import uuid1

""" Company Consists of 3 classes:
    - Employee
    - Manager which inherit from Employee """


class Employee:
    # List to store employees objects
    employees = []

    # Create Employee Object with given data
    def __init__(self, fname, lname, age, salary, dept_id, managed_id, id=None):
        # If ID not gived generate a new one
        self.id = id if id else uuid1().hex[:8]
        self.fname = fname
        self.lname = lname
        self.age = age
        self.dept_id = dept_id
        self.salary = salary
        self.managed_id = managed_id

        # Check if department id is found
        department_found = Department.department_found(dept_id)

        if department_found:
            Employee.employees.append(self)
        else:
            raise Exception("Department id is not found!")

    # Style for printing Employee data
    def __str__(self):
        return f"""
            ID:             {self.id}
            Name:           {self.fname} {self.lname}
            Age:            {self.age}
            Department ID:  {self.dept_id}
            Salary:         {self.salary}
        """

    """ Load data from database to employee class in the app start """
    @staticmethod
    def load_data():
        # Get all employee data from the database
        employees_data = Database.get_all_employees()

        for emp in employees_data:
            # Check if the employee is a manager or not
            # To determine which class will be used.
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

    """ Helper method returns the index of the employee """
    @staticmethod
    def find_emp_index(id):
        for i in range(len(Employee.employees)):
            if Employee.employees[i].id == id:
                return i

    """ Transfer employee to a new department """
    @staticmethod
    def transfer(emp_id, new_dept_id):
        # Check for employee and department ids are exist
        employee_found = Employee.employee_found(emp_id)
        dept_found = Department.department_found(new_dept_id)

        if employee_found and dept_found:
            # Update the database
            transfered = Database.transfer_employee(emp_id, new_dept_id)

            if transfered:
                # Update Employee class data
                index = Employee.find_emp_index(emp_id)
                Employee.employees[index].dept_id = new_dept_id
                print('Employee is Transfered')
        else:
            print('Employee or department id are not found!')

    """ Delete an Employee """
    @ staticmethod
    def fire(emp_id):
        # Check for employee id is found
        employee_found = Employee.employee_found(emp_id)

        if employee_found:
            # Delete employee from database
            deleted = Database.delete_employee(emp_id)

            if deleted:
                # Delete from class data
                index = Employee.find_emp_index(emp_id)
                del Employee.employees[index]
                print("Employee successfully deleted")
        else:
            print("Employee id is not found")

    """ Show Employee Data """
    @staticmethod
    def show(id):
        # Check if employee exists
        employee_found = Employee.employee_found(id)

        if employee_found:
            # Print employee data
            index = Employee.find_emp_index(id)
            print(Employee.employees[index])
        else:
            print("Employee id is not found!")

    """ Show All Employees Data """
    @ staticmethod
    def list_all():
        # Check for employees number
        if len(Employee.employees):
            # Loop on employees data then print each one
            for emp in Employee.employees:
                print(emp)
        else:
            print("No Employees are found")

    """ Helper method that checks if employee is found by id """
    @ staticmethod
    def employee_found(emp_id):
        for emp in Employee.employees:
            if emp.id == emp_id:
                return True

        return False


class Manager(Employee):
    def __init__(self, fname, lname, age, dept_id, salary, managed_id, id=None):
        # If id is None generate new one
        id = id if id else uuid1().hex[:8]
        super().__init__(fname, lname, age, salary, dept_id, managed_id, id)

    # Style for printing manager data without salary
    def __str__(self):
        return f"""
            ID:                 {self.id}
            Name:               {self.fname} {self.lname}
            Age:                {self.age}
            Department ID:      {self.dept_id}
            Salary:             confidential
            Managed Department: {self.managed_id}
        """
