#Creating a new dictionary
student = {}
print(student)

# Defining a dictionary
student = {"name" :  "John", 
           "class" : "BCA", 
           "college" : "Turkish-College",
           "student" : True,
           "year" : 2018}
print(type(student)) #ordered, changeable & no duplicates
print(student)

for x in student:
    print(x)

print(len(student))
x = student["name"]
print(x)

y = student.keys() #gives out the keys
print(y)

z = student.values() #gives out the keys
print(z)

 #To change or use the dictionary to add items, we use square brackets as such:
student["name"] = "Job"
print(student)
student["age"] = 19
print(student)

# deleting elements from the dictionary
del student["name"] #deletes the key with the name of the student
print(student)

#removes all entry from the dictionary
student.clear()
print(student)

# Deleting the entire dictionary
del student
#print(student) #gives out a NameError: 'student' is not defined


#DICTIONARY AS A COUNTER
# Initialize counters for each letter
letter_counters = {chr(i): 0 for i in range(97, 123)}  # ASCII values for lowercase letters

# Sample string
sample_string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

# Traverse the string and increment corresponding counter
for char in sample_string:
    if char.isalpha():  # Check if the character is a letter
        char = char.lower()  # Convert to lowercase
        letter_counters[char] += 1

# Display the counts
for letter, count in letter_counters.items():
    print(f"{letter}: {count}")
