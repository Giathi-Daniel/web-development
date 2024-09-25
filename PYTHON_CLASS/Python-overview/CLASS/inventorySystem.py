#A simple program of an Inventory system
import datetime


class Product:
    def __init__(self, product_id, name, quantity_in_stock):
        self.product_id = product_id
        self.name = name
        self.quantity_in_stock = quantity_in_stock

class simpleProduct(Product):
    def __init__(self, product_id, name, quantity_in_stock, unit_price):
        super().__init__(product_id, name, quantity_in_stock)
        self.unit_price = unit_price
    
    def calculate_value(self):
        return self.quantity_in_stock * self.unit_price

class perishableProducts(simpleProduct):
    def __init__(self, product_id, name, quantity_in_stock, unit_price, expiry_date):
        super().__init__(product_id, name, quantity_in_stock, unit_price)
        self.expiry_date = expiry_date
    
    def calculate_value(self):
        pass

class digitalProduct(Product):
    def __init__(self, product_id, name, quantity_in_stock, price):
        super().__init__(product_id, name, quantity_in_stock)
        self.price = price
    
    def calculate_value(self):
        pass

#User prompt and calculations
product_id = int(input("Enter product ID: "))
name = input("Enter product name: ")
quantity_in_stock = int(input("Enter quantity in stock: "))
unit_price = int(input("Enter unit price: "))
expiryDate = input("Enter expiry date(yy-mm-dd): ")
expiry_date = datetime.strptime(expiryDate, "%Y-%m-%d")
current_date = datetime.now()
shelflife = expiry_date - current_date

SimpleProduct = simpleProduct(name, product_id, quantity_in_stock, unit_price)
simpleProduct.calculate_value()