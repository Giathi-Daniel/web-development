a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''

# Strings as arrays
b = "Hello World!"
print(len(b)) #Size
print(b[2:5]) #slice method
print(b.upper()) #changes tu uppercase
print(b.lower()) #changes tu lowercase
for b in "Hello World":
    print(b)


 

print(a)
# print(b[1])


# Formatting strings
quantity = 3
itemNo = 534
price = 49.76

myOrder = f"I want {quantity} pieces of item {itemNo} for {price} shillings"
print(myOrder)
