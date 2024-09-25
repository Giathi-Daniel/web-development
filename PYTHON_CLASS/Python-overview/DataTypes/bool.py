print(bool(0)) #prints false
print(bool("Hello World")) #prints true
print(bool(15)) # prints true
print(bool(-10)) #prints true
print(bool(10j)) #prints true
print(bool()) #prints false -> empty string
print(bool(["Mercedes", "Benz"])) #prints true
print(bool([])) #prints false
print(bool({})) #prints false
print(bool()) #prints false


def student():
    return False

if student():
    print("Continue Learning")
else:
    print("Go work")