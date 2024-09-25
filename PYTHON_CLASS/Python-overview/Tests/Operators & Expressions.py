x = 10
y = 50
if x ** 2 > 100 and y < 100:
    print(x, y)

# quiz 2
a = [10, 20]
b = a
b += [30, 40]
print(a)
print(b)   # Output same bcause when working with lists, you a new copy is not created but instead, a reference to the original list is created

#quiz 3
print(-18 // 4)

# quiz 4
x = 6
y = 2
print(x ** y)
print(x // y)

# quiz 5
a = 4
b = 11
print(a | b) # Performs a BITWISE OR operation
print(a >> 2)

# quiz 6 -> What is the output of the following code
y = 10
x = y 
y+= 2
print(x)

# quiz 7
print(2 ** 3 ** 2)

#quiz 8 
print(36 / 4) #the result automatically converted to a floating number representing the quotient of the result

#quiz 9
print(36 // 4) #Division floor divides the first operand by the second (removes floating)

#quiz 10
result = 10 << 2 & 3 #<<>> operators have a higher precedence than & operator
print(result)

#quiz 11
x = 100
y = 50
print(x and y) #The `AND` operator returns the first operand if it evaluates it to `FALSE`, otherwise it returns the second operand.

# Quiz 12
print(2 * 3 ** 3 * 4) # Order of precidence. (3 ** 3) => 27; (27 *2) => 54; (54 * 4) => 216

# Quiz 13
print(2%6) # Gives out the remainder when 2 is divided by 6
          # When the equation is solved, the quotient is 0 and the remainder is 2 (Hence the asnwer). 

# Quiz 14
a = 20
b = 10
print(a ^ b) #Bitwise XOR

print(a >> 2) #Bitwise right shift
print(a << 2) #Bitwise left shift