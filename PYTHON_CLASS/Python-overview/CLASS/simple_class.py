class Person:
    nationality = 'Ethiopian'
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def displayInfo(self):
        print("Name:", self.name, "\nAge: ", self.age, "\nNationality: ", self.nationality)
        
details1 = Person("Kamaa", 30)
details1.displayInfo()

# del Person -> delete class
# details1 = Person("Muray", 50)

# del details1 -> delete object
# details1.name

# del details1.nationality -> delete attribute
# details1.displayInfo()
