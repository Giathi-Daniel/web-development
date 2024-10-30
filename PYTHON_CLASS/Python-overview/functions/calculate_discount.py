def calculate_discount(price, discount_percentage):
    discount = price * (discount_percentage / 100)
    
    final_price = price - discount
    
    if discount_percentage >= 20:
        return final_price
    else:
        return price
try:
    original_price = float(input("Enter the original price of the item: "))
    discount_percentage = float(input("Enter the discount percentage: "))
    
    final_price = calculate_discount(original_price, discount_percentage)

    print(f"The final price after applying the discount is: ${final_price:.2f}")
except ValueError:
    print("Please enter valid numerical values for price and discount.")


print(calculate_discount(3000, 20))
print(calculate_discount(3000, 10))


