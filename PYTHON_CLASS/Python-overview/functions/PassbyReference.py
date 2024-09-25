# In pyhthon variable name is a reference
def modify_list(lst):
    """This function modifies the list passed to it."""
    lst.append(4)  # Add an element to the list
    lst[0] = 100   # Modify an element in the list

# Define a list
my_list = [1, 2, 3]

print("Before modifying the list:", my_list)

# Call the function
modify_list(my_list)

print("After modifying the list:", my_list)

#Function can be called with keyword arguements or without.

# 1. Function with keyword arguements
def student(firstName, lastName = 'Mark', semester = 'Fifth'):
    print(firstName, lastName, 'studies in', semester, 'semester')

student(firstName="Tyson", semester='Tenth')

# 2. Function calling without keyword arguements
def student(firstName, lastName = 'Mark', semester = 'Fifth'):
    print(firstName, lastName, 'studies in', semester, 'semester')

student("Tyson", 'Steven', 'Eigth')