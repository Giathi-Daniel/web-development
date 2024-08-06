# def f():
#     s = "I love programming" #Local variable
#     print(s)


# s = "Me too" #global variable
# f()
# print(s)


# def f():
#     global s
#     print(s)
#     s = "I love programming" # modified global variable
#     print(s)

# s = "Python is great"
# f()
# print(s)

x = 50
def fun1():
    x = 25
    print(x)
fun1()
print(x)


def func1():
    x = 50
    return x
func1()
print(x)


#Rules for naming a variable
    # 1. Should start with a letter or underscore
    # 2. Should not start with a number
    # 3. Reserved keywords such as and cannot be used in naming variables
    # 4. Variable names are key sensitive (age, Age are not the same)
    # 5. Variable names only contain alpha-numeric characters and undescores
