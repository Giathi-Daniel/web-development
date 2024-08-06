# Python program to define an abstract class
from abc import ABC, abstractmethod

# abstract class to define an abstract method
class Polygon(ABC):
    def sides(self):
        pass

class Triangle(Polygon):
    def sides(self):
        print("I have 3 sides")

class Square(Polygon):
    def sides(self):
        print("I have 4 sides")

class Hexagon(Polygon):
    def sides(self):
        print("I have 6 sides")

# Hexagon
h = Hexagon()
h.sides()

# Triangle
h = Triangle()
h.sides()

#Square
h = Square()
h.sides()