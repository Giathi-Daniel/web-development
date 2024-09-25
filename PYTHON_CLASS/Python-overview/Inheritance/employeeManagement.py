#A simple program to calculate SalariedEmployee money and HourlyEmployee money.
class Employee:
    def __init__(self, emp_id, name, salary):
        self.emp_id = emp_id
        self.name = name
        self.salary = salary
    
    def calculate_salary(self):
        pass

class HourlyEmployee(Employee):
    def __init__(self, emp_id, name, salary, hourly_rate, hours_worked):
        super().__init__(emp_id, name, salary)
        self.hourly_rate = hourly_rate
        self.hours_worked = hours_worked
    
    def calculate_salary(self):
        return self.hourly_rate * self.hours_worked
    
class SalariedEmployee(Employee):
    def __init__(self, emp_id, name, salary, monthly_salary):
        super().__init__(emp_id, name, salary)
        self.monthly_salary = monthly_salary

    def calculate_salary(self):
        return self.monthly_salary

#Taking user input
emp_id = int(input("Enter employee id: "))
name = input("Enter your name: ")
salary = 0 #assuming salary is 0 for the base class
employee_type = input("Enter employee type(hourly/salaried): ")

if employee_type == 'hourly':
    hours_worked = int(input("Enter hours worked: "))
    hourly_rate = float(input("Enter hourly rate: "))
    emp = HourlyEmployee(emp_id, name, salary, hourly_rate, hours_worked)
elif employee_type == 'salaried':
    monthly_salary = float(input("Enter monthly salary: "))
    emp = SalariedEmployee(emp_id, name, salary, monthly_salary)
else:
    print("Invalid employee type")

#calculating and printing the salary
print("Employee name: ", emp.name)
print("Employee ID: ", emp.emp_id)
print("Salary: ", emp.calculate_salary())