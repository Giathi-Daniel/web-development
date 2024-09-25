class GrandFather:
    def __init__(self, land):
        self.land = land
            
    def __str__(self):
        return f"I have a big {self.land}"
            
class Father(GrandFather):
    def __init__(self, land, house):
        super().__init__(land)
        self.house = house
        
    def __str__(self):
        return f"{super().__str__()} and I have a beautiful {self.house}"
    
class Son(Father):
    def __init__(self, land, house, car):
        super().__init__(land, house)
        self.car = car
    
    def __str__(self):
        return f"{super().__str__()} and I have an expensive {self.car}"

property = Son("land", "house", "car")
print(property)
