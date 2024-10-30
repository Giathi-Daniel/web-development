class Person:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
        
    def introduce(self):
        print("Hello ", self.name, " you are a ", self.age, " years old", self.gender)
    
person1 = Person("Jessica", 20, "female")
person1.introduce()
