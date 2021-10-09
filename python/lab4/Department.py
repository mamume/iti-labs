# from uuid import uuid1
# from Database import Database
# from Employee import Employee


# class Department:
#     # TODO: populate the list with data
#     departments = []

#     def __init__(self, name, manager_id):
#         self.id = uuid1().hex
#         self.name = name
#         self.manager_id = manager_id

#         manager_found = Employee.employee_found(manager_id)

#         if manager_found:
#             inserted = Database.insert_department(
#                 self.id,
#                 self.name,
#                 manager_id
#             )

#             if inserted:
#                 Department.departments.append(self)
#         else:
#             print("Manger id is not found!")

#     @staticmethod
#     def department_found(department_id):
#         for dept in Department.departments:
#             if dept.id == department_id:
#                 return True

#         return False
