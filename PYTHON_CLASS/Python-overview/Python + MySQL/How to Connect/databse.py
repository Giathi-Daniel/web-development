import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    database="Software",
    user="root",
    password=""
)

cursor = conn.cursor()

# Create TABLE

# create_table_query = """
# CREATE TABLE employees (
#     emp_id INT AUTO_INCREMENT PRIMARY KEY,
#     emp_name VARCHAR(100),
#     emp_salary DECIMAL(10, 2),
#     emp_department VARCHAR(100)
# )
# """
# cursor.execute(create_table_query)
# conn.commit()


# INSERT TABLE DETAILS

insert_table_query = """
INSERT INTO employees (emp_name, emp_salary, emp_department) 
VALUES ('Joe Smith', 100000.00, 'Software Engineer'),
    ('Humphrey Lukas', 50000.00, 'Entry Level'),
    ('Hellen Nduta', 70000.00, 'Frontend Developer')

"""
cursor.execute(insert_table_query)
conn.commit()

# READ DATABASE
read_table_query = """
SELECT * FROM employees
"""
cursor.execute(read_table_query)
rows = cursor.fetchall()
for row in rows:
    print(row)


# DELETE RECORDS
delete_table_query = """
DELETE FROM employees WHERE emp_department = 'Entry Level'
"""
cursor.execute(delete_table_query)
conn.commit()

cursor.close()
conn.close()
