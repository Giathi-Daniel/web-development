class Temperature:
    def __init__(self, temperature):
        self.temperature = temperature        

    def convertFahrenheit(self):
        fahrenheit = (self.celsius * 9/5) + 32
        print(f"Celsius: {self.celsius}, Fahrenheit: {fahrenheit}")
        return fahrenheit
    
    def convertCelcius(self):
        celsius = (self.temperature -32) * 5/9
        print(f"Fahrenheit: {self.temperature}, Celsius: {celsius}")
        return celsius
    
tempCelsius = 30
tempFahrenheit = 90

temp_celsius = Temperature(tempCelsius)
temp_fahrenheit = Temperature(tempFahrenheit)

print(temp_celsius.convertCelcius())
print(temp_fahrenheit.convertFahrenheit())