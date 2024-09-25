class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.diameter = 2 * radius

    def getArea(self):
        return 3.14 * self.radius * self.radius

    def getCircumference(self):
        return 3.14 * self.diameter

cir = Circle(7)
print(cir.radius)
print(cir.diameter)
print('Area::',cir.getArea())
print("Circumference ::", cir.getCircumference())