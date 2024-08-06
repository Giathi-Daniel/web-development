mylist = ["Python", "Javascript", "C++", "Python"] #ordered, changeable and allow duplicate
print(type(mylist))

# for x in mylist:
#     print(x)

i = 0
while i < len(mylist):
    print(mylist[i])
    i = i + 1

mylist.sort() # cannot be used when we have 'int' and 'str' together
print(mylist)

mylist[2:3] = ["REACT"]
print(mylist)

print(mylist.clear())


#add all items in a list
def sum_total(items):
    sum_numbers = 0
    multiply_numbers = 0

    for x in items:
        sum_numbers += x
        multiply_numbers *= x

    return sum_numbers, multiply_numbers
    
print(sum_total([20,23,-30]))
print(sum_total([20,23,-30]))


# QUIZ
# Write a Python program to get the largest number from a list.
def find_largest_number(lst):
    """This function finds the largest number in the given list."""
    if len(lst) == 0:
        return None  # If the list is empty, return None
    else:
        return max(lst) #using the built-in max function

# Example list
my_list = [10, 20, 30, 40, 50]

# Find the largest number in the list
largest_number = find_largest_number(my_list)
print("The largest number in the list is:", largest_number)


#Quiz 2: Write a Python program to get the smallest number from a list.
def find_smallest_number(lst):
    """This function finds the smallest number in the given list."""
    if len(lst) == 0:
        return None  # If the list is empty, return None
    else:
        return min(lst)

# Example list
my_list = [10, 20, 5, 30, 15]

# Find the smallest number in the list
smallest_number = find_smallest_number(my_list)
print("The smallest number in the list is:", smallest_number)

# QUIZ 3: Write a Python program to remove duplicates from a list.
# It is achieved by converting a list to a set
def remove_duplicates(lst):
    """This function removes duplicates from the given list."""
    return list(set(lst))

# Example list with duplicates
my_list = [1, 2, 3, 4, 2, 3, 5, 6, 1]

# Remove duplicates from the list
unique_list = remove_duplicates(my_list)
print("List after removing duplicates:", unique_list)

# QUIZ 4: Write a Python program to check if a list is empty or not.
# Achieved by setting the length to 0
def is_list_empty(lst):
    """This function checks if the given list is empty."""
    return len(lst) == 0

# Example lists
empty_list = []
non_empty_list = [1, 2, 3]

# Check if lists are empty
if is_list_empty(empty_list):
    print("The list is empty.")
else:
    print("The list is not empty.")

if is_list_empty(non_empty_list):
    print("The list is empty.")
else:
    print("The list is not empty.")


# QUIZ 5: Write a Python program to clone or copy a list.
# Achieved by using: Slice operator [:]., List() constructor., and copy() method from the copy module.
# ===================== 1. Slice operator [:] =====================
def clone_list(lst):
    """This function clones a list using the slice operator."""
    return lst[:]

# Original list
original_list = [1, 2, 3, 4, 5]

# Clone the list
cloned_list = clone_list(original_list)

print("Original list:", original_list)
print("Cloned list:", cloned_list)


# ===================== 2. List() constructor =====================
def clone_list(lst):
    """This function clones a list using the list constructor."""
    return list(lst)

# Original list
original_list = [1, 2, 3, 4, 5]

# Clone the list
cloned_list = clone_list(original_list)

print("Original list:", original_list)
print("Cloned list:", cloned_list)


# ===================== 3. copy() method from the copy module =====================
import copy

def clone_list(lst):
    """This function clones a list using the copy method."""
    return copy.copy(lst)

# Original list
original_list = [1, 2, 3, 4, 5]

# Clone the list
cloned_list = clone_list(original_list)

print("Original list:", original_list)
print("Cloned list:", cloned_list)
