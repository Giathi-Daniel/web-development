def calculate (num1, num2=4):
  res = num1 * num2
  print(res)

calculate(5, 6)

# quiz two
salary = 8000

def printSalary():
  salary = 12000
  print("Salary:", salary)
  
printSalary()
print("Salary:", salary)

#quiz 3
x = 50
def fun1():
    x = 25
    print(x)
    
fun1()
print(x)

# quiz 3
# x = 75
# def myfunc():
#     x = x + 1
#     print(x)

# myfunc()
# print(x)

# quiz 4
x = 50
def fun1():
   global x
   x = 20
    # your code to assign global x = 20
fun1()
print(x) # it should print 20

#quiz 5
def func1():
    x = 50
    return x
func1()
print(x)