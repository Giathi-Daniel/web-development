# An anonymous function => a function without a name.
# def keyword defines normal functions
# lambda keyword is used to create an anonymous function -> It can have
# any arguements but only one expression is evaluated and returned
# lambda function is very useful when defined inside a class

# A program to illustrate the difference between lambda and normal function call
# 1. Normal function
def cube(y):
    return y*y*y

# 2. Lambda function
g = lambda x: x*x*x
print(g(7)) #lambda function call

print(cube(9)) #normal function call

