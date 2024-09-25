def add_product(product_name, price, quantity):
    """
    Create a dictionary object for a product with given parameters.
    
    Parameters:
    product_name (str): Name of the product.
    price (float): Price of the product.
    quantity (int): Initial quantity of the product in stock.
    
    Returns:
    dict: Dictionary object representing the product.
    """
    return {'product_name': product_name, 'price': price, 'quantity': quantity}

def update_price(product, new_price):
    """
    Update the price of a product in the given dictionary object.
    
    Parameters:
    product (dict): Dictionary object representing the product.
    new_price (float): Updated price of the product.
    
    Returns:
    dict: Modified dictionary representing the product.
    """
    product['price'] = new_price
    return product

def update_quantity(product, quantity_change):
    """
    Update the quantity of a product in the given dictionary object.
    
    Parameters:
    product (dict): Dictionary object representing the product.
    quantity_change (int): Change in quantity of the product (positive for addition, negative for subtraction).
    
    Returns:
    dict: Modified dictionary representing the product.
    """
    product['quantity'] += quantity_change
    return product

# Example usage:
# Add a product
product1 = add_product("Phone", 500.0, 10)
print("Initial Product:", product1)

# Update price
product1 = update_price(product1, 550.0)
print("Product after price update:", product1)

# Update quantity
product1 = update_quantity(product1, -5)
print("Product after quantity update:", product1)
