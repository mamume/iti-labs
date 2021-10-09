import psycopg2

""" conn = psycopg2.connect(
            host="localhost",
            database="employees",
            user="postgres",
            password="112481632") """


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
                id VARCHAR(32) PRIMARY KEY,
                fname VARCHAR(20) NOT NULL,
                lname VARCHAR(20) NOT NULL,
                age INT NOT NULL,
                salary FLOAT NOT NULL,
                dept_id VARCHAR(32)
            );
        
            CREATE TABLE IF NOT EXISTS department (
                id VARCHAR(32) PRIMARY KEY,
                name VARCHAR(20) NOT NULL,
                manager_id VARCHAR(32),
                FOREIGN KEY (manager_id)
                    REFERENCES employee(id)
            );

            INSERT INTO employee(
                id,
                fname,
                lname,
                age,
                salary,
                dept_id
            )
            VALUES (
                '0',
                'Admin',
                'Admin',
                0,
                0,
                '0'
            );

            INSERT INTO department (
                id,
                name,
                manager_id
            )
            VALUES (
                '0',
                'dp1',
                '0'
            );

            ALTER TABLE employee 
            DROP CONSTRAINT IF EXISTS dept_id;

            ALTER TABLE employee
            ADD CONSTRAINT dept_id
            FOREIGN KEY (dept_id)
            REFERENCES department(id);
        ''')

        Database.conn.commit()

    def close_connection():
        Database.cur.close()

    @staticmethod
    def insert_employee(fname, lname, age, dept_id, salary):
        Database.cur.execute(f'''
            INSERT INTO employee (
                fname,
                lname,
                age,
                dept_id,
                salary
            )
            VALUES (
                {fname},
                {lname},
                {age},
                {dept_id},
                {salary}
            );
        ''')
        Database.conn.commit()
        return True

    @staticmethod
    def insert_department(id, name, manager_id):
        Database.cur.execute(f'''
            INSERT INTO department (
                id,
                name,
                manager_id
            )
            VALUES (
                {id},
                {name},
                {manager_id}
            );
        ''')
        Database.conn.commit()
        print("Department is inserted successfully!")
        return True

    @staticmethod
    def transfer_employee(emp_id, dept_id):
        Database.cur.execute(f'''
            UPDATE employee
            SET dept_id = {dept_id}
            WHRERE id = {emp_id};
        ''')

        Database.conn.commit()
        return True

    @staticmethod
    def delete_employee(emp_id):
        Database.cur.execute(f'''
            DELETE FROM employee
            WHERE id = {emp_id};
        ''')

        Database.conn.commit()
        return True


# Database(
#     "localhost",
#     "employees",
#     "postgres",
#     "112481632"
# )
# Database.connect()
# Database.intialize_db()

# Database.insert_employee('i', 'f', 3, 3, 43)
