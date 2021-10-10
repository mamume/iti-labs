import psycopg2


class Database:
    def __init__(self, host, db_name, user, password):
        Database.host = host
        Database.db_name = db_name
        Database.user = user
        Database.password = password

    @staticmethod
    def connect():
        Database.conn = psycopg2.connect(
            host=Database.host,
            database=Database.db_name,
            user=Database.user,
            password=Database.password
        )

        Database.cur = Database.conn.cursor()

    @staticmethod
    def initialize_db():
        Database.cur.execute('''
            CREATE TABLE IF NOT EXISTS employee (
                id CHAR(8) PRIMARY KEY,
                fname VARCHAR(20) NOT NULL,
                lname VARCHAR(20) NOT NULL,
                age INT NOT NULL,
                salary FLOAT NOT NULL,
                dept_id CHAR(8),
                managed_dept_id CHAR(8)
            );
        
            CREATE TABLE IF NOT EXISTS department (
                id CHAR(8) PRIMARY KEY,
                name VARCHAR(20) NOT NULL
            );
        ''')

        # Database.cur.execute("""
        #     SELECT COUNT(*)
        #     FROM employee;
        # """)

        # if Database.cur.fetchone()[0] == 0:
        #     Database.cur.execute('''
        #         INSERT INTO employee(
        #             id,
        #             fname,
        #             lname,
        #             age,
        #             salary,
        #             dept_id
        #         )
        #         VALUES (
        #             '0',
        #             'Admin',
        #             'Admin',
        #             0,
        #             0,
        #             '0',
        #             '0'
        #         );

        #         INSERT INTO department (
        #             id,
        #             name,
        #         )
        #         VALUES (
        #             '0',
        #             'dp1',
        #         );
        #     ''')
        # else:
        #     print('Data already found in tables')

        Database.cur.execute('''
            ALTER TABLE employee
            DROP CONSTRAINT IF EXISTS dept_id;

            ALTER TABLE employee
            DROP CONSTRAINT IF EXISTS managed_dept_id;

            ALTER TABLE employee
            ADD CONSTRAINT dept_id
            FOREIGN KEY (dept_id)
            REFERENCES department(id);

            ALTER TABLE employee
            ADD CONSTRAINT managed_dept_id
            FOREIGN KEY (managed_dept_id)
            REFERENCES department(id);
        ''')

        Database.conn.commit()

    @staticmethod
    def close_connection():
        Database.cur.close()

    @staticmethod
    def insert_employee(id, fname, lname, age, salary, dept_id, managed_id=None):
        if not managed_id:
            Database.cur.execute(f'''
                INSERT INTO employee (
                    id,
                    fname,
                    lname,
                    age,
                    dept_id,
                    salary
                )
                VALUES (
                    '{id}',
                    '{fname}',
                    '{lname}',
                    {age},
                    '{dept_id}',
                    {salary}
                );
            ''')
        else:
            Database.cur.execute(f'''
            INSERT INTO employee (
                id,
                fname,
                lname,
                age,
                dept_id,
                salary,
                managed_dept_id
            )
            VALUES (
                '{id}',
                '{fname}',
                '{lname}',
                {age},
                '{dept_id}',
                {salary},
                '{managed_id}'
            );
        ''')
        Database.conn.commit()
        print(f"Employee is inserted with id = {id}")

    @staticmethod
    def insert_department(id, dp_name):
        Database.cur.execute(f"""
            INSERT INTO department (id, name)
            VALUES ('{id}', '{dp_name}');
        """)

        Database.conn.commit()
        print(f"Department is inserted with id {id}")
        return True

    @staticmethod
    def transfer_employee(emp_id, dept_id):
        Database.cur.execute(f'''
            UPDATE employee
            SET dept_id = '{dept_id}'
            WHERE id = '{emp_id}';
        ''')

        Database.conn.commit()
        return True

    @staticmethod
    def delete_employee(emp_id):
        Database.cur.execute(f'''
            DELETE FROM employee
            WHERE id = '{emp_id}';
        ''')

        Database.conn.commit()
        return True

    @staticmethod
    def get_all_employees():
        Database.cur.execute("""
            SELECT *
            FROM employee;
        """)

        return Database.cur.fetchall()

    @staticmethod
    def get_all_departments():
        Database.cur.execute("""
            SELECT *
            FROM department;
        """)

        return Database.cur.fetchall()


# Database(
#     "localhost",
#     "employees",
#     "postgres",
#     "112481632"
# )
# Database.connect()
# Database.initialize_db()

# Database.get_all_employees()

# Database.insert_employee('i', 'f', 3, 3, 43)
