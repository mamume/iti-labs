from Database import Database
from uuid import uuid1


class Department:
    # List to contain department objects
    departments = []

    def __init__(self, name, id=None):
        # if id is None generate one
        self.id = id if id else uuid1().hex[:8]
        self.name = name

        # Add department to department class data
        Department.departments.append(self)

    # Helper method check if department found by id
    @ staticmethod
    def department_found(department_id):
        for dept in Department.departments:
            if dept.id == department_id:
                return True

        return False

    # Print all departments data
    @ staticmethod
    def list_all():
        if len(Department.departments):
            for dept in Department.departments:
                print(dept)
        else:
            print("No departments are found!")

    # Style for printing department data
    def __str__(self):
        return f"""
            Department ID:      {self.id}
            Department Name:    {self.name}
        """

    # Load department data from database at app start
    @ staticmethod
    def load_data():
        # Get all the data from database
        departments_data = Database.get_all_departments()

        # Add departments to class data
        for dept in departments_data:
            Department(
                dept[1],
                dept[0]
            )

        print("Department Data loaded Successfully!")
